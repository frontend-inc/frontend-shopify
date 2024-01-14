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
var useCart = function () {
    var _a = (0, react_1.useContext)(context_1.ShopContext), shopifyClient = _a.shopifyClient, cart = _a.cart, setCart = _a.setCart;
    var _b = (0, hooks_1.useLoadingWrapper)(), errors = _b.errors, loading = _b.loading, loadingWrapper = _b.loadingWrapper;
    var cartBuyerIdentityUpdate = function (customerAccessToken, email) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.updateCartBuyerIdentity(cart === null || cart === void 0 ? void 0 : cart.id, customerAccessToken, email);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartLineAdd = function (line) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartLinesAdd([line])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var cartLinesAdd = function (lines) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.cartLinesAdd(cart === null || cart === void 0 ? void 0 : cart.id, lines);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartLineRemove = function (lineId) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.cartLineRemove(cart === null || cart === void 0 ? void 0 : cart.id, lineId);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartLinesRemove = function (lineIds) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.removeCartLines(cart === null || cart === void 0 ? void 0 : cart.id, lineIds);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartLineUpdate = function (line) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartLinesUpdate([line])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var cartLinesUpdate = function (lines) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.cartLinesUpdate(cart === null || cart === void 0 ? void 0 : cart.id, lines);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartApplyDiscountCode = function (discountCode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartDiscountCodesUpdate([discountCode])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var cartDiscountCodesUpdate = function (discountCodes) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.cartDiscountCodesUpdate(cart === null || cart === void 0 ? void 0 : cart.id, discountCodes);
                    })];
                case 1:
                    response = _a.sent();
                    setCart(response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    var cartRemoveDiscountCode = function (code) { return __awaiter(void 0, void 0, void 0, function () {
        var newCodes;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    newCodes = [];
                    if (((_a = cart === null || cart === void 0 ? void 0 : cart.discountCodes) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        newCodes = (_b = cart === null || cart === void 0 ? void 0 : cart.discountCodes) === null || _b === void 0 ? void 0 : _b.filter(function (discountCode) { return discountCode.code != code; });
                    }
                    return [4 /*yield*/, cartDiscountCodesUpdate(newCodes)];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    }); };
    var findCart = function (cartId) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.findCart(cartId); })];
                case 1:
                    response = _f.sent();
                    if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cart) {
                        setCart((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.cart);
                        (0, cookies_next_1.setCookie)('shopifyCartId', (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.cart) === null || _d === void 0 ? void 0 : _d.id);
                    }
                    return [2 /*return*/, (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.cart];
            }
        });
    }); };
    var cartFindOrCreate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, cartId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, cookies_next_1.getCookie)('shopifyCartId')];
                case 1:
                    cartId = _a.sent();
                    if (!cartId) return [3 /*break*/, 5];
                    return [4 /*yield*/, findCart(cartId)];
                case 2:
                    response = _a.sent();
                    if (!!response) return [3 /*break*/, 4];
                    return [4 /*yield*/, cartCreate()];
                case 3:
                    response = _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, cartCreate()];
                case 6:
                    response = _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/, response];
            }
        });
    }); };
    var cartCreate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.cartCreate(); })];
                case 1:
                    response = _b.sent();
                    if (response === null || response === void 0 ? void 0 : response.data) {
                        setCart(response === null || response === void 0 ? void 0 : response.data);
                        (0, cookies_next_1.setCookie)('shopifyCartId', (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.id);
                    }
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (!(cart === null || cart === void 0 ? void 0 : cart.id)) {
            cartFindOrCreate();
        }
    }, [cart]);
    return {
        loading: loading,
        errors: errors,
        cart: cart,
        setCart: setCart,
        cartApplyDiscountCode: cartApplyDiscountCode,
        cartBuyerIdentityUpdate: cartBuyerIdentityUpdate,
        cartRemoveDiscountCode: cartRemoveDiscountCode,
        cartCreate: cartCreate,
        cartDiscountCodesUpdate: cartDiscountCodesUpdate,
        cartFindOrCreate: cartFindOrCreate,
        cartLineAdd: cartLineAdd,
        cartLinesAdd: cartLinesAdd,
        cartLineRemove: cartLineRemove,
        cartLinesRemove: cartLinesRemove,
        cartLineUpdate: cartLineUpdate,
        cartLinesUpdate: cartLinesUpdate,
        findCart: findCart,
    };
};
exports.default = useCart;
