import HyperHTMLElement from 'hyperhtml-element';


class BioComponent extends HyperHTMLElement {

    static get observedAttributes() {
        return ['props'];
    }

    // todo: check if we have received props through an attribute. maybe in created or connected?
    get props() {
        return this._props;
    }

    // when setting "props" as a property, exepct an object
    set props(value) {
        this._props = value;
        if (!this._init$) {
            this.render(); // assume, that an element is already in the dom and we change its props -- then we need to re-render...
            // when going through attributes, HyperHTMLElement automatically triggers render for us
        }
    }
}


class Slide extends BioComponent {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        const isSelected = this.props && this.props.isSelected;

        return isSelected
            ? this.html`<div class="slide"><slot></slot></div>`
            : this.html`<div class="slide"></div>`;
    }

}

Slide.define('x-slide');

class Slider extends BioComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => !this._init$ && this.render());
        observer.observe(this, {childList: true});

        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
        this.onSelectSlide = this.onSelectSlide.bind(this);
    }

    created() {
        this.render();
    }

    get defaultProps() {
        return {selected: 0};
    }

    render() {
        const props = this.props || this.defaultProps;
        const slidesCount = this.slidesCount;

        this.slides.forEach((slide, idx) => slide.props = {isSelected: idx === props.selected});

        return this.html`
            <x-stepper direction="prev" onclick=${this.onPrevSlide}></x-stepper>
            <div class="slides">
                <slot></slot>
            </div>
            <x-stepper direction="next" onclick=${this.onNextSlide}></x-stepper>
            <x-dots 
                props=${ {count: slidesCount, selected: props.selected} }
                onselectSlide=${this.onSelectSlide}></x-dots>
        `;
    }

    onSelectSlide(e) {
        this.props = {selected: e.detail};

        this.raiseSlideChange();
    }

    onPrevSlide() {
        const {selected} = this.props || this.defaultProps;
        const slidesCount = this.slidesCount;

        this.props = {selected: (selected - 1 + slidesCount) % slidesCount };

        this.raiseSlideChange();
    }

    onNextSlide() {
        const {selected} = this.props || this.defaultProps;
        const slidesCount = this.slidesCount;

        this.props = {selected: (selected + 1) % slidesCount };

        this.raiseSlideChange();
    }

    raiseSlideChange() {
        const changeEvent = new CustomEvent('slideChange', {
            bubbles: true,
            cancelable: true,
            detail: this.props.selected
        });

        this.dispatchEvent(changeEvent);
    }

    get slides() {
        return [...this.childNodes].filter((n) => n instanceof Slide);
    }

    get slidesCount() {
        return this.slides.length;
    }
}

Slider.define('x-slider');

class Dots extends BioComponent {

    created() {
        this.render();
    }

    render() {
        const {selected, count} = this.props;
        const dots = new Array(count).fill(1);

        const dotElements = dots.map((_, idx) => selected === idx
            ? BioComponent.wire()`<li onclick=${() => this.onSelected(idx)} style="color: red">+</li>`
            : BioComponent.wire()`<li onclick=${() => this.onSelected(idx)}>+</li>`);

        this.html`
            <ul>${dotElements}</ul>
        `;
    }

    onSelected(index) {
        const selectEvent = new CustomEvent('selectSlide', {
            bubbles: true,
            cancelable: true,
            detail: index
        });

        this.dispatchEvent(selectEvent);
    }
}

Dots.define('x-dots');


class Stepper extends BioComponent {

    created() {
        this.render();
    }

    render() {
        this.html`
            <button>${this.getAttribute('direction')}</button>
        `;
    }
}

Stepper.define('x-stepper');
