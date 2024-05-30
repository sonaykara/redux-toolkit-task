import { configureStore } from '@reduxjs/toolkit'
import taskSlicer from './Features/Task'

export const store = configureStore({
  reducer: {

    taskSlicer
  },
})