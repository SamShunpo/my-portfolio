import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slices/loaderSlice';
import projectReducer from './slices/projectSlice';
import skillReducer from './slices/skillSlice';
import experienceReducer from './slices/experienceSlice';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    projects: projectReducer,
    skills: skillReducer,
    experiences: experienceReducer,
  },
});

export default store;
