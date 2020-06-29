"use strict";

const SearchBasic = require("./common/searchBasic");

class ContactSearchRowBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "ContactSearchRowBasic";
    }
}

module.exports = ContactSearchRowBasic;
