import { gql } from '@apollo/client'

export const FieldsForMediaTypes = gql`
  fragment FieldsForMediaTypes on Media {
    alt
    mediaContentType
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      embeddedUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
      }
    }
  }
`

export const ImageFragment = gql`
	fragment ImageFragment on Image {
		id
		altText
		url
	}
`
