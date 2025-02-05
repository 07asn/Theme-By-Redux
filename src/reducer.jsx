/* - - - reducer.jsx - - - */
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',                        // Reducer Name
  initialState: { color: 'light' },     // Initial Value
  reducers: {                           // Put Functions here 
    themeButton: (state) => { 
      state.color = state.color === 'light' ? 'dark' : 'light';
    }
  }
});

export const { themeButton } = themeSlice.actions;
export default themeSlice.reducer;
