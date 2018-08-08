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
        this.render(); // assume, that an element is already in the dom and we change its props -- then we need to re-render...
        // when going through attributes, HyperHTMLElement automatically triggers render for us
    }
}


class Slide extends BioComponent {

}

Slide.define('x-slide');

class Slider extends BioComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => this.render());
        observer.observe(this, {childList: true});
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    get defaultProps() {
        return {selected: 0};
    }

    render() {
        const slides = [...this.childNodes].filter((n) => n instanceof Slide);
        const slidesCount = slides.length;
        const props = this.props || this.defaultProps;

        return this.html`
            <div class="slides">
                <slot></slot>
            </div>
            <x-dots 
                props=${ {count: slidesCount, selected: props.selected} }
                onselectSlide=${e => this.onSelectSlide(e)}></x-dots>
        `;
    }

    onSelectSlide(e) {
        this.props = {selected: e.detail};
    }
}

Slider.define('x-slider');

class Dots extends BioComponent {

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    render() {
        const {selected} = this.props;
        const dots = new Array(this.props.count).fill(1);

        const dotElements = dots.map((_, idx) => selected === idx
            ? BioComponent.wire()`<li onclick=${() => this.onSelected(idx)}><b>+</b></li>`
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
