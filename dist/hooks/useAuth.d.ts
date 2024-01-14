declare const useAuth: () => {
    loading: any;
    errors: any;
    accessToken: any;
    setAccessToken: any;
    customer: any;
    setCustomer: any;
    handleChange: (ev: any) => void;
    login: ({ email, password }: {
        email: any;
        password: any;
    }) => Promise<any>;
    signup: ({ firstName, lastName, email, password, acceptsMarketing, }: {
        firstName: any;
        lastName: any;
        email: any;
        password: any;
        acceptsMarketing?: boolean;
    }) => Promise<any>;
    logout: () => Promise<any>;
    forgotPassword: (email: any) => Promise<any>;
    resetPassword: (password: any, resetUrl: any) => Promise<any>;
    refreshCustomerAccessToken: (token: any) => Promise<any>;
    expiresAt: any;
    setExpiresAt: any;
};
export default useAuth;
