declare const useProductContext: () => {
    price: any;
    setPrice: any;
    compareAtPrice: any;
    setCompareAtPrice: any;
    image: any;
    setImage: any;
    images: any;
    setImages: any;
    handleImageClick: (image: any) => void;
    product: any;
    setProduct: any;
    variant: any;
    setVariant: any;
    sellingPlans: any;
    selectedOptions: any;
    setSelectedOptions: any;
    handleOptionChange: (name: any, value: any) => void;
    collection: any;
    setCollection: any;
};
export default useProductContext;
