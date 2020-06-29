"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class contactSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "contactSearchRowBasic";
        this._type = "listRel";
    }
}

module.exports = contactSearchRowBasic;
