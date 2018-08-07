'use strict';

import HyperHTMLElement from 'hyperhtml-element';

class AddressElement extends HyperHTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        // const observer = new MutationObserver(changes => this.render());
        // observer.observe(this, {childList: true});
    }

    static get observedAttributes() {
        return ['address'];
    }

    get address() {
        const value = this.getAttribute('address');
        return value && JSON.parse(value);
    }

    set address(value) {
        if (!value) {
            this.removeAttribute('address');
            this.setState({address: null});
        }
        else {
            this.setAttribute('address', JSON.stringify(value));
            this.setState({address: this.address});
        }
    }

    attributeChangedCallback(name, prev, curr) {
        this.render();
    }

    render() {
        // when using without shadowDom and slot
        // const customButtonElem = this.querySelectorAll("button");
        // return this.html`
        //     Street: ${this.state.address.street}<br/>
        //     City: ${this.state.address.city} <br/>
        //     Custom button: ${customButtonElem}<br/>
        //     End of things`;


        return this.html`
            Street: ${this.state.address.street}<br/>
            City: ${this.state.address.city} <br/>
            Custom button: <slot></slot><br/>
            End of things`;
    }

    get defaultState() {
        return {address: this.address || {}};
    }
}

AddressElement.define('my-address');