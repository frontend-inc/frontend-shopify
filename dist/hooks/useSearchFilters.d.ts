import { SearchFilterType } from '../types';
declare const useSearchFilters: () => {
    filters: any;
    setFilters: any;
    handleFilter: (filter: SearchFilterType) => void;
    handleFilterArray: (filter: SearchFilterType) => void;
    buildFilterQuery: (filters: any) => string;
};
export default useSearchFilters;
