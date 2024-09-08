import { CookieValueTypes } from 'cookies-next';
import { ShopifyProductType } from '../types';
declare type FavoritesProps = {
    product?: ShopifyProductType;
    cookie?: CookieValueTypes | string;
};
declare const useFavorites: (props?: FavoritesProps) => {
    favorites: any;
    isFavorite: any;
    toggleFavorite: () => void;
};
export default useFavorites;
