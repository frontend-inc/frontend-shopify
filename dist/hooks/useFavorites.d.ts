import { CookieValueTypes } from 'cookies-next';
import { Product } from '../types';
declare type FavoritesProps = {
    product?: Product;
    cookie?: CookieValueTypes | string;
};
declare const useFavorites: (props?: FavoritesProps) => {
    favorites: any;
    isFavorite: any;
    toggleFavorite: () => void;
};
export default useFavorites;
