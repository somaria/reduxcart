
import { CartItem, Product } from '@/interfaces';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const item = state.cartItems.find(item => item.product.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cartItems.push({ product, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const item = state.cartItems.find(item => item.product.id === product.id);
            if (item) {
                item.quantity--;
                if (item.quantity === 0) {
                    state.cartItems = state.cartItems.filter(item => item.product.id !== product.id);
                }
            }
        }
    }
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemSelector = createSelector(cartItems, (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
});

export const totalPriceSelector = createSelector(cartItems, (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
});

export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((el) => el.product.id === productId)?.quantity
  );

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;