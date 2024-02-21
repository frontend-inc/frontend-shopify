"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopifyIdFromGid = exports.stripParams = exports.getBase64DecodedId = exports.renderLineItemCompareAtPrice = exports.renderLineItemPrice = exports.renderMerchandiseTitle = exports.formatCurrency = exports.shopifyResizeImage = exports.truncate = exports.getArrayFromString = exports.getMetafieldReferences = exports.getMetafieldReference = exports.getMetafieldImage = exports.getMetafieldValue = exports.getMetafieldType = exports.getMetafield = void 0;
// Metafield helpers
var getMetafield = function (metaobject, key) {
    var _a;
    return (_a = metaobject === null || metaobject === void 0 ? void 0 : metaobject.metafields) === null || _a === void 0 ? void 0 : _a.find(function (field) { return (field === null || field === void 0 ? void 0 : field.key) == key; });
};
exports.getMetafield = getMetafield;
var getMetafieldType = function (metaobject, key) {
    var field = (0, exports.getMetafield)(metaobject, key);
    return field === null || field === void 0 ? void 0 : field.type;
};
exports.getMetafieldType = getMetafieldType;
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
var truncate = function (str, n) {
    return (str === null || str === void 0 ? void 0 : str.length) > n ? str.substr(0, n - 1) + '...' : str;
};
exports.truncate = truncate;
var shopifyResizeImage = function (url, _a) {
    var height = _a.height, width = _a.width;
    if (!url)
        return;
    var extension = url.split('.').pop();
    var filePath = url.split("." + extension)[0];
    var resizedUrl = filePath + "_" + width + "x" + height + "." + extension;
    return resizedUrl;
};
exports.shopifyResizeImage = shopifyResizeImage;
var formatCurrency = function (money, digits) {
    if (digits === void 0) { digits = 2; }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
    }).format(money);
};
exports.formatCurrency = formatCurrency;
// Shopify will render single SKU products with title 'Default Title'
var renderMerchandiseTitle = function (merchandise) {
    var _a;
    if ((merchandise === null || merchandise === void 0 ? void 0 : merchandise.title) != 'Default Title') {
        return merchandise === null || merchandise === void 0 ? void 0 : merchandise.title;
    }
    else {
        return (_a = merchandise === null || merchandise === void 0 ? void 0 : merchandise.product) === null || _a === void 0 ? void 0 : _a.title;
    }
};
exports.renderMerchandiseTitle = renderMerchandiseTitle;
var renderLineItemPrice = function (line) {
    var _a, _b, _c, _d, _e;
    if (line === null || line === void 0 ? void 0 : line.sellingPlanAllocation) {
        return (0, exports.formatCurrency)((_c = (_b = (_a = line === null || line === void 0 ? void 0 : line.sellingPlanAllocation) === null || _a === void 0 ? void 0 : _a.priceAdjustments[0]) === null || _b === void 0 ? void 0 : _b.price) === null || _c === void 0 ? void 0 : _c.amount);
    }
    else {
        return (0, exports.formatCurrency)((_e = (_d = line === null || line === void 0 ? void 0 : line.merchandise) === null || _d === void 0 ? void 0 : _d.price) === null || _e === void 0 ? void 0 : _e.amount);
    }
};
exports.renderLineItemPrice = renderLineItemPrice;
var renderLineItemCompareAtPrice = function (line) {
    var _a, _b, _c, _d, _e;
    if (line === null || line === void 0 ? void 0 : line.sellingPlanAllocation) {
        return (0, exports.formatCurrency)((_c = (_b = (_a = line === null || line === void 0 ? void 0 : line.sellingPlanAllocation) === null || _a === void 0 ? void 0 : _a.priceAdjustments[0]) === null || _b === void 0 ? void 0 : _b.compareAtPrice) === null || _c === void 0 ? void 0 : _c.amount);
    }
    else {
        return (0, exports.formatCurrency)((_e = (_d = line === null || line === void 0 ? void 0 : line.merchandise) === null || _d === void 0 ? void 0 : _d.price) === null || _e === void 0 ? void 0 : _e.amount);
    }
};
exports.renderLineItemCompareAtPrice = renderLineItemCompareAtPrice;
var decodeBase64 = function (data) {
    return Buffer.from(data, 'base64').toString('ascii');
};
var getBase64DecodedId = function (id) {
    var orderGid = decodeBase64(id);
    var orderId = orderGid.split('/')[-1];
    return orderId.split('?')[0];
};
exports.getBase64DecodedId = getBase64DecodedId;
// NextJS Image has trouble rendering SVG icons if file ext does not end in .svg
// such as ?variant=1234567890 so a fix here is to strip params from url
function stripParams(src) {
    return src === null || src === void 0 ? void 0 : src.split('?')[0];
}
exports.stripParams = stripParams;
var getShopifyIdFromGid = function (gid) {
    var parsedURL = new URL(gid);
    var pathname = parsedURL.pathname;
    var segments = pathname.split('/');
    var finalSegment = segments[segments.length - 1];
    return finalSegment;
};
exports.getShopifyIdFromGid = getShopifyIdFromGid;
