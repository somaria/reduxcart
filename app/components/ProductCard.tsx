import React from 'react';
import { Product } from '@/interfaces';
import Image from 'next/image';
import AddToCartBtn from './AddToCartBtn';

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className='border rounded-md shadow hover:shadow-lg transition overflow-hidden'>
      <Image
        src={props.product.imagePath}
        width={400}
        height={300}
        alt={props.product.name}
      />
      <div className='p-4'>
        <h2 className='text-xl text-center text-slate-600 font-semibold'>
          {props.product.name}
        </h2>
        <p className='text-slate-500 text-xl text-center'>
          ${props.product.price}
        </p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
