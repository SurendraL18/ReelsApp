import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    likes: {},
  },
  reducers: {
    toggleLike: (state, action) => {
      const { id } = action.payload;
      state.likes[id] = !state.likes[id];
    },
  },
});

export const { toggleLike } = uiSlice.actions;
export default uiSlice.reducer;
