"use strict";

const BaseObject = require("../baseObject");

class BaseRecord  {

    constructor() {
        // super();
        this._type = "listRel"
    }

    _getSoapType() {
        return "listRel:basic";
    }
}

module.exports = BaseRecord;
