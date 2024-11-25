import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasShownLoader: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoaderShown(state) {
      state.hasShownLoader = true;
    },
  },
});

export const { setLoaderShown } = loaderSlice.actions;
export default loaderSlice.reducer;
