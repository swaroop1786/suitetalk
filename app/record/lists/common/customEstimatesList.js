"use strict";

const BaseObject = require("../../../baseObject");

class CustomEstimateList extends BaseObject {

    constructor() {
        super();
        this.replaceAll = false;
        this.list = [];
        this._listName = undefined;
    }

    _getSoapType() {
        return `tranSales:itemList`;
    }

    _getAttributes() {
        return {
            "replaceAll": this.replaceAll,
            "xsi:type": `tranSales:EstimateItemList`,
        };
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = 'tranSales:itemList'

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};


        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        const xml = [];

        // Node soap is not friendly to arrays. Outputs as object.
        this.list.map((el) => {
            const t = el._getSoapType();
            const e = el.getNode()[t];
            xml.push(`<tranSales:item xsi:type="tranSales:EstimateItem">`);
            if (e["$attributes"]["entitlement"] !== '') {
                xml.push(`<tranSales:customFieldList>`)
                xml.push(`<platformCore:customField xsi:type="platformCore:StringCustomFieldRef" scriptId="custcol_rc_bc_entitlement_info">`)
                xml.push(`<platformCore:value>${e["$attributes"]["entitlement"]}</platformCore:value>`)
                xml.push(`</platformCore:customField>`)
                xml.push(`</tranSales:customFieldList>`)
            }
            xml.push(`<tranSales:quantity>${e["$attributes"]["quantity"]}</tranSales:quantity>`)
            xml.push(`<tranSales:item externalId="${e["tranSales:item"]["$attributes"]["externalId"]}" type="inventoryItem" xsi:type="platformCore:RecordRef"></tranSales:item>`);
            xml.push("</tranSales:item>");
        });

        node[type]["$xml"] = xml.join("");


        return node;
    }
}

module.exports = CustomEstimateList;
