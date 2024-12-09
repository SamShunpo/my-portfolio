import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:kO4YzG0A/portfolio_skill');
      if (!response.ok) {
        throw new Error('Failed to fetch skills');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const skillSlice = createSlice({
  name: 'skills',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.items = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default skillSlice.reducer;
