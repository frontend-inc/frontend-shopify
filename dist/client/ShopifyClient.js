"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.ShopifyClient = void 0;
var apollo_1 = require("./apollo");
var graphql_1 = require("../graphql");
var ShopifyClient = /** @class */ (function () {
    function ShopifyClient(domain, storefrontAccessToken, fetchAccessToken, apiVersion) {
        if (apiVersion === void 0) { apiVersion = '2024-04'; }
        this._fetchAccessToken = fetchAccessToken;
        this.apollo = (0, apollo_1.initApollo)(domain, storefrontAccessToken, apiVersion);
        this.init();
    }
    ShopifyClient.prototype.init = function () {
        this._first = 20;
        this._filters = [];
        this._sortKey = 'COLLECTION_DEFAULT';
        this._reverse = false;
        this._query = null;
        return this;
    };
    ShopifyClient.prototype.first = function (first) {
        this._first = first;
        return this;
    };
    ShopifyClient.prototype.after = function (after) {
        this._after = after;
        return this;
    };
    ShopifyClient.prototype.sort = function (sortKey) {
        this._sortKey = sortKey;
        return this;
    };
    ShopifyClient.prototype.accessToken = function (token) {
        this._accessToken = token;
        return this;
    };
    ShopifyClient.prototype.reverse = function (reverse) {
        this._reverse = reverse;
        return this;
    };
    ShopifyClient.prototype.filters = function (filters) {
        //@ts-ignore
        this._filters = filters;
        return this;
    };
    ShopifyClient.prototype.filterInStock = function () {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                available: true,
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.filterOutOfStock = function () {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                available: false,
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.filterShopifyProductType = function (productType) {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                productType: productType,
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.filterVendor = function (productVendor) {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                productVendor: productVendor,
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.filterVariantOption = function (name, value) {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                variantOption: {
                    name: name,
                    value: value,
                },
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.filterMetafield = function (namespace, key, value) {
        this._filters = __spreadArray(__spreadArray([], this._filters, true), [
            {
                productMetafield: {
                    namespace: namespace,
                    key: key,
                    value: value,
                },
            },
        ], false);
        return this;
    };
    ShopifyClient.prototype.query = function (query) {
        this._query = query;
        return this;
    };
    // Articles
    ShopifyClient.prototype.findArticle = function (handle) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_ARTICLE_BY_HANDLE, {
                            handle: handle,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.articleByHandle,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findArticles = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, _f, first, query, response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _e = params || {}, _f = _e.first, first = _f === void 0 ? 20 : _f, query = _e.query;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_ARTICLES, {
                                first: first || this._first,
                                query: query || this._query,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.articles) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.articles) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Blogs
    ShopifyClient.prototype.findBlog = function (handle) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_BLOG_BY_HANDLE, { handle: handle })];
                    case 1:
                        response = _e.sent();
                        data = __assign(__assign({}, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.blogByHandle), { articles: (_d = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.blogByHandle) === null || _c === void 0 ? void 0 : _c.articles) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }) });
                        return [2 /*return*/, {
                                data: data,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findBlogs = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, _f, first, query, response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _e = params || {}, _f = _e.first, first = _f === void 0 ? 20 : _f, query = _e.query;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_BLOGS, {
                                first: first || this._first,
                                query: query || this._query,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.blogs) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.blogs) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Cart
    ShopifyClient.prototype.findCart = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_CART, {
                            id: id,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response === null || response === void 0 ? void 0 : response.data,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartCreate = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_CREATE, {
                            input: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartCreate) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartDiscountCodesUpdate = function (cartId, discountCodes) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_DISCOUNT_CODES_UPDATE, {
                            cartId: cartId,
                            discountCodes: discountCodes,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartDiscountCodesUpdate) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartLineAdd = function (cartId, line) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartLinesAdd(cartId, [line])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopifyClient.prototype.cartLinesAdd = function (cartId, lines) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_LINES_ADD, {
                            cartId: cartId,
                            lines: lines,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartLinesAdd) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartLineRemove = function (cartId, lineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartLinesRemove(cartId, [lineId])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopifyClient.prototype.cartLinesRemove = function (cartId, lineIds) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_LINES_REMOVE, {
                            cartId: cartId,
                            lineIds: lineIds,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartLinesRemove) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartLinesUpdate = function (cartId, lines) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_LINES_UPDATE, {
                            cartId: cartId,
                            lines: lines,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartLinesUpdate) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.cartBuyerIdentityUpdate = function (cartId, buyerIdentity) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CART_BUYER_IDENTITY_UPDATE, {
                            cartId: cartId,
                            buyerIdentity: buyerIdentity,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.cartBuyerIdentityUpdate) === null || _b === void 0 ? void 0 : _b.cart,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Checkout
    ShopifyClient.prototype.findCheckout = function (id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.CHECKOUT_FETCH, {
                            id: id,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.checkoutCreate = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_CREATE, {
                            input: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutCreate) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.addCheckoutLineItem = function (checkoutId, lineItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addCheckoutLineItems(checkoutId, [lineItem])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopifyClient.prototype.addCheckoutLineItems = function (checkoutId, lineItems) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_LINE_ITEMS_ADD, {
                            checkoutId: checkoutId,
                            lineItems: lineItems,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutLineItemsAdd) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.updateCheckoutLineItems = function (checkoutId, lineItems) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_LINE_ITEMS_UPDATE, {
                            checkoutId: checkoutId,
                            lineItems: lineItems,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutLineItemsUpdate) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.removeCheckoutLineItem = function (checkoutId, lineItemId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeCheckoutLineItems(checkoutId, [lineItemId])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopifyClient.prototype.removeCheckoutLineItems = function (checkoutId, lineItemIds) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_LINE_ITEMS_REMOVE, {
                            checkoutId: checkoutId,
                            lineItemIds: lineItemIds,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutLineItemsRemove) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.applyCheckoutDiscountCode = function (checkoutId, discountCode) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_DISCOUNT_CODE_APPLY, {
                            checkoutId: checkoutId,
                            discountCode: discountCode,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutDiscountCodeApply) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.removeCheckoutDiscountCode = function (checkoutId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.CHECKOUT_DISCOUNT_CODE_REMOVE, {
                            checkoutId: checkoutId,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.checkoutDiscountCodeRemove) === null || _b === void 0 ? void 0 : _b.checkout,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Products
    ShopifyClient.prototype.findProduct = function (handle, metafields) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var gql, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        gql = (0, graphql_1.QUERY_PRODUCT_BY_HANDLE_FN)(metafields);
                        return [4 /*yield*/, this.executeQuery(gql, {
                                handle: handle
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.productByHandle,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findProductbyId = function (id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_PRODUCT_BY_ID, { id: id })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.product,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findProducts = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var productQuery, response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this._query = (params === null || params === void 0 ? void 0 : params.query) || this._query;
                        //this._first = params?.first || this._first || 48
                        this._sortKey = (params === null || params === void 0 ? void 0 : params.sortKey) || this._sortKey;
                        this._reverse = (params === null || params === void 0 ? void 0 : params.reverse) || this._reverse;
                        this._after = (params === null || params === void 0 ? void 0 : params.after) || this._after;
                        productQuery = {
                            query: this._query,
                            sortKey: this._sortKey,
                            reverse: this._reverse,
                            after: this._after,
                        };
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_PRODUCTS, {
                                variables: productQuery,
                            })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.products) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.searchProducts = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var searchQuery, response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this._query = (params === null || params === void 0 ? void 0 : params.query) || this._query;
                        this._sortKey = (params === null || params === void 0 ? void 0 : params.sortKey) || this._sortKey || 'RELEVANCE';
                        this._first = (params === null || params === void 0 ? void 0 : params.first) || this._first || 48;
                        this._after = (params === null || params === void 0 ? void 0 : params.after) || this._after;
                        this._filters = (params === null || params === void 0 ? void 0 : params.filters) || this._filters || [];
                        searchQuery = {
                            first: this._first,
                            sortKey: this._sortKey,
                            reverse: false,
                            after: this._after,
                            productFilters: this._filters,
                        };
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_SEARCH, {
                                query: this._query,
                                variables: searchQuery,
                            })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.search) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.search) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findProductRecommendations = function (productId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_PRODUCT_RECOMMENDATIONS, {
                            productId: productId,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.productRecommendations,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Collections
    ShopifyClient.prototype.findCollection = function (handle, query) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, _f, first, filters, _g, reverse, _h, sortKey, after, response, data;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _e = query || {}, _f = _e.first, first = _f === void 0 ? 20 : _f, filters = _e.filters, _g = _e.reverse, reverse = _g === void 0 ? false : _g, _h = _e.sortKey, sortKey = _h === void 0 ? 'COLLECTION_DEFAULT' : _h, after = _e.after;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_COLLECTION_BY_HANDLE, {
                                handle: handle,
                                first: first || this._first,
                                filters: filters || this._filters,
                                reverse: reverse || this._reverse,
                                sortKey: sortKey || this._sortKey,
                                after: after || this._after,
                            })];
                    case 1:
                        response = _j.sent();
                        data = __assign(__assign({}, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.collectionByHandle), { products: (_d = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.collectionByHandle) === null || _c === void 0 ? void 0 : _c.products) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }) });
                        return [2 /*return*/, {
                                data: data,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findCollections = function (first) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this._first = first || this._first;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_COLLECTIONS, {
                                first: this._first,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.collections) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.collections) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: (response === null || response === void 0 ? void 0 : response.error) || ((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.collections) === null || _f === void 0 ? void 0 : _f.userErrors),
                            }];
                }
            });
        });
    };
    // Authentication
    ShopifyClient.prototype.login = function (email, password) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_ACCESS_TOKEN_CREATE, {
                            input: { email: email, password: password },
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAccessTokenCreate) === null || _b === void 0 ? void 0 : _b.customerAccessToken,
                                error: (response === null || response === void 0 ? void 0 : response.error) ||
                                    ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.customerAccessTokenCreate) === null || _d === void 0 ? void 0 : _d.customerUserErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.signup = function (customer) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_CREATE, {
                            input: customer,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerCreate) === null || _b === void 0 ? void 0 : _b.customer,
                                error: (response === null || response === void 0 ? void 0 : response.error) || ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.customerCreate) === null || _d === void 0 ? void 0 : _d.customerUserErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.forgotPassword = function (email) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_RECOVER, {
                            email: email,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerRecover,
                                error: (response === null || response === void 0 ? void 0 : response.error) || ((_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerRecover) === null || _c === void 0 ? void 0 : _c.customerUserErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.resetPassword = function (resetToken, password) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_RESET_BY_URL, {
                            resetToken: resetToken,
                            password: password,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerResetByUrl,
                                error: (response === null || response === void 0 ? void 0 : response.error) ||
                                    ((_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerResetByUrl) === null || _c === void 0 ? void 0 : _c.customerUserErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.refreshCustomerAccessToken = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_ACCESS_TOKEN_RENEW, {
                                customerAccessToken: customerAccessToken,
                            })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAccessTokenRenew,
                                error: (response === null || response === void 0 ? void 0 : response.error) || ((_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerAccessTokenRenew) === null || _c === void 0 ? void 0 : _c.userErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.logout = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_ACCESS_TOKEN_DELETE, {
                                customerAccessToken: customerAccessToken,
                            })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAccessTokenDelete,
                                error: ((_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerAccessTokenDelete) === null || _c === void 0 ? void 0 : _c.userErrors) ||
                                    (response === null || response === void 0 ? void 0 : response.error),
                            }];
                }
            });
        });
    };
    // Customers
    ShopifyClient.prototype.findCustomer = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_CUSTOMER, {
                                customerAccessToken: customerAccessToken,
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customer,
                                error: ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerUserErrors) || (response === null || response === void 0 ? void 0 : response.error),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.updateCustomer = function (customer) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_UPDATE, {
                                customerAccessToken: customerAccessToken,
                                customer: customer,
                            })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerUpdate) === null || _b === void 0 ? void 0 : _b.customer,
                                error: ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.customerUpdate) === null || _d === void 0 ? void 0 : _d.customerUserErrors) || (response === null || response === void 0 ? void 0 : response.error),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.updateCustomerPassword = function (_a) {
        var _b, _c, _d, _e;
        var password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_UPDATE, {
                                customerAccessToken: customerAccessToken,
                                customer: {
                                    password: password,
                                },
                            })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, {
                                data: (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.customerUpdate) === null || _c === void 0 ? void 0 : _c.customer,
                                error: (response === null || response === void 0 ? void 0 : response.error) || ((_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.customerUpdate) === null || _e === void 0 ? void 0 : _e.customerUserErrors),
                            }];
                }
            });
        });
    };
    // Customer Addresses
    ShopifyClient.prototype.findCustomerAddresses = function (first, cursor) {
        var _a, _b, _c, _d, _e, _f;
        if (first === void 0) { first = 20; }
        if (cursor === void 0) { cursor = null; }
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_CUSTOMER_ADDRESSES, {
                                customerAccessToken: customerAccessToken,
                                first: first,
                                cursor: cursor,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.addresses) === null || _c === void 0 ? void 0 : _c.pageInfo,
                                data: (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.customer) === null || _e === void 0 ? void 0 : _e.addresses) === null || _f === void 0 ? void 0 : _f.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.updateCustomerAddress = function (address) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_ADDRESS_UPDATE, {
                                customerAccessToken: customerAccessToken,
                                id: address.id,
                                address: {
                                    firstName: address === null || address === void 0 ? void 0 : address.firstName,
                                    lastName: address === null || address === void 0 ? void 0 : address.lastName,
                                    address1: address === null || address === void 0 ? void 0 : address.address1,
                                    address2: address === null || address === void 0 ? void 0 : address.address2,
                                    phone: address === null || address === void 0 ? void 0 : address.phone,
                                    city: address === null || address === void 0 ? void 0 : address.city,
                                    country: address === null || address === void 0 ? void 0 : address.country,
                                    province: address === null || address === void 0 ? void 0 : address.province,
                                    zip: address === null || address === void 0 ? void 0 : address.zip,
                                },
                            })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAddressUpdate) === null || _b === void 0 ? void 0 : _b.customerAddress,
                                error: ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.customerAddressUpdate) === null || _d === void 0 ? void 0 : _d.customerUserErrors) ||
                                    (response === null || response === void 0 ? void 0 : response.error),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.createCustomerAddress = function (address) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_ADDRESS_CREATE, {
                                customerAccessToken: customerAccessToken,
                                address: address,
                            })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, {
                                data: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAddressCreate) === null || _b === void 0 ? void 0 : _b.customerAddress,
                                error: (response === null || response === void 0 ? void 0 : response.error) ||
                                    ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.customerAddressCreate) === null || _d === void 0 ? void 0 : _d.customerUserErrors),
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.deleteCustomerAddress = function (id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        return [4 /*yield*/, this.executeMutation(graphql_1.MUTATION_CUSTOMER_ADDRESS_DELETE, {
                                customerAccessToken: customerAccessToken,
                                id: id,
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customerAddressDelete,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Customer Orders
    ShopifyClient.prototype.findCustomerOrders = function (orderParams) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function () {
            var customerAccessToken, _h, _j, first, _k, sortKey, after, _l, reverse, query, response;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        customerAccessToken = this._accessToken || this._fetchAccessToken();
                        _h = orderParams || {}, _j = _h.first, first = _j === void 0 ? 20 : _j, _k = _h.sortKey, sortKey = _k === void 0 ? 'CREATED_AT' : _k, after = _h.after, _l = _h.reverse, reverse = _l === void 0 ? false : _l, query = _h.query;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_CUSTOMER_ORDERS, {
                                customerAccessToken: customerAccessToken,
                                first: first,
                                sortKey: sortKey,
                                after: after,
                                reverse: reverse,
                                query: query,
                            })];
                    case 1:
                        response = _m.sent();
                        return [2 /*return*/, {
                                meta: (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.orders) === null || _c === void 0 ? void 0 : _c.pageInfo,
                                data: (_g = (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.customer) === null || _e === void 0 ? void 0 : _e.orders) === null || _f === void 0 ? void 0 : _f.edges) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Menus
    ShopifyClient.prototype.findMenu = function (handle) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_MENU_BY_HANDLE, { handle: handle })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.menuByHandle,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Pages
    ShopifyClient.prototype.findPage = function (handle) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_PAGE_BY_HANDLE, { handle: handle })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.pageByHandle,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findPages = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, _f, first, query, response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _e = params || {}, _f = _e.first, first = _f === void 0 ? 20 : _f, query = _e.query;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_PAGES, {
                                first: first || this._first,
                                query: query || this._query,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.pages) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.pages) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Shop
    ShopifyClient.prototype.findShop = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_SHOP, {})];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.shop,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    // Metaobjects
    ShopifyClient.prototype.findMetaobject = function (handle) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_METAOBJECT_BY_HANDLE, {
                            handle: handle,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                data: (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.metafield,
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.findMetaobjects = function (params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, _f, first, type, response;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _e = params || {}, _f = _e.first, first = _f === void 0 ? 20 : _f, type = _e.type;
                        return [4 /*yield*/, this.executeQuery(graphql_1.QUERY_METAOBJECTS, {
                                first: first || this._first,
                                type: type,
                            })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, {
                                meta: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.metaobjects) === null || _b === void 0 ? void 0 : _b.pageInfo,
                                data: (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.metaobjects) === null || _d === void 0 ? void 0 : _d.edges.map(function (e) { return e.node; }),
                                error: response === null || response === void 0 ? void 0 : response.error,
                            }];
                }
            });
        });
    };
    ShopifyClient.prototype.decodeBase64 = function (data) {
        return Buffer.from(data, 'base64').toString('ascii');
    };
    ShopifyClient.prototype.getBase64DecodedId = function (id) {
        var orderGid = this.decodeBase64(id);
        var orderId = orderGid.split('/')[-1];
        return orderId.split('?')[0];
    };
    // Query execution
    ShopifyClient.prototype.executeQuery = function (query, variables) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apollo.query({
                            query: query,
                            variables: variables,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopifyClient.prototype.executeMutation = function (mutation, variables) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apollo.mutate({
                            mutation: mutation,
                            variables: variables,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ShopifyClient;
}());
exports.ShopifyClient = ShopifyClient;
// Create the ShopifyClient
var createClient = function (domain, storefrontAccessToken, fetchAccessToken, apiVersion) {
    return new ShopifyClient(domain, storefrontAccessToken, fetchAccessToken, apiVersion);
};
exports.createClient = createClient;
