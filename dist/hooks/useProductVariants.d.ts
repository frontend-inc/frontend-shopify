import { Product } from '../types';
declare type ProductVariantsProps = {
    product: Product;
};
declare const useProductVariants: (props: ProductVariantsProps) => {
    image: any;
    images: any;
    price: any;
    compareAtPrice: any;
    sellingPlans: any;
    handleImageClick: (image: any) => void;
    selectedOptions: any;
    handleOptionChange: (name: any, value: any) => void;
    product: Product;
    variant: any;
    selectVariant: (product: any, selectedOptions?: {}) => void;
};
export default useProductVariants;
