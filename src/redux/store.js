import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slices/loaderSlice';
import projectReducer from './slices/projectSlice';
import skillReducer from './slices/skillSlice';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    projects: projectReducer,
    skills: skillReducer,
  },
});

export default store;
