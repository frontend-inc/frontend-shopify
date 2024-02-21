"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayFromString = exports.getMetafieldReferences = exports.getMetafieldReference = exports.getMetafieldImage = exports.getMetafieldValue = exports.getMetafield = void 0;
// Metafield helpers
var getMetafield = function (metaobject, key) {
    var _a;
    return (_a = metaobject === null || metaobject === void 0 ? void 0 : metaobject.metafields) === null || _a === void 0 ? void 0 : _a.find(function (field) { return (field === null || field === void 0 ? void 0 : field.key) == key; });
};
exports.getMetafield = getMetafield;
var getMetafieldValue = function (metaobject, key) {
    var field = (0, exports.getMetafield)(metaobject, key);
    return field === null || field === void 0 ? void 0 : field.value;
};
exports.getMetafieldValue = getMetafieldValue;
var getMetafieldImage = function (metaobject, key) {
    var _a, _b;
    var field = (0, exports.getMetafield)(metaobject, key);
    return (_b = (_a = field === null || field === void 0 ? void 0 : field.reference) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url;
};
exports.getMetafieldImage = getMetafieldImage;
var getMetafieldReference = function (metaobject, key) {
    var field = (0, exports.getMetafield)(metaobject, key);
    return field === null || field === void 0 ? void 0 : field.reference;
};
exports.getMetafieldReference = getMetafieldReference;
var getMetafieldReferences = function (metaobject, key) {
    var _a;
    var field = (0, exports.getMetafield)(metaobject, key);
    return (_a = field === null || field === void 0 ? void 0 : field.references) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; });
};
exports.getMetafieldReferences = getMetafieldReferences;
var getArrayFromString = function (stringArray) {
    var jsonValues = JSON.parse("{ \"values\": " + stringArray + " }");
    return jsonValues === null || jsonValues === void 0 ? void 0 : jsonValues.values;
};
exports.getArrayFromString = getArrayFromString;
