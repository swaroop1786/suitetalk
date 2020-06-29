"use strict";

const CustomEstimateList = require("./common/customEstimatesList");

class EstimatesItemList extends CustomEstimateList {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "EstimateItemList";
        this._listName = "itemList";
    }
}

module.exports = EstimatesItemList;
