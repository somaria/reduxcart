'use client';
import { Product } from '@/interfaces';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
  addToCart,
  productQtyInCartSelector,
  removeFromCart,
} from '../features/cartSlice';
import { Button } from './elements';
import QtyBtn from './QtyBtn';

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();

  if (!qty) {
    return (
      <div className='flex justify-center'>
        <Button
          onClick={() => {
            // dispatch add to cart action
            dispatch(addToCart(props.product));
          }}
        >
          Add to cart
        </Button>
      </div>
    );
  }

  return (
    <QtyBtn
      onDecrease={function (): void {
        dispatch(removeFromCart(props.product));
      }}
      onIncrease={function (): void {
        dispatch(addToCart(props.product));
      }}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
