declare const useCustomers: () => {
    loading: any;
    errors: any;
    customer: any;
    findCustomer: (customerAccessToken: any) => Promise<any>;
    createCustomer: ({ firstName, lastName, email, password, acceptsMarketing, }: {
        firstName: any;
        lastName: any;
        email: any;
        password: any;
        acceptsMarketing?: boolean;
    }) => Promise<any>;
    updateCustomer: (customerAccessToken: any, customer: any) => Promise<any>;
};
export default useCustomers;
