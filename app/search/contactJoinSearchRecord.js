"use strict";

const BaseObject = require("../baseObject");

class ContactJoinSearchRecord  {

    constructor() {
        // super();
        this._type = "listRel"
    }

    _getSoapType() {
        return "listRel:contactJoin";
    }
}

module.exports = ContactJoinSearchRecord;
