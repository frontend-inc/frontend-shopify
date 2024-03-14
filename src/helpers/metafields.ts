// Metafield helpers
export const getMetafield = (object, key) => {
	return object?.metafields?.find((field) => field?.key == key)
}

export const getMetafieldValue = (object, key) => {
	let field = getMetafield(object, key)
	return field?.value
}

export const getMetafieldType = (object, key) => {
	let field = getMetafield(object, key)
	return field?.type
}

export const getMetafieldImageType = (object, key) => {
	let field = getMetafield(object, key)
	return field?.reference?.image?.url
}

export const getMetafieldReference = (object, key) => {
	let field = getMetafield(object, key)
	return field?.reference
}

export const getMetafieldReferences = (object, key) => {
	let field = getMetafield(object, key)
	return field?.references?.edges.map((e) => e.node)
}

export const getArrayFromString = (stringArray) => {
	let jsonValues = JSON.parse(`{ "values": ${stringArray} }`)
	return jsonValues?.values
}
