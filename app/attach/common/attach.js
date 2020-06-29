"use strict";

const AttachRequest = require("../attachrequest");

class Attach extends AttachRequest {

    constructor() {
        super();
        this.contact = {};
        this.contactRole = {};
        this.attachTo = {};
    }

    _getAttributes() {
        return {
            "xsi:type": `${this._type}:${this._name}`,
        };
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        if(Object.keys(this.attachTo).length){
            Object.assign(node[type], this.attachTo.getNode());
        }

        if(Object.keys(this.contact).length){
            Object.assign(node[type], this.contact.getNode());
        }

        if(Object.keys(this.contactRole).length){ 
            Object.assign(node[type], this.contactRole.getNode());
        }
        
        return node;
    }
}

module.exports = Attach;
