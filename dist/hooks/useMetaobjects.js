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
var hooks_1 = require("../hooks");
var useMetaobjects = function () {
    var shopifyClient = (0, react_1.useContext)(context_1.ShopContext).shopifyClient;
    var _a = (0, hooks_1.useLoadingWrapper)(), loading = _a.loading, errors = _a.errors, loadingWrapper = _a.loadingWrapper;
    var _b = (0, react_1.useState)(), metaobject = _b[0], setMetaobject = _b[1];
    var _c = (0, react_1.useState)(), metaobjects = _c[0], setMetaobjects = _c[1];
    var fetchMetaobject = function (handle, type, perPage) {
        if (perPage === void 0) { perPage = 250; }
        return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.findMetaobject(handle, type, perPage);
                        })];
                    case 1:
                        response = _a.sent();
                        setMetaobject(response === null || response === void 0 ? void 0 : response.data);
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    var fetchMetaobjects = function (type, perPage) {
        if (perPage === void 0) { perPage = 250; }
        return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.findMetaobjects(type, perPage);
                        })];
                    case 1:
                        response = _a.sent();
                        setMetaobjects(response === null || response === void 0 ? void 0 : response.data);
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    // Helper methods to get a field from a metaobject
    var getField = function (metaobject, key) {
        var _a;
        return (_a = metaobject === null || metaobject === void 0 ? void 0 : metaobject.fields) === null || _a === void 0 ? void 0 : _a.find(function (field) { return field.key == key; });
    };
    var getValue = function (metaobject, key) {
        var field = getField(metaobject, key);
        return field === null || field === void 0 ? void 0 : field.value;
    };
    var getImageType = function (metaobject, key) {
        var _a, _b;
        var field = getField(metaobject, key);
        return (_b = (_a = field === null || field === void 0 ? void 0 : field.reference) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url;
    };
    var getReference = function (metaobject, key) {
        var field = getField(metaobject, key);
        return field === null || field === void 0 ? void 0 : field.reference;
    };
    var getReferences = function (metaobject, key) {
        var _a;
        var field = getField(metaobject, key);
        return (_a = field === null || field === void 0 ? void 0 : field.references) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; });
    };
    return {
        getField: getField,
        getValue: getValue,
        getImageType: getImageType,
        getReference: getReference,
        getReferences: getReferences,
        metaobject: metaobject,
        metaobjects: metaobjects,
        fetchMetaobject: fetchMetaobject,
        fetchMetaobjects: fetchMetaobjects,
        loading: loading,
        errors: errors,
    };
};
exports.default = useMetaobjects;
