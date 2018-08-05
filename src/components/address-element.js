'use strict';

import HyperHTMLElement from 'hyperhtml-element';

class AddressElement extends HyperHTMLElement {

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
        return this.html`
            Street: ${this.state.address.street}<br/>
            City: ${this.state.address.city}`;
    }

    get defaultState() {
        return {address: this.address || {}};
    }
}

AddressElement.define('my-address');