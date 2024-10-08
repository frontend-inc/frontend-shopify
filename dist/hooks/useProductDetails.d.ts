import { ShopifyProductType } from '../types';
declare type useProductDetailsProps = {
    product: ShopifyProductType;
};
declare const useProductDetails: (props: useProductDetailsProps) => {
    image: any;
    images: any;
    price: any;
    compareAtPrice: any;
    sellingPlans: any;
    handleImageClick: (image: any) => void;
    selectedOptions: any;
    handleOptionChange: (name: any, value: any) => void;
    product: ShopifyProductType;
    variant: any;
    selectVariant: (product: any, selectedOptions?: {}) => void;
};
export default useProductDetails;
