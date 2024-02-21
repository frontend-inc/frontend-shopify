// Metafield helpers
export const getMetafield = (metaobject, key) => {
	return metaobject?.metafields?.find((field) => field?.key == key)
}

export const getMetafieldValue = (metaobject, key) => {
	let field = getMetafield(metaobject, key)
	return field?.value
}

export const getMetafieldImage = (metaobject, key) => {
	let field = getMetafield(metaobject, key)
	return field?.reference?.image?.url
}

export const getMetafieldReference = (metaobject, key) => {
	let field = getMetafield(metaobject, key)
	return field?.reference
}

export const getMetafieldReferences = (metaobject, key) => {
	let field = getMetafield(metaobject, key)
	return field?.references?.edges.map((e) => e.node)
}

export const getArrayFromString = (stringArray) => {
	let jsonValues = JSON.parse(`{ "values": ${stringArray} }`)
	return jsonValues?.values
}
