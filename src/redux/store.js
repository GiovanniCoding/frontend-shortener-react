import { configureStore } from '@reduxjs/toolkit'
import { setSlice } from '../slices/setSlice'

export const store = configureStore({
  reducer: {
    set: setSlice.reducer
  },
})