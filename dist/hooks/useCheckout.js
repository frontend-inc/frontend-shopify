"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../context");
var cookies_next_1 = require("cookies-next");
var hooks_1 = require("../hooks");
var useCheckout = function () {
    var _a = (0, react_1.useContext)(context_1.ShopContext), domain = _a.domain, shopifyClient = _a.shopifyClient, checkout = _a.checkout, setCheckout = _a.setCheckout;
    var cookie = domain + "-checkout-id";
    var _b = (0, hooks_1.useLoadingWrapper)(), loading = _b.loading, errors = _b.errors, loadingWrapper = _b.loadingWrapper;
    var _c = (0, react_1.useState)([]), discountCodes = _c[0], setDiscountCodes = _c[1];
    var _d = (0, react_1.useState)({}), discountCodeError = _d[0], setDiscountCodeError = _d[1];
    var checkoutLineItemAdd = function (lineItem) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, variantId, quantity, customAttributes, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = lineItem || {}, variantId = _a.variantId, quantity = _a.quantity, customAttributes = _a.customAttributes;
                    return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.addCheckoutLineItem(checkout === null || checkout === void 0 ? void 0 : checkout.id, {
                                variantId: variantId,
                                quantity: quantity,
                                customAttributes: customAttributes,
                            });
                        })];
                case 1:
                    response = _b.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutLineItemsAdd = function (lineItems) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.addCheckoutLineItems(checkout === null || checkout === void 0 ? void 0 : checkout.id, lineItems);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutLineItemUpdate = function (lineItemId, quantity) { return __awaiter(void 0, void 0, void 0, function () {
        var lineItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lineItems = [{ id: lineItemId, quantity: quantity }];
                    return [4 /*yield*/, checkoutLineItemsUpdate(lineItems)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var checkoutLineItemsUpdate = function (lineItems) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.updateCheckoutLineItems(checkout === null || checkout === void 0 ? void 0 : checkout.id, lineItems);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutLineItemRemove = function (lineItemId) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.removeCheckoutLineItems(checkout === null || checkout === void 0 ? void 0 : checkout.id, [lineItemId]);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutLineItemsRemove = function (lineItemIds) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.removeCheckoutLineItems(checkout === null || checkout === void 0 ? void 0 : checkout.id, lineItemIds);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutDiscountCodeApply = function (discountCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.applyCheckoutDiscountCode(checkout === null || checkout === void 0 ? void 0 : checkout.id, discountCode);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutDiscountCodeRemove = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.removeCheckoutDiscountCode(checkout === null || checkout === void 0 ? void 0 : checkout.id);
                    })];
                case 1:
                    response = _a.sent();
                    setCheckout(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var checkoutFindOrCreate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, checkoutId, variables_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checkoutId = (0, cookies_next_1.getCookie)(cookie);
                    if (!checkoutId) return [3 /*break*/, 5];
                    return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.findCheckout(checkoutId); })];
                case 1:
                    resp = _b.sent();
                    if (!(((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.orderStatusUrl) != null)) return [3 /*break*/, 3];
                    // If there was a successful checkout,
                    // clear the cookie and create a new checkout
                    setCheckout(null);
                    (0, cookies_next_1.setCookie)(cookie, null);
                    return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.checkoutCreate(); })];
                case 2:
                    resp = _b.sent();
                    setCheckout(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                case 3:
                    setCheckout(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                case 4: return [3 /*break*/, 7];
                case 5:
                    variables_1 = { input: {} };
                    return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.checkoutCreate(variables_1); })];
                case 6:
                    resp = _b.sent();
                    setCheckout(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (checkout) {
            (0, cookies_next_1.setCookie)(cookie, checkout === null || checkout === void 0 ? void 0 : checkout.id);
            if ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.discountApplications) === null || _a === void 0 ? void 0 : _a.edges) {
                var codes = (_b = checkout === null || checkout === void 0 ? void 0 : checkout.discountApplications) === null || _b === void 0 ? void 0 : _b.edges.map(function (_a) {
                    var _b, _c;
                    var discount = _a.node;
                    return ({
                        code: discount.code,
                        amount: (_b = discount.value) === null || _b === void 0 ? void 0 : _b.amount,
                        percentage: (_c = discount.value) === null || _c === void 0 ? void 0 : _c.percentage,
                    });
                });
                setDiscountCodes(codes);
            }
        }
        else {
            checkoutFindOrCreate();
        }
    }, [checkout]);
    (0, react_1.useEffect)(function () {
        checkoutFindOrCreate();
    }, []);
    return {
        loading: loading,
        errors: errors,
        checkout: checkout,
        discountCodes: discountCodes,
        discountCodeError: discountCodeError,
        setDiscountCodeError: setDiscountCodeError,
        checkoutLineItemAdd: checkoutLineItemAdd,
        checkoutLineItemsAdd: checkoutLineItemsAdd,
        checkoutLineItemUpdate: checkoutLineItemUpdate,
        checkoutLineItemsUpdate: checkoutLineItemsUpdate,
        checkoutLineItemRemove: checkoutLineItemRemove,
        checkoutLineItemsRemove: checkoutLineItemsRemove,
        checkoutDiscountCodeApply: checkoutDiscountCodeApply,
        checkoutDiscountCodeRemove: checkoutDiscountCodeRemove,
    };
};
exports.default = useCheckout;
