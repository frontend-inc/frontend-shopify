"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../context");
var useShopify = function () {
    var _a = (0, react_1.useContext)(context_1.ShopifyContext), logo = _a.logo, domain = _a.domain, shopUrl = _a.shopUrl, storefrontAccessToken = _a.storefrontAccessToken, customerPortalUrl = _a.customerPortalUrl, apiVersion = _a.apiVersion;
    return {
        logo: logo,
        domain: domain,
        shopUrl: shopUrl,
        storefrontAccessToken: storefrontAccessToken,
        customerPortalUrl: customerPortalUrl,
        apiVersion: apiVersion
    };
};
exports.default = useShopify;
