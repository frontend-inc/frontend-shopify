declare const useMetaobjects: () => {
    getField: (metaobject: any, key: any) => any;
    getValue: (metaobject: any, key: any) => any;
    getImageType: (metaobject: any, key: any) => any;
    getReference: (metaobject: any, key: any) => any;
    getReferences: (metaobject: any, key: any) => any;
    metaobject: any;
    metaobjects: any;
    fetchMetaobject: (handle: any, type: any, perPage?: number) => Promise<any>;
    fetchMetaobjects: (type: any, perPage?: number) => Promise<any>;
    loading: any;
    errors: any;
};
export default useMetaobjects;
