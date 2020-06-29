"use strict";

const Search = require("./common/search");

class ContactSearch extends Search {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "ContactSearch";
    }
}

module.exports = ContactSearch;
