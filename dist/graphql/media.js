"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyImageTypeFragment = exports.FieldsForMediaTypes = void 0;
var client_1 = require("@apollo/client");
exports.FieldsForMediaTypes = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment FieldsForMediaTypes on Media {\n    alt\n    mediaContentType\n    ... on Video {\n      id\n      sources {\n        format\n        height\n        mimeType\n        url\n        width\n      }\n    }\n    ... on ExternalVideo {\n      id\n      host\n      embeddedUrl\n    }\n    ... on Model3d {\n      sources {\n        format\n        mimeType\n        url\n      }\n    }\n    ... on MediaImage {\n      id\n      image {\n        altText\n        url\n      }\n    }\n  }\n"], ["\n  fragment FieldsForMediaTypes on Media {\n    alt\n    mediaContentType\n    ... on Video {\n      id\n      sources {\n        format\n        height\n        mimeType\n        url\n        width\n      }\n    }\n    ... on ExternalVideo {\n      id\n      host\n      embeddedUrl\n    }\n    ... on Model3d {\n      sources {\n        format\n        mimeType\n        url\n      }\n    }\n    ... on MediaImage {\n      id\n      image {\n        altText\n        url\n      }\n    }\n  }\n"])));
exports.ShopifyImageTypeFragment = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfragment ShopifyImageTypeFragment on ShopifyImageType {\n\t\tid\n\t\taltText\n\t\turl\n\t}\n"], ["\n\tfragment ShopifyImageTypeFragment on ShopifyImageType {\n\t\tid\n\t\taltText\n\t\turl\n\t}\n"])));
var templateObject_1, templateObject_2;
