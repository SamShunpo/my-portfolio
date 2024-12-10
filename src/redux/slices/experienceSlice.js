import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:kO4YzG0A/portfolio_experience');
      if (!response.ok) {
        throw new Error('Failed to fetch experiences');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const experienceSlice = createSlice({
  name: 'experiences',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.items = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default experienceSlice.reducer;
