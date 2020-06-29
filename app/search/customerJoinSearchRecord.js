"use strict";

const BaseObject = require("../baseObject");

class CustomerJoinSearchRecord  {

    constructor() {
        // super();
        this._type = "listRel"
    }

    _getSoapType() {
        return "listRel:customerJoin";
    }
}

module.exports = CustomerJoinSearchRecord;
