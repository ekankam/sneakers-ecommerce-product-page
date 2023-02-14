import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isOpen = true;
    },
    modalClose: (state) => {
      state.isOpen = false;
    }
  },
})

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer