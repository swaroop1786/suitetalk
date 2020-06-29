"use strict";

const Search = require("./common/search");

class CustomerSearch extends Search {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerSearch";
    }
}

module.exports = CustomerSearch;
