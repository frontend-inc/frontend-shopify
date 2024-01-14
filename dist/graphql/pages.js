"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_PAGES = exports.QUERY_PAGE_BY_HANDLE = void 0;
var client_1 = require("@apollo/client");
var PageFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment PageFragment on Page {\n\t\tid\n\t\thandle\n\t\ttitle\n\t\tbody\n\t\tbodySummary\n\t\tcreatedAt\n\t\tupdatedAt\n\t}\n"], ["\n\tfragment PageFragment on Page {\n\t\tid\n\t\thandle\n\t\ttitle\n\t\tbody\n\t\tbodySummary\n\t\tcreatedAt\n\t\tupdatedAt\n\t}\n"])));
exports.QUERY_PAGE_BY_HANDLE = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery Page($handle: String!) {\n\t\tpageByHandle(handle: $handle) {\n\t\t\t...PageFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Page($handle: String!) {\n\t\tpageByHandle(handle: $handle) {\n\t\t\t...PageFragment\n\t\t}\n\t}\n\t", "\n"])), PageFragment);
exports.QUERY_PAGES = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tquery Pages($first: Int!, $query: String) {\n\t\tpages(first: $first, query: $query) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...PageFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Pages($first: Int!, $query: String) {\n\t\tpages(first: $first, query: $query) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...PageFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), PageFragment);
var templateObject_1, templateObject_2, templateObject_3;
