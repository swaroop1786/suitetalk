"use strict";

const BaseObject = require("../baseObject");

class AttachRequest extends BaseObject {

    constructor() {
        super();
    }

    _getSoapType() {
        return "attachReference";
    }
}

module.exports = AttachRequest;
