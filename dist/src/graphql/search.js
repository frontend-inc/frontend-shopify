"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_SEARCH = void 0;
var client_1 = require("@apollo/client");
var products_1 = require("./products");
exports.QUERY_SEARCH = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery Search($query: String!, $after: String) {\n\t\tsearch(\n\t\t\tfirst: 48\n\t\t\tafter: $after\n\t\t\tquery: $query\n\t\t\treverse: false\n\t\t\tsortKey: RELEVANCE\n\t\t) {\n\t\t\tpageInfo {\n\t\t\t\tstartCursor\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Search($query: String!, $after: String) {\n\t\tsearch(\n\t\t\tfirst: 48\n\t\t\tafter: $after\n\t\t\tquery: $query\n\t\t\treverse: false\n\t\t\tsortKey: RELEVANCE\n\t\t) {\n\t\t\tpageInfo {\n\t\t\t\tstartCursor\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), products_1.ProductFragment);
var templateObject_1;
