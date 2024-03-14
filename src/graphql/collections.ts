import { gql } from '@apollo/client'
import { ProductFragment } from './products'

export const CollectionFragment = gql`
	fragment CollectionFragment on Collection {
		id
		handle
		title
		description
		descriptionHtml
		image {
			id
			url
      altText
		}
		updatedAt
		metafields(identifiers: []) {
			id
			key
			value
			namespace
			description
			reference {
				... on MediaImageType {
					image {
						id
						altText
						url
					}
				}
			}
		}
	}
`

export const QUERY_COLLECTION_BY_HANDLE = gql`
	query Collection(
		$handle: String!
		$first: Int!
		$filters: [ProductFilter!]
		$sortKey: ProductSortKeyTypes
		$reverse: Boolean
		$after: String
	) {
		collectionByHandle(handle: $handle) {
			...CollectionFragment
			products(
				first: $first
				filters: $filters
				sortKey: $sortKey
				reverse: $reverse
				after: $after
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
	}
	${CollectionFragment}
	${ProductFragment}
`

export const QUERY_COLLECTIONS = gql`
	query Collections($first: Int!, $query: String) {
		collections(first: $first, query: $query) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			edges {
				node {
					...CollectionFragment
				}
			}
		}
	}
	${CollectionFragment}
`
