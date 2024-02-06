declare const useAddresses: () => {
    loading: any;
    errors: any;
    address: any;
    addresses: any;
    updateCustomerAddress: (address: any) => Promise<any>;
    createCustomerAddress: (address: any) => Promise<any>;
    deleteCustomerAddress: (id: any) => Promise<any>;
    findCustomerAddress: (addressId: any) => Promise<any>;
    findCustomerAddresses: (first?: number, cursor?: any) => Promise<any>;
    handleChange: (ev: any) => void;
};
export default useAddresses;
