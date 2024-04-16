import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10
  },
  reducers: {
    inc: (state , actions) => {
      state.value += actions.payload
    },
    dnc: (state , actions) => {
      state.value -= actions.payload
    },
  },

})

export const { inc , dnc } = counterSlice.actions

export default counterSlice.reducer