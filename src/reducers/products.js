import { createSlice } from '@reduxjs/toolkit';

const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: '🧦' },
  { id: 2, title: 'T-shirt', price: 250, emoji: '👕' },
  { id: 3, title: 'Pants', price: 1000, emoji: '👖' },
  { id: 4, title: 'Dress', price: 800, emoji: '👗' },
  { id: 5, title: 'Bikini', price: 300, emoji: '👙' },
  { id: 6, title: 'Sneakers', price: 1350, emoji: '👟' },
  { id: 7, title: 'Purse', price: 450, emoji: '👛' },
  { id: 8, title: 'Sunglasses', price: 150, emoji: '🕶' }
];

export const products = createSlice({
  name: 'products',
  initialState: productData
});