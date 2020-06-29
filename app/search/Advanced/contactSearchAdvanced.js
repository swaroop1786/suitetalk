"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class ContactSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "ContactSearchAdvanced";
        this._type = "listRel";
    }
}

module.exports = ContactSearchAdvanced;
