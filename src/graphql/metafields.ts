import { gql } from '@apollo/client'

export const MetafieldFragment = gql`
  id
  key
  value
  namespace
  description
  reference {
    ... on ProductVariant {
      id
      title
      sku
      availableForSale
    }
    ... on MediaImage {
      image {
        id
        altText
        url
      }
    }
  }
  references(first: 250) {
    edges {
      node {
        ... on Metaobject {
          id
          handle
          type
          updatedAt
          fields {
            key
            type
            value
            reference {
              ... on Product {
                id
                handle
                title
                variants(first: 20) {
                  edges {
                    node {
                      id
                      sku
                      title
                      price {
                        amount
                        currencyCode
                      }
                      image {
                        url
                      }
                      availableForSale
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`