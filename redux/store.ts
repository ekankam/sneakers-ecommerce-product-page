import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './features/modal/modalSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

