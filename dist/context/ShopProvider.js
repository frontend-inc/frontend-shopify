"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var client_1 = require("@apollo/client");
var ShopContext_1 = __importDefault(require("./ShopContext"));
var client_2 = require("../client");
var cookies_next_1 = require("cookies-next");
var ShopProvider = function (props) {
    var children = props.children, logo = props.logo, domain = props.domain, shopUrl = props.shopUrl, storefrontAccessToken = props.storefrontAccessToken, _a = props.apiVersion, apiVersion = _a === void 0 ? '2023-10' : _a;
    var authCookie = domain + "-shopify-access-token";
    var fetchAccessToken = function () { return String((0, cookies_next_1.getCookie)(authCookie)); };
    var apolloClient = (0, client_2.useApollo)(domain, storefrontAccessToken, apiVersion);
    var shopifyClient = (0, client_2.createClient)(domain, storefrontAccessToken, fetchAccessToken, apiVersion);
    var _b = (0, react_1.useState)(), accessToken = _b[0], setAccessToken = _b[1];
    var _c = (0, react_1.useState)(), alert = _c[0], setAlert = _c[1];
    var _d = (0, react_1.useState)(null), cart = _d[0], setCart = _d[1];
    var _e = (0, react_1.useState)(null), checkout = _e[0], setCheckout = _e[1];
    var _f = (0, react_1.useState)({}), customer = _f[0], setCustomer = _f[1];
    var _g = (0, react_1.useState)(), expiresAt = _g[0], setExpiresAt = _g[1];
    var _h = (0, react_1.useState)(false), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)(0), lineItemTotal = _j[0], setLineItemTotal = _j[1];
    var _k = (0, react_1.useState)(), shop = _k[0], setShop = _k[1];
    var _l = (0, react_1.useState)(false), authOpen = _l[0], setAuthOpen = _l[1];
    var _m = (0, react_1.useState)(false), cartOpen = _m[0], setCartOpen = _m[1];
    var _o = (0, react_1.useState)(false), menuOpen = _o[0], setMenuOpen = _o[1];
    var _p = (0, react_1.useState)(false), searchOpen = _p[0], setSearchOpen = _p[1];
    var toggleAuth = function () { return setAuthOpen(!authOpen); };
    var toggleCart = function () { return setCartOpen(!cartOpen); };
    var toggleMenu = function () { return setMenuOpen(!menuOpen); };
    var toggleSearch = function () { return setSearchOpen(!searchOpen); };
    var value = {
        domain: domain,
        shopifyClient: shopifyClient,
        accessToken: accessToken,
        setAccessToken: setAccessToken,
        alert: alert,
        setAlert: setAlert,
        expiresAt: expiresAt,
        setExpiresAt: setExpiresAt,
        cart: cart,
        setCart: setCart,
        customer: customer,
        setCustomer: setCustomer,
        shopUrl: shopUrl,
        logo: logo,
        loading: loading,
        setLoading: setLoading,
        shop: shop,
        setShop: setShop,
        authOpen: authOpen,
        setAuthOpen: setAuthOpen,
        toggleAuth: toggleAuth,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        toggleCart: toggleCart,
        searchOpen: searchOpen,
        setSearchOpen: setSearchOpen,
        toggleSearch: toggleSearch,
        menuOpen: menuOpen,
        setMenuOpen: setMenuOpen,
        toggleMenu: toggleMenu,
        checkout: checkout,
        setCheckout: setCheckout,
        lineItemTotal: lineItemTotal,
        setLineItemTotal: setLineItemTotal,
    };
    return (react_1.default.createElement(ShopContext_1.default.Provider, { value: value },
        react_1.default.createElement(client_1.ApolloProvider, { client: apolloClient }, children)));
};
exports.default = ShopProvider;
