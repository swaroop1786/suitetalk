"use strict";

const SearchRecord = require("../../searchRecord");

class Search extends SearchRecord {

    constructor() {
        super();
        this.basic ={};
        this.customerJoin = {};
        this.contactJoin = {};
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

        // this.searchFields.forEach((el) => {
        //     Object.assign(node[type], el.getNode());
        // });

        if(Object.keys(this.basic).length){
            Object.assign(node[type], this.basic.getNode());
        }

        if(Object.keys(this.customerJoin).length){ 
            Object.assign(node[type], this.customerJoin.getNode());
        }
        
        if(Object.keys(this.contactJoin).length){ 
            Object.assign(node[type], this.contactJoin.getNode());
        }

        return node;
    }
}

module.exports = Search;
