import { CookieValueTypes } from 'cookies-next';
import { ProductType } from '../types';
declare type FavoritesProps = {
    product?: ProductType;
    cookie?: CookieValueTypes | string;
};
declare const useFavorites: (props?: FavoritesProps) => {
    favorites: any;
    isFavorite: any;
    toggleFavorite: () => void;
};
export default useFavorites;
