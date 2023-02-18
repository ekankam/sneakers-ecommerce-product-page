import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '@/type';

type Cart = {
  cart: ProductItem[] | any;
  total: number;
};
const initialState: Cart = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.cart.find(
        (item: any) => item.id === action.payload
      );
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find(
        (item: any) => item.id === action.payload
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeProduct = state.cart.filter(
        (item: any) => item.id !== action.payload
      );
      state.cart = removeProduct;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
