declare const useMenus: () => {
    loading: any;
    errors: any;
    menu: any;
    fetchMenu: (handle: String) => Promise<any>;
};
export default useMenus;
