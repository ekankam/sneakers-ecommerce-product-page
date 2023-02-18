import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  isLightBoxOpen: boolean;
  toggleCart: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isLightBoxOpen: false,
  toggleCart: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isOpen = true;
    },
    modalClose: (state) => {
      state.isOpen = false;
    },
    lightBoxOpen: (state) => {
      state.isLightBoxOpen = true;
    },
    lightBoxClose: (state) => {
      state.isLightBoxOpen = false;
    },
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    closeCart: (state) => {
      state.toggleCart = false;
    },
  },
});

export const {
  modalOpen,
  modalClose,
  lightBoxOpen,
  lightBoxClose,
  toggleCart,
  closeCart,
} = modalSlice.actions;

export default modalSlice.reducer;
