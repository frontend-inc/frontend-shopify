import React, { useState } from 'react'
import {
  SearchFilterType,	
} from '../types'

// Product filtering:
// https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/products-collections/filter-products
const useSearchFilters = () => {
	const [filters, setFilters] = useState<any | SearchFilterType[]>([])
	const handleFilter = (filter: SearchFilterType) => {
    const { name } = filter 
    if(filters?.find(f => f.name == name)) {
      let newFilters = filters.filter(f => f.name != name)
       setFilters([...newFilters, filter])
    }else{
       setFilters([...filters, filter])
    }
   }
 
   const handleFilterArray = (filter: SearchFilterType) => {    
     const { name, value } = filter 
     if(filters?.find(f => f.name == name && f.value == value)) {
       setFilters(filters.filter(f => !(f.name == name && f.value == value)))
     }else{
       setFilters([...filters, filter])        
     }    
   }
 
  function formatProductFilters(filters) {
    const query = [];        
    filters.forEach(filter => {
      let queryFilter = {}
      switch (filter.name) {
        case 'tag':
          queryFilter['tag'] = filter.value;          
        break;
      case 'product_type':
        queryFilter['productType'] = filter.value;                  
        break;
      case 'vendor':
        queryFilter['vendor'] = filter.value;                  
        break;
      case 'available':
        queryFilter['vendor'] = filter.value === 'true';                          
        break;
      case 'price':
        queryFilter['price'] = { 
          min: parseFloat(filter.value.min || 0),
          max: parseFloat(filter.value.max || 0)
        }                        
        break;    
      default:
        queryFilter = {
          variantOption: {
            name: filter.name,
            value: filter.value
          }
        }
      }
      query.push(queryFilter)
    });

    return query;
  }

   const formatQueryFilters = (filters) => {
     // Group filters by name
     const groupedFilters = filters.reduce((groups, filter) => {
       if (!groups[filter.name]) {
           groups[filter.name] = [];
       }
       groups[filter.name].push(filter.value);
       return groups;
     }, {});
 
     // Build query for each group and join with AND
     const queryParts = Object.keys(groupedFilters).map(name => {
         const values = groupedFilters[name];
         let queryPart = '';
         if(name == 'price'){
            queryPart = values.map(value => `price:>${value.min} AND price:<${value.max}`).join(' OR ');
         }else{
            queryPart = values.map(value => `${name}:${value}`).join(' OR ');
         }         
         return `(${queryPart})`;
     });
          
     return queryParts.join(' AND ');
   }
 
	return {
		filters,
		setFilters,
    handleFilter,
    handleFilterArray,
    formatProductFilters,
    formatQueryFilters
	}
}

export default useSearchFilters
