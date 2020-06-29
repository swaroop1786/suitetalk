"use strict";

const SearchBasic = require("./common/searchBasic");

class CustomerSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "CustomerSearchRowBasic";
    }
}

module.exports = CustomerSearchBasic;
