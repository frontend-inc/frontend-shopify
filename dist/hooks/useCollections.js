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
var PER_PAGE = 20;
var useCollections = function () {
    var shopifyClient = (0, react_1.useContext)(context_1.ShopContext).shopifyClient;
    var _a = (0, hooks_1.useLoadingWrapper)(), errors = _a.errors, loading = _a.loading, loadingWrapper = _a.loadingWrapper;
    var _b = (0, react_1.useState)(null), image = _b[0], setImage = _b[1];
    var _c = (0, react_1.useState)(null), cursor = _c[0], setCursor = _c[1];
    var _d = (0, react_1.useState)(false), hasNextPage = _d[0], setHasNextPage = _d[1];
    var _e = (0, react_1.useState)(null), products = _e[0], setProducts = _e[1];
    var _f = (0, react_1.useState)(null), collection = _f[0], setCollection = _f[1];
    var _g = (0, react_1.useState)(null), collections = _g[0], setCollections = _g[1];
    var findCollection = function (handle, query) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, first, filters, _c, reverse, _d, sortKey, after, resp, collectionProducts;
        var _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _a = query || {}, _b = _a.first, first = _b === void 0 ? PER_PAGE : _b, filters = _a.filters, _c = _a.reverse, reverse = _c === void 0 ? false : _c, _d = _a.sortKey, sortKey = _d === void 0 ? 'COLLECTION_DEFAULT' : _d, after = _a.after;
                    return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.findCollection(handle, {
                                first: first,
                                filters: filters,
                                reverse: reverse,
                                sortKey: sortKey,
                                after: after,
                            });
                        })];
                case 1:
                    resp = _k.sent();
                    setCollection(resp === null || resp === void 0 ? void 0 : resp.data);
                    setHasNextPage((_e = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _e === void 0 ? void 0 : _e.hasNextPage);
                    setCursor((_f = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _f === void 0 ? void 0 : _f.endCursor);
                    collectionProducts = (_g = resp === null || resp === void 0 ? void 0 : resp.data) === null || _g === void 0 ? void 0 : _g.products;
                    if (after) {
                        setProducts(__spreadArray(__spreadArray([], products, true), collectionProducts, true));
                    }
                    else {
                        setProducts(collectionProducts);
                    }
                    setImage((_j = (_h = resp === null || resp === void 0 ? void 0 : resp.data) === null || _h === void 0 ? void 0 : _h.image) === null || _j === void 0 ? void 0 : _j.url);
                    return [2 /*return*/];
            }
        });
    }); };
    var findCollections = function (perPage) {
        if (perPage === void 0) { perPage = PER_PAGE; }
        return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.findCollections(perPage);
                        })];
                    case 1:
                        resp = _b.sent();
                        setCollections(resp === null || resp === void 0 ? void 0 : resp.data);
                        setCursor(resp === null || resp === void 0 ? void 0 : resp.meta.endCursor);
                        setHasNextPage((_a = resp === null || resp === void 0 ? void 0 : resp.meta) === null || _a === void 0 ? void 0 : _a.hasNextPage);
                        return [2 /*return*/];
                }
            });
        });
    };
    return {
        cursor: cursor,
        hasNextPage: hasNextPage,
        setHasNextPage: setHasNextPage,
        collection: collection,
        collections: collections,
        findCollection: findCollection,
        findCollections: findCollections,
        image: image,
        products: products,
        loading: loading,
        errors: errors,
    };
};
exports.default = useCollections;
