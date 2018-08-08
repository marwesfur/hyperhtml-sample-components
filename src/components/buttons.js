import hyperHTML from 'hyperhtml';

class Wrapper extends HTMLElement {
    constructor() {
        super();
        this.hyper = hyperHTML(this);


        this.buttons = [0, 1, 2, 3];
        this.callbacks = [console.log, console.log, console.log, console.log];
        this.render();
    }

    onClick(text) {
        console.log(`Button says ${text}`)
    }

    render() {
        const buttons = this.buttons.map(btn => {
            const button = hyperHTML.wire({ btn })`<x-button text="Click me" props=${this.getButtonPropsForIndex(btn)}></x-button>`;

            return button;
        });

        this.hyper`${buttons}`;
    }

    getButtonPropsForIndex(i) {
        return {
            onButtonClick: this.callbacks[i],
            messages: {
                onClick: `Hello ${i}`
            }
        }
    }
}



class Button extends HTMLElement {

    get props() {
        return this._props;
    }

    set props(value) {
        this._props = value;
    }

    constructor() {
        super();
        this.hyper = hyperHTML(this);
        console.log(this.props);
        console.log(this.getAttribute('text'));
        this.hyper`<button onClick="${() => this.onClick()}">${this.getAttribute('text')}</button>`;
    }

    onClick() {
        this.props.onButtonClick(this.props.messages.onClick);
    }
}




customElements.define('x-button', Button);
customElements.define('x-wrapper', Wrapper);
