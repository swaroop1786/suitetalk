"use strict";

const Attach = require("./common/attach");

class ContactAttachRequest extends Attach {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "AttachContactReference";
    }
}

module.exports = ContactAttachRequest;
