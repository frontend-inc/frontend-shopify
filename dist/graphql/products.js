"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_PRODUCT_BY_HANDLE_FN = exports.QUERY_PRODUCT_RECOMMENDATIONS = exports.QUERY_PRODUCTS = exports.QUERY_PRODUCT_BY_HANDLE = exports.QUERY_PRODUCT_BY_ID = exports.ProductFragment = void 0;
var client_1 = require("@apollo/client");
exports.ProductFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment ProductFragment on Product {\n\t\tavailableForSale\n\t\tcreatedAt\n\t\tupdatedAt\n\t\tdescription\n\t\tdescriptionHtml\n\t\thandle\n\t\tid\n\t\timages(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\taltText\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\t\t\n\t\tonlineStoreUrl\n\t\toptions {\n\t\t\tid\n\t\t\tname\n\t\t\tvalues\n\t\t}\n\t\tpriceRange {\n\t\t\tminVariantPrice {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t\tmaxVariantPrice {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t}\n\t\tsellingPlanGroups(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tname\n\t\t\t\t\tsellingPlans(first: 10) {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tpriceAdjustments {\n\t\t\t\t\t\t\t\t\tadjustmentValue {\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanFixedAmountPriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tadjustmentAmount {\n\t\t\t\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanFixedPriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanPercentagePriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tadjustmentPercentage\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tproductType\n\t\tpublishedAt\n\t\ttags\n\t\ttitle\n\t\tupdatedAt\n\t\tvariants(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tcompareAtPrice {\n\t\t\t\t\t\tamount\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t\tid\n\t\t\t\t\timage {\n\t\t\t\t\t\tid\n\t\t\t\t\t\taltText\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tprice {\n\t\t\t\t\t\tamount\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t\trequiresShipping\n\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tsku\n\t\t\t\t\ttitle\n\t\t\t\t\tweight\n\t\t\t\t\tweightUnit\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tvendor\n\t}\n"], ["\n\tfragment ProductFragment on Product {\n\t\tavailableForSale\n\t\tcreatedAt\n\t\tupdatedAt\n\t\tdescription\n\t\tdescriptionHtml\n\t\thandle\n\t\tid\n\t\timages(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\taltText\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\t\t\n\t\tonlineStoreUrl\n\t\toptions {\n\t\t\tid\n\t\t\tname\n\t\t\tvalues\n\t\t}\n\t\tpriceRange {\n\t\t\tminVariantPrice {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t\tmaxVariantPrice {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t}\n\t\tsellingPlanGroups(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tname\n\t\t\t\t\tsellingPlans(first: 10) {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tpriceAdjustments {\n\t\t\t\t\t\t\t\t\tadjustmentValue {\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanFixedAmountPriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tadjustmentAmount {\n\t\t\t\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanFixedPriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t... on SellingPlanPercentagePriceAdjustment {\n\t\t\t\t\t\t\t\t\t\t\tadjustmentPercentage\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tproductType\n\t\tpublishedAt\n\t\ttags\n\t\ttitle\n\t\tupdatedAt\n\t\tvariants(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tcompareAtPrice {\n\t\t\t\t\t\tamount\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t\tid\n\t\t\t\t\timage {\n\t\t\t\t\t\tid\n\t\t\t\t\t\taltText\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tprice {\n\t\t\t\t\t\tamount\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t\trequiresShipping\n\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tsku\n\t\t\t\t\ttitle\n\t\t\t\t\tweight\n\t\t\t\t\tweightUnit\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tvendor\n\t}\n"])));
exports.QUERY_PRODUCT_BY_ID = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery Product($id: ID!) {\n\t\tproduct(id: $id) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Product($id: ID!) {\n\t\tproduct(id: $id) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"])), exports.ProductFragment);
exports.QUERY_PRODUCT_BY_HANDLE = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query Product($handle: String!) {\n    productByHandle(handle: $handle) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"], ["\n  query Product($handle: String!) {\n    productByHandle(handle: $handle) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"])), exports.ProductFragment);
exports.QUERY_PRODUCTS = (0, client_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tquery Products(\n\t\t$query: String\n\t\t$reverse: Boolean\n\t\t$sortKey: ProductSortKeys\n\t\t$after: String\n    $metafields: [Metafield] \n\t) {\n\t\tproducts(\n\t\t\tfirst: 48\n\t\t\tafter: $after\n\t\t\tquery: $query\n\t\t\treverse: $reverse\n\t\t\tsortKey: $sortKey\n\t\t) {\n\t\t\tpageInfo {\n\t\t\t\tstartCursor\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Products(\n\t\t$query: String\n\t\t$reverse: Boolean\n\t\t$sortKey: ProductSortKeys\n\t\t$after: String\n    $metafields: [Metafield] \n\t) {\n\t\tproducts(\n\t\t\tfirst: 48\n\t\t\tafter: $after\n\t\t\tquery: $query\n\t\t\treverse: $reverse\n\t\t\tsortKey: $sortKey\n\t\t) {\n\t\t\tpageInfo {\n\t\t\t\tstartCursor\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.ProductFragment);
exports.QUERY_PRODUCT_RECOMMENDATIONS = (0, client_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tquery ProductRecommendations($productId: ID!) {\n\t\tproductRecommendations(productId: $productId) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery ProductRecommendations($productId: ID!) {\n\t\tproductRecommendations(productId: $productId) {\n\t\t\t...ProductFragment\n\t\t}\n\t}\n\t", "\n"])), exports.ProductFragment);
var QUERY_PRODUCT_BY_HANDLE_FN = function (metafields) {
    var metafieldsQuery = '[';
    if ((metafields === null || metafields === void 0 ? void 0 : metafields.length) > 0) {
        metafields.forEach(function (_a) {
            var namespace = _a.namespace, key = _a.key;
            metafieldsQuery += "{namespace:\"" + namespace + "\", key:\"" + key + "\"}";
        });
    }
    metafieldsQuery += ']';
    return (0, client_1.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query Product($handle: String!) {\n      productByHandle(handle: $handle) {\n        availableForSale\n        createdAt\n        updatedAt\n        description\n        descriptionHtml\n        handle\n        id\n        images(first: 250) {\n          edges {\n            node {\n              id\n              altText\n              url\n            }\n          }\n        }\n        metafields(identifiers: ", ") {\n          id\n          key\n          value\n          namespace\n          description\n          reference {\n            ... on ProductVariant {\n              id\n              title\n              sku\n              availableForSale\n            }\n            ... on MediaImage {\n              image {\n                id\n                altText\n                url\n              }\n            }\n          }\n          references(first: 250) {\n            edges {\n              node {\n                ... on Metaobject {\n                  id\n                  handle\n                  type\n                  updatedAt\n                  fields {\n                    key\n                    type\n                    value\n                    reference {\n                      ... on Product {\n                        id\n                        handle\n                        title\n                        variants(first: 20) {\n                          edges {\n                            node {\n                              id\n                              sku\n                              title\n                              price {\n                                amount\n                                currencyCode\n                              }\n                              image {\n                                url\n                              }\n                              availableForSale\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        onlineStoreUrl\n        options {\n          id\n          name\n          values\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        sellingPlanGroups(first: 10) {\n          edges {\n            node {\n              name\n              sellingPlans(first: 10) {\n                edges {\n                  node {\n                    id\n                    name\n                    description\n                    priceAdjustments {\n                      adjustmentValue {\n                        ... on SellingPlanFixedAmountPriceAdjustment {\n                          adjustmentAmount {\n                            amount\n                            currencyCode\n                          }\n                        }\n                        ... on SellingPlanFixedPriceAdjustment {\n                          price {\n                            amount\n                            currencyCode\n                          }\n                        }\n                        ... on SellingPlanPercentagePriceAdjustment {\n                          adjustmentPercentage\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        productType\n        publishedAt\n        tags\n        title\n        updatedAt\n        variants(first: 250) {\n          edges {\n            node {\n              availableForSale\n              compareAtPrice {\n                amount\n                currencyCode\n              }\n              id\n              image {\n                id\n                altText\n                url\n              }\n              price {\n                amount\n                currencyCode\n              }\n              requiresShipping\n              selectedOptions {\n                name\n                value\n              }\n              sku\n              title\n              weight\n              weightUnit\n            }\n          }\n        }\n        vendor      \n      }\n    }\t\n  "], ["\n    query Product($handle: String!) {\n      productByHandle(handle: $handle) {\n        availableForSale\n        createdAt\n        updatedAt\n        description\n        descriptionHtml\n        handle\n        id\n        images(first: 250) {\n          edges {\n            node {\n              id\n              altText\n              url\n            }\n          }\n        }\n        metafields(identifiers: ", ") {\n          id\n          key\n          value\n          namespace\n          description\n          reference {\n            ... on ProductVariant {\n              id\n              title\n              sku\n              availableForSale\n            }\n            ... on MediaImage {\n              image {\n                id\n                altText\n                url\n              }\n            }\n          }\n          references(first: 250) {\n            edges {\n              node {\n                ... on Metaobject {\n                  id\n                  handle\n                  type\n                  updatedAt\n                  fields {\n                    key\n                    type\n                    value\n                    reference {\n                      ... on Product {\n                        id\n                        handle\n                        title\n                        variants(first: 20) {\n                          edges {\n                            node {\n                              id\n                              sku\n                              title\n                              price {\n                                amount\n                                currencyCode\n                              }\n                              image {\n                                url\n                              }\n                              availableForSale\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        onlineStoreUrl\n        options {\n          id\n          name\n          values\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        sellingPlanGroups(first: 10) {\n          edges {\n            node {\n              name\n              sellingPlans(first: 10) {\n                edges {\n                  node {\n                    id\n                    name\n                    description\n                    priceAdjustments {\n                      adjustmentValue {\n                        ... on SellingPlanFixedAmountPriceAdjustment {\n                          adjustmentAmount {\n                            amount\n                            currencyCode\n                          }\n                        }\n                        ... on SellingPlanFixedPriceAdjustment {\n                          price {\n                            amount\n                            currencyCode\n                          }\n                        }\n                        ... on SellingPlanPercentagePriceAdjustment {\n                          adjustmentPercentage\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        productType\n        publishedAt\n        tags\n        title\n        updatedAt\n        variants(first: 250) {\n          edges {\n            node {\n              availableForSale\n              compareAtPrice {\n                amount\n                currencyCode\n              }\n              id\n              image {\n                id\n                altText\n                url\n              }\n              price {\n                amount\n                currencyCode\n              }\n              requiresShipping\n              selectedOptions {\n                name\n                value\n              }\n              sku\n              title\n              weight\n              weightUnit\n            }\n          }\n        }\n        vendor      \n      }\n    }\t\n  "])), metafieldsQuery);
};
exports.QUERY_PRODUCT_BY_HANDLE_FN = QUERY_PRODUCT_BY_HANDLE_FN;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
