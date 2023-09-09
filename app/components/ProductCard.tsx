import React from 'react';
import { Product } from '@/interfaces';

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className='border rounded-md shadow hover:shadow-lg transition'>
      <div>A</div>
      <div>{props.product.name}</div>
    </div>
  );
};

export default ProductCard;
