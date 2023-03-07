
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
    // create a new type that extends the ProductCardProps
    ({ children, product }: ProductCardProps ):JSX.Element,
    // add the new properties
    Title:      ( Props: ProductTitleProps )    => JSX.Element,
    Image:      ( Props: ProductImageProps )    => JSX.Element,
    Buttons:    ( Props: ProductButtonProps )   => JSX.Element
}


