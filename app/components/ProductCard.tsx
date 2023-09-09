import React from 'react';
import { Product } from '@/interfaces';

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return <div className='border'>{props.product.name}</div>;
};

export default ProductCard;
