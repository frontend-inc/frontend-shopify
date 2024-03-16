import { SearchFilterType } from '../types';
declare const useSearchFilters: () => {
    filters: any;
    setFilters: any;
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
    formatProductFilters: (filters: any) => any[];
    formatQuerySyntax: (filters: any) => string;
};
export default useSearchFilters;
