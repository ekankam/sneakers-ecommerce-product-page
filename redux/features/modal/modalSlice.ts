import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  isLightBoxOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isLightBoxOpen: false,
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
    }
  },
});

export const { modalOpen, modalClose, lightBoxOpen, lightBoxClose } = modalSlice.actions;

export default modalSlice.reducer;
