"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloClient = exports.useApollo = exports.createClient = void 0;
var ShopifyClient_1 = require("./ShopifyClient");
Object.defineProperty(exports, "createClient", { enumerable: true, get: function () { return ShopifyClient_1.createClient; } });
var apollo_1 = require("./apollo");
Object.defineProperty(exports, "useApollo", { enumerable: true, get: function () { return apollo_1.useApollo; } });
var apollo_2 = require("./apollo");
Object.defineProperty(exports, "createApolloClient", { enumerable: true, get: function () { return apollo_2.createApolloClient; } });
__exportStar(require("./types"), exports);
__exportStar(require("./utils"), exports);
