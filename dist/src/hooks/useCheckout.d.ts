declare const useCheckout: () => {
    loading: any;
    errors: any;
    checkout: any;
    discountCodes: any;
    discountCodeError: any;
    setDiscountCodeError: any;
    checkoutLineItemAdd: (lineItem: any) => Promise<any>;
    checkoutLineItemsAdd: (lineItems: any) => Promise<any>;
    checkoutLineItemUpdate: (lineItemId: any, quantity: any) => Promise<any>;
    checkoutLineItemsUpdate: (lineItems: any) => Promise<any>;
    checkoutLineItemRemove: (lineItemId: any) => Promise<any>;
    checkoutLineItemsRemove: (lineItemIds: any) => Promise<any>;
    checkoutDiscountCodeApply: (discountCode: any) => Promise<any>;
    checkoutDiscountCodeRemove: () => Promise<any>;
};
export default useCheckout;
