import { ProductCollectionFilter } from '../types';
declare const useSearchFilters: () => {
    filters: any;
    setFilters: any;
    addFilter: (filter: ProductCollectionFilter) => void;
    removeFilter: (filter: ProductCollectionFilter) => void;
    clearFilters: () => void;
    filterInStock: () => void;
    filterProductType: (productType: string) => void;
    filterVendor: (productVendor: string) => void;
    filterVariantOption: (name: string, value: string | number) => void;
    filterTag: (tag: string) => void;
    filterPrice: (min: number, max: number) => void;
};
export default useSearchFilters;
