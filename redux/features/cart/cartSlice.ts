import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '@/type';

const initialState: ProductItem[] = [
  {
    id: 'sneaker-1',
    title: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.`,
    imageUrl: '/images/image-product-1.jpg',
    price: 125,
    quantity: 0,
  },
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product!.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product!.quantity === 1) {
        product!.quantity = 1;
      } else {
        product!.quantity--;
      }
    },
    removeItem: (state, action) => {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload
      );

      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
