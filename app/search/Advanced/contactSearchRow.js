"use strict";

const SearchRow = require("./common/searchRow");

class contactSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "contactSearchRow";
        this._type = "listRel";
    }
}

module.exports = contactSearchRow;
