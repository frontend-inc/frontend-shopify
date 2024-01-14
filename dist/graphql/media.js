"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFragment = void 0;
var client_1 = require("@apollo/client");
exports.ImageFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment ImageFragment on Image {\n\t\tid\n\t\taltText\n\t\turl\n\t}\n"], ["\n\tfragment ImageFragment on Image {\n\t\tid\n\t\taltText\n\t\turl\n\t}\n"])));
var templateObject_1;
