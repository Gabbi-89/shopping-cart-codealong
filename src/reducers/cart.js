import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      
      if (existingProduct) {
        // Increment quantity
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }; 
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
    
      if (existingProduct && existingProduct.quantity === 1) {
        // Remove the product entirely
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        // Remove the quantity one by one
        existingProduct.quantity -= 1;
      };
    }
  }
});