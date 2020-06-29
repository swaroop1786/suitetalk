"use strict";

const CustomerJoinBasic = require("./common/customerJoin");

class CustomerSearchBasicWithCustomerJoin extends CustomerJoinBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "CustomerSearchBasic";
    }
}

module.exports = CustomerSearchBasicWithCustomerJoin;
