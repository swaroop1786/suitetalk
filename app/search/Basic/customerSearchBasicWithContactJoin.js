"use strict";

const ContactJoinBasic = require("./common/contactJoin");

class CustomerSearchBasicWithContactJoin extends ContactJoinBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "ContactSearchBasic";
    }
}

module.exports = CustomerSearchBasicWithContactJoin;
