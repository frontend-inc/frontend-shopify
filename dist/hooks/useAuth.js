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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../context");
var hooks_1 = require("../hooks");
var cookies_next_1 = require("cookies-next");
var useAuth = function () {
    var _a = (0, react_1.useContext)(context_1.ShopContext), authCookie = _a.authCookie, shopifyClient = _a.shopifyClient, customer = _a.customer, setCustomer = _a.setCustomer, accessToken = _a.accessToken, setAccessToken = _a.setAccessToken, expiresAt = _a.expiresAt, setExpiresAt = _a.setExpiresAt;
    var _b = (0, hooks_1.useLoadingWrapper)(), errors = _b.errors, loading = _b.loading, loadingWrapper = _b.loadingWrapper;
    var login = function (_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.login(email, password);
                        })];
                    case 1:
                        resp = _b.sent();
                        handleCustomerAccessToken(resp === null || resp === void 0 ? void 0 : resp.data);
                        setCustomer(resp === null || resp === void 0 ? void 0 : resp.data);
                        return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                }
            });
        });
    };
    var signup = function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, _b = _a.acceptsMarketing, acceptsMarketing = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, loadingWrapper(function () {
                            return shopifyClient.signup({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: password,
                                acceptsMarketing: acceptsMarketing,
                            });
                        })];
                    case 1:
                        resp = _d.sent();
                        if (!((_c = resp === null || resp === void 0 ? void 0 : resp.data) === null || _c === void 0 ? void 0 : _c.email)) return [3 /*break*/, 3];
                        return [4 /*yield*/, login({ email: email, password: password })];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
                }
            });
        });
    };
    var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.logout(); })];
                case 1:
                    resp = _a.sent();
                    setCustomer(null);
                    setAccessToken();
                    setExpiresAt();
                    (0, cookies_next_1.deleteCookie)(authCookie);
                    (0, cookies_next_1.deleteCookie)(authCookie + "-expires-at");
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
            }
        });
    }); };
    var refreshCustomerAccessToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.refreshCustomerAccessToken(token);
                    })];
                case 1:
                    resp = _a.sent();
                    handleCustomerAccessToken(resp === null || resp === void 0 ? void 0 : resp.data);
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
            }
        });
    }); };
    var forgotPassword = function (email) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () { return shopifyClient.forgotPassword(email); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var resetPassword = function (password, resetUrl) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return shopifyClient.resetPassword(password, resetUrl);
                    })];
                case 1:
                    resp = _a.sent();
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.data];
            }
        });
    }); };
    var handleCustomerAccessToken = function (customerAccessToken) {
        var _a = customerAccessToken || {}, shopifyAccessToken = _a.accessToken, shopifyTokenExpiresAt = _a.expiresAt;
        if (shopifyAccessToken && shopifyTokenExpiresAt) {
            setAccessToken(shopifyAccessToken);
            setExpiresAt(Date.parse(shopifyTokenExpiresAt));
            (0, cookies_next_1.setCookie)(authCookie, shopifyAccessToken);
            (0, cookies_next_1.setCookie)(authCookie + "-expires-at", shopifyTokenExpiresAt);
        }
    };
    var handleChange = function (ev) {
        var _a;
        var name = ev.target.name;
        var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
        setCustomer(__assign(__assign({}, customer), (_a = {}, _a[name] = value, _a)));
    };
    return {
        loading: loading,
        errors: errors,
        accessToken: accessToken,
        setAccessToken: setAccessToken,
        customer: customer,
        setCustomer: setCustomer,
        handleChange: handleChange,
        login: login,
        signup: signup,
        logout: logout,
        forgotPassword: forgotPassword,
        resetPassword: resetPassword,
        refreshCustomerAccessToken: refreshCustomerAccessToken,
        expiresAt: expiresAt,
        setExpiresAt: setExpiresAt,
    };
};
exports.default = useAuth;
