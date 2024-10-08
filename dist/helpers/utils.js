"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopifyIdFromGid = exports.getBase64DecodedId = exports.decodeBase64 = exports.stripParams = exports.renderLineItemCompareAtPrice = exports.renderLineItemPrice = exports.renderMerchandiseTitle = exports.truncate = exports.getSellingPlanPrice = exports.getSellingPlanDescription = exports.findVariantByColor = exports.shopifyResizeImage = exports.formatCurrency = void 0;
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
var shopifyResizeImage = function (url, _a) {
    var height = _a.height, width = _a.width;
    if (!url)
        return;
    var extension = url.split('.').pop();
    var filePath = url.split("." + extension)[0];
    var resizedUrl = filePath + "_" + width + "x" + height + "." + extension + "?q=100";
    return resizedUrl;
};
exports.shopifyResizeImage = shopifyResizeImage;
var findVariantByColor = function (product, color) {
    var _a, _b;
    var productVariant = (_b = (_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b.find(function (_a) {
        var _b;
        var variant = _a.node;
        return (_b = variant === null || variant === void 0 ? void 0 : variant.selectedOptions) === null || _b === void 0 ? void 0 : _b.find(function (selectedOption) {
            return (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) == 'Color' && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) == color;
        });
    });
    return productVariant === null || productVariant === void 0 ? void 0 : productVariant.node;
};
exports.findVariantByColor = findVariantByColor;
var getSellingPlanDescription = function (sellingPlan) {
    var _a, _b, _c;
    var adjustment = ((sellingPlan === null || sellingPlan === void 0 ? void 0 : sellingPlan.priceAdjustments) && ((_a = sellingPlan === null || sellingPlan === void 0 ? void 0 : sellingPlan.priceAdjustments[0]) === null || _a === void 0 ? void 0 : _a.adjustmentValue)) || {};
    var savingsDescription = 'Save';
    if (adjustment === null || adjustment === void 0 ? void 0 : adjustment.adjustmentPercentage) {
        savingsDescription += " " + adjustment.adjustmentPercentage + "%";
    }
    else if ((_b = adjustment === null || adjustment === void 0 ? void 0 : adjustment.price) === null || _b === void 0 ? void 0 : _b.amount) {
        savingsDescription += " $" + adjustment.price.amount;
    }
    else if ((_c = adjustment === null || adjustment === void 0 ? void 0 : adjustment.adjustmentAmount) === null || _c === void 0 ? void 0 : _c.amount) {
        savingsDescription += " " + adjustment.adjustmentAmount.amount;
    }
    return savingsDescription;
};
exports.getSellingPlanDescription = getSellingPlanDescription;
var getSellingPlanPrice = function (variant, sellingPlan) {
    var _a, _b, _c, _d;
    var originalPrice = (_a = variant === null || variant === void 0 ? void 0 : variant.price) === null || _a === void 0 ? void 0 : _a.amount;
    var adjustment = ((sellingPlan === null || sellingPlan === void 0 ? void 0 : sellingPlan.priceAdjustments) && ((_b = sellingPlan === null || sellingPlan === void 0 ? void 0 : sellingPlan.priceAdjustments[0]) === null || _b === void 0 ? void 0 : _b.adjustmentValue)) || {};
    var discountedPrice = originalPrice;
    if (adjustment === null || adjustment === void 0 ? void 0 : adjustment.adjustmentPercentage) {
        discountedPrice = originalPrice - (originalPrice * adjustment.adjustmentPercentage) / 100;
    }
    else if ((_c = adjustment === null || adjustment === void 0 ? void 0 : adjustment.price) === null || _c === void 0 ? void 0 : _c.amount) {
        discountedPrice = adjustment.price.amount;
    }
    else if ((_d = adjustment === null || adjustment === void 0 ? void 0 : adjustment.adjustmentAmount) === null || _d === void 0 ? void 0 : _d.amount) {
        discountedPrice = originalPrice - adjustment.adjustmentAmount.amount;
    }
    return discountedPrice;
};
exports.getSellingPlanPrice = getSellingPlanPrice;
var truncate = function (str, n) {
    return (str === null || str === void 0 ? void 0 : str.length) > n ? str.substr(0, n - 1) + '...' : str;
};
exports.truncate = truncate;
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
// NextJS ShopifyImageType has trouble rendering SVG icons if file ext does not end in .svg
// such as ?variant=1234567890 so a fix here is to strip params from url
function stripParams(src) {
    return src === null || src === void 0 ? void 0 : src.split('?')[0];
}
exports.stripParams = stripParams;
var decodeBase64 = function (data) {
    return Buffer.from(data, 'base64').toString('ascii');
};
exports.decodeBase64 = decodeBase64;
var getBase64DecodedId = function (id) {
    var orderGid = (0, exports.decodeBase64)(id);
    var orderId = orderGid.split('/')[-1];
    return orderId.split('?')[0];
};
exports.getBase64DecodedId = getBase64DecodedId;
var getShopifyIdFromGid = function (gid) {
    var parsedURL = new URL(gid);
    var pathname = parsedURL.pathname;
    var segments = pathname.split('/');
    var finalSegment = segments[segments.length - 1];
    return finalSegment;
};
exports.getShopifyIdFromGid = getShopifyIdFromGid;
