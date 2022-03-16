import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './features/drawer/drawerSlice'
import jobsReducer from './features/jobs/jobsSlice'

export default configureStore({
  reducer: {
    drawer: drawerReducer,
    jobs: jobsReducer,
  },
})
