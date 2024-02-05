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
var react_1 = require("react");
var context_1 = require("../context");
var hooks_1 = require("../hooks");
var useProducts = function () {
    var shopifyClient = (0, react_1.useContext)(context_1.ShopContext).shopifyClient;
    var _a = (0, hooks_1.useLoadingWrapper)(), loading = _a.loading, errors = _a.errors, loadingWrapper = _a.loadingWrapper;
    var _b = (0, react_1.useState)(), cursor = _b[0], setCursor = _b[1];
    var _c = (0, react_1.useState)(false), hasNextPage = _c[0], setHasNextPage = _c[1];
    var _d = (0, react_1.useState)(), product = _d[0], setProduct = _d[1];
    var _e = (0, react_1.useState)(), products = _e[0], setProducts = _e[1];
    var fetchProduct = function (handle, metafields) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setProduct(null);
                    return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.findProduct(handle, metafields); })];
                case 1:
                    resp = _a.sent();
                    setProduct(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchProductById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setProduct(null);
                    return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.findProductById(id); })];
                case 1:
                    resp = _a.sent();
                    setProduct(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchProducts = function (productsQuery) { return __awaiter(void 0, void 0, void 0, function () {
        var first, reverse, _a, sortKey, query, after, resp, results;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    first = productsQuery.first, reverse = productsQuery.reverse, _a = productsQuery.sortKey, sortKey = _a === void 0 ? 'RELEVANCE' : _a, query = productsQuery.query, after = productsQuery.after;
                    return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.findProducts({
                                first: first,
                                query: query,
                                sortKey: sortKey,
                                reverse: reverse,
                                after: after,
                            });
                        })];
                case 1:
                    resp = _d.sent();
                    setHasNextPage((_b = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _b === void 0 ? void 0 : _b.hasNextPage);
                    setCursor((_c = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _c === void 0 ? void 0 : _c.endCursor);
                    results = resp === null || resp === void 0 ? void 0 : resp.data;
                    if (after) {
                        setProducts(__spreadArray(__spreadArray([], products, true), results, true));
                    }
                    else {
                        setProducts(results);
                    }
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
            }
        });
    }); };
    var searchProducts = function (searchParams) { return __awaiter(void 0, void 0, void 0, function () {
        var query, first, after, resp, results;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    query = searchParams.query, first = searchParams.first, after = searchParams.after;
                    return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.searchProducts({
                                first: first,
                                query: query,
                                sortKey: 'RELEVANCE',
                                reverse: false,
                                after: after,
                            });
                        })];
                case 1:
                    resp = _c.sent();
                    setHasNextPage((_a = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _a === void 0 ? void 0 : _a.hasNextPage);
                    setCursor((_b = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _b === void 0 ? void 0 : _b.endCursor);
                    results = resp === null || resp === void 0 ? void 0 : resp.data;
                    if (after) {
                        setProducts(__spreadArray(__spreadArray([], products, true), results, true));
                    }
                    else {
                        setProducts(results);
                    }
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
            }
        });
    }); };
    var fetchProductRecommendations = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.findProductRecommendations(productId);
                    })];
                case 1:
                    resp = _a.sent();
                    setProducts(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        product: product,
        products: products,
        setProduct: setProduct,
        setProducts: setProducts,
        fetchProduct: fetchProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        fetchProductRecommendations: fetchProductRecommendations,
        searchProducts: searchProducts,
        hasNextPage: hasNextPage,
        cursor: cursor,
        setCursor: setCursor,
        loading: loading,
        errors: errors,
    };
};
exports.default = useProducts;
