"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_MENU_BY_HANDLE = void 0;
var client_1 = require("@apollo/client");
exports.QUERY_MENU_BY_HANDLE = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery GetMenu($handle: String!) {\n\t\tmenu(handle: $handle) {\n\t\t\thandle\n\t\t\tid\n\t\t\ttitle\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\turl\n\t\t\t\ttype\n\t\t\t\titems {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tquery GetMenu($handle: String!) {\n\t\tmenu(handle: $handle) {\n\t\t\thandle\n\t\t\tid\n\t\t\ttitle\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\turl\n\t\t\t\ttype\n\t\t\t\titems {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));
var templateObject_1;
