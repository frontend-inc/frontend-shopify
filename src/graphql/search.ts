import { gql } from '@apollo/client'
import { ProductFragment } from './products'

export const QUERY_SEARCH = gql`
	query Search($query: String!, $first: Number!, $after: String, $productFilters: [ProductFilter!]) {
		search(
			first: $first
			after: $after
			query: $query
			reverse: false
			sortKey: RELEVANCE
      productFilters: $productFilters
		) {      
			pageInfo {
				startCursor
				endCursor
				hasNextPage
				hasPreviousPage
			}
			edges {
				node {
					...ProductFragment
				}
			}
		}
	}
	${ProductFragment}
`
