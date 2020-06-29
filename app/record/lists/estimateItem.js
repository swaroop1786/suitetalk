"use strict";

const Line = require("./common/line");

class EstimateItem extends Line {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "EstimateItem";
        this._listName = "item";
        
    }
}

module.exports = EstimateItem;
