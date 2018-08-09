import HyperHTMLElement from 'hyperhtml-element';


class BioComponent<TProps extends object, TState> extends HyperHTMLElement<TState> {

    private _props: TProps; 
    
    get props(): TProps {
        return {...(<any>this.defaultProps), ...(<any>this.propsFromAttributes), ...(<any>this._props)};
    }

    set props(value) {
        this._props = value;
        this.onPropsChanged();
    }

    get propsFromAttributes(): TProps {
        return null;
    }

    get defaultProps(): TProps {
        return null;
    }

    // overwrite if you eg need to merge into your state
    onPropsChanged() {
        this.render();
    }
}


interface SlideProps {
    isSelected: boolean;
}

interface SlideState {

}

class Slide extends BioComponent<SlideProps, SlideState> {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get defaultProps() {
        return {isSelected: this.hasAttribute('selected')};
    }

    created() {
        this.render();
    }

    render() {
        const isSelected = this.props.isSelected;

        return isSelected
            ? this.html`<div class="slide"><slot></slot></div>`
            : this.html``;
    }
}

Slide.define('x-slide');

interface SliderProps {
    selected: number;
}

interface SliderState {
    lastSelected: number;
    selected: number;
}

class Slider extends BioComponent<SliderProps, SliderState> {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => !(<any>this)._init$ && this.render());
        observer.observe(this, {childList: true});

        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
        this.onSelectSlide = this.onSelectSlide.bind(this);
    }

    get defaultState() {
        return {lastSelected: 0, selected: 0};
    }

    onPropsChanged() {
        this.setState({selected: this.props.selected});
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    get defaultProps() {
        var initiallySelectedSlide = this.hasAttribute('selected')
            ? parseInt(this.getAttribute('selected'), 10)
            : 0;

        return {selected: initiallySelectedSlide};
    }

    render() {
        const {selected} = this.state;
        const slidesCount = this.slidesCount;

        this.slides.forEach((slide, idx) => slide.props = {isSelected: idx === selected});

        return this.html`
            <x-stepper direction="prev" onclick=${this.onPrevSlide}></x-stepper>
            <div class="slides">
                <slot></slot>
            </div>
            <x-stepper direction="next" onclick=${this.onNextSlide}></x-stepper>
            <x-dots 
                props=${ {count: slidesCount, selected} }
                onselectSlide=${this.onSelectSlide}></x-dots>
        `;
    }

    onSelectSlide(e) {
        this.setSelectedSlide(e.detail);
    }

    setSelectedSlide(selected) {
        this.setState({lastSelected: this.state.selected, selected});
        this.raiseSlideChange();
    }

    onPrevSlide() {
        const {selected} = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected - 1 + slidesCount) % slidesCount);
    }

    onNextSlide() {
        const {selected} = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected + 1) % slidesCount);
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
        return [...(<any>this.childNodes)].filter((n) => n instanceof Slide);
    }

    get slidesCount() {
        return this.slides.length;
    }
}

Slider.define('x-slider');

interface DotsProps {
    selected: number;
    count: number
}

interface DotsState {

}

class Dots extends BioComponent<DotsProps, DotsState> {

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


class Stepper extends BioComponent<{},{}> {

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
