import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '@/type';

interface cartInitialState {
  cart: any;
  totalAmount: number;
}

const initialState: cartInitialState = {
  cart: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item: ProductItem) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const product = state.cart.find(
        (item: ProductItem) => item.id === action.payload
      );

      if (product) {
        product.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.cart.find(
        (item: ProductItem) => item.id === action.payload
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },

    removeItem: (state, action) => {
      const productIndex = state.cart.findIndex(
        (item: ProductItem) => item.id === action.payload
      );

      if (productIndex !== -1) {
        state.cart.splice(productIndex, 1);
      }
    },

    getTotal: (state) => {
      let { total } = state.cart.reduce(
        (cartTotal: any, cartItems: any) => {
          const { price, quantity } = cartItems;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        { total: 0 }
      );

      state.totalAmount = total;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
