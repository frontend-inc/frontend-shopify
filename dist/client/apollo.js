"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApollo = exports.initApollo = exports.createApolloClient = void 0;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var apollo_link_http_1 = require("apollo-link-http");
var apollo_link_context_1 = require("apollo-link-context");
var apolloClient;
function createApolloClient(domain, storefrontAccessToken, apiVersion) {
    if (apiVersion === void 0) { apiVersion = '2024-04'; }
    var httpLink = (0, apollo_link_http_1.createHttpLink)({
        uri: "https://" + domain + "/api/" + apiVersion + "/graphql.json",
    });
    var middlewareLink = (0, apollo_link_context_1.setContext)(function () { return ({
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
        },
    }); });
    return new client_1.ApolloClient({
        //@ts-ignore
        link: middlewareLink.concat(httpLink),
        cache: new client_1.InMemoryCache(),
    });
}
exports.createApolloClient = createApolloClient;
function initApollo(domain, storefrontAccessToken, apiVersion) {
    var _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient(domain, storefrontAccessToken, apiVersion);
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    //if (initialState) {
    //  _apolloClient.cache.restore(initialState);
    //}
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined')
        return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient)
        apolloClient = _apolloClient;
    return _apolloClient;
}
exports.initApollo = initApollo;
function useApollo(domain, storefrontAccessToken, apiVersion) {
    var store = (0, react_1.useMemo)(function () { return initApollo(domain, storefrontAccessToken, apiVersion); }, [domain, storefrontAccessToken]);
    return store;
}
exports.useApollo = useApollo;
