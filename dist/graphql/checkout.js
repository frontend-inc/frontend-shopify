"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHECKOUT_DISCOUNT_CODE_REMOVE = exports.CHECKOUT_DISCOUNT_CODE_APPLY = exports.CHECKOUT_CUSTOMER_ASSOCIATE = exports.CHECKOUT_LINE_ITEMS_REMOVE = exports.CHECKOUT_LINE_ITEMS_UPDATE = exports.CHECKOUT_LINE_ITEMS_ADD = exports.CHECKOUT_CREATE = exports.CHECKOUT_FETCH = exports.CheckoutFragment = void 0;
var client_1 = require("@apollo/client");
exports.CheckoutFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment CheckoutFragment on Checkout {\n\t\tid\n\t\temail\n\t\twebUrl\n\t\ttaxesIncluded\n\t\ttotalDuties {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalTax {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tlineItemsSubtotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tnote\n\t\tready\n\t\tcompletedAt\n\t\torderStatusUrl\n\t\tlineItems(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\tcustomAttributes {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t}\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t}\n\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\tproductType\n\t\t\t\t\t\t\tvendor\n\t\t\t\t\t\t\tmetafields(identifiers: []) {\n\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tquantity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tshippingDiscountAllocations {\n\t\t\tallocatedAmount {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t\tdiscountApplication {\n\t\t\t\t... on ManualDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\t... on DiscountCodeApplication {\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t\t... on ScriptDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t\tvalue\n\t\t\t\t\tallocationMethod\n\t\t\t\t\ttargetSelection\n\t\t\t\t\ttargetType\n\t\t\t\t}\n\t\t\t\t... on AutomaticDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdiscountApplications(first: 10) {\n\t\t\tpageInfo {\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\ttargetSelection\n\t\t\t\t\tallocationMethod\n\t\t\t\t\ttargetType\n\t\t\t\t\tvalue {\n\t\t\t\t\t\t... on MoneyV2Type {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on PricingPercentageValue {\n\t\t\t\t\t\t\tpercentage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t... on ManualDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tdescription\n\t\t\t\t\t}\n\t\t\t\t\t... on DiscountCodeApplication {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tapplicable\n\t\t\t\t\t}\n\t\t\t\t\t... on ScriptDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tallocationMethod\n\t\t\t\t\t\ttargetSelection\n\t\t\t\t\t\ttargetType\n\t\t\t\t\t}\n\t\t\t\t\t... on AutomaticDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tfragment CheckoutFragment on Checkout {\n\t\tid\n\t\temail\n\t\twebUrl\n\t\ttaxesIncluded\n\t\ttotalDuties {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalTax {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tlineItemsSubtotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tnote\n\t\tready\n\t\tcompletedAt\n\t\torderStatusUrl\n\t\tlineItems(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\tcustomAttributes {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t}\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t}\n\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\tproductType\n\t\t\t\t\t\t\tvendor\n\t\t\t\t\t\t\tmetafields(identifiers: []) {\n\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tquantity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tshippingDiscountAllocations {\n\t\t\tallocatedAmount {\n\t\t\t\tamount\n\t\t\t\tcurrencyCode\n\t\t\t}\n\t\t\tdiscountApplication {\n\t\t\t\t... on ManualDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\t... on DiscountCodeApplication {\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t\t... on ScriptDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t\tvalue\n\t\t\t\t\tallocationMethod\n\t\t\t\t\ttargetSelection\n\t\t\t\t\ttargetType\n\t\t\t\t}\n\t\t\t\t... on AutomaticDiscountApplication {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdiscountApplications(first: 10) {\n\t\t\tpageInfo {\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\ttargetSelection\n\t\t\t\t\tallocationMethod\n\t\t\t\t\ttargetType\n\t\t\t\t\tvalue {\n\t\t\t\t\t\t... on MoneyV2Type {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on PricingPercentageValue {\n\t\t\t\t\t\t\tpercentage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t... on ManualDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tdescription\n\t\t\t\t\t}\n\t\t\t\t\t... on DiscountCodeApplication {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tapplicable\n\t\t\t\t\t}\n\t\t\t\t\t... on ScriptDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\tallocationMethod\n\t\t\t\t\t\ttargetSelection\n\t\t\t\t\t\ttargetType\n\t\t\t\t\t}\n\t\t\t\t\t... on AutomaticDiscountApplication {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));
exports.CHECKOUT_FETCH = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery checkout($id: ID!) {\n\t\tnode(id: $id) {\n\t\t\t...CheckoutFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery checkout($id: ID!) {\n\t\tnode(id: $id) {\n\t\t\t...CheckoutFragment\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_CREATE = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmutation checkoutCreate($input: CheckoutCreateInput!) {\n\t\tcheckoutCreate(input: $input) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutCreate($input: CheckoutCreateInput!) {\n\t\tcheckoutCreate(input: $input) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_ADD = (0, client_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmutation checkoutLineItemsAdd(\n\t\t$checkoutId: ID!\n\t\t$lineItems: [CheckoutLineItemInput!]!\n\t) {\n\t\tcheckoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutLineItemsAdd(\n\t\t$checkoutId: ID!\n\t\t$lineItems: [CheckoutLineItemInput!]!\n\t) {\n\t\tcheckoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_UPDATE = (0, client_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmutation checkoutLineItemsUpdate(\n\t\t$checkoutId: ID!\n\t\t$lineItems: [CheckoutLineItemUpdateInput!]!\n\t) {\n\t\tcheckoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutLineItemsUpdate(\n\t\t$checkoutId: ID!\n\t\t$lineItems: [CheckoutLineItemUpdateInput!]!\n\t) {\n\t\tcheckoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_REMOVE = (0, client_1.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tmutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {\n\t\tcheckoutLineItemsRemove(\n\t\t\tcheckoutId: $checkoutId\n\t\t\tlineItemIds: $lineItemIds\n\t\t) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {\n\t\tcheckoutLineItemsRemove(\n\t\t\tcheckoutId: $checkoutId\n\t\t\tlineItemIds: $lineItemIds\n\t\t) {\n\t\t\tuserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tmessage\n\t\t\t\tfield\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_CUSTOMER_ASSOCIATE = (0, client_1.gql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tmutation checkoutCustomerAssociate(\n\t\t$checkoutId: ID!\n\t\t$customerAccessToken: String!\n\t) {\n\t\tcheckoutCustomerAssociate(\n\t\t\tcheckoutId: $checkoutId\n\t\t\tcustomerAccessToken: $customerAccessToken\n\t\t) {\n\t\t\tuserErrors {\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutCustomerAssociate(\n\t\t$checkoutId: ID!\n\t\t$customerAccessToken: String!\n\t) {\n\t\tcheckoutCustomerAssociate(\n\t\t\tcheckoutId: $checkoutId\n\t\t\tcustomerAccessToken: $customerAccessToken\n\t\t) {\n\t\t\tuserErrors {\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_DISCOUNT_CODE_APPLY = (0, client_1.gql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tmutation checkoutDiscountCodeApply($checkoutId: ID!, $discountCode: String!) {\n\t\tcheckoutDiscountCodeApplyV2(\n\t\t\tdiscountCode: $discountCode\n\t\t\tcheckoutId: $checkoutId\n\t\t) {\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tcode\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutDiscountCodeApply($checkoutId: ID!, $discountCode: String!) {\n\t\tcheckoutDiscountCodeApplyV2(\n\t\t\tdiscountCode: $discountCode\n\t\t\tcheckoutId: $checkoutId\n\t\t) {\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tcode\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
exports.CHECKOUT_DISCOUNT_CODE_REMOVE = (0, client_1.gql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tmutation checkoutDiscountCodeRemove($checkoutId: ID!) {\n\t\tcheckoutDiscountCodeRemove(checkoutId: $checkoutId) {\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tcode\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation checkoutDiscountCodeRemove($checkoutId: ID!) {\n\t\tcheckoutDiscountCodeRemove(checkoutId: $checkoutId) {\n\t\t\tcheckout {\n\t\t\t\t...CheckoutFragment\n\t\t\t}\n\t\t\tcheckoutUserErrors {\n\t\t\t\tcode\n\t\t\t\tfield\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), exports.CheckoutFragment);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
