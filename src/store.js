import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './features/drawer/drawerSlice'
import jobsReducer from './features/jobs/jobsSlice'
import filtersReducer from './features/filters/filtersSlice'
import authReducer from './features/auth/authSlice'

export default configureStore({
  reducer: {
    drawer: drawerReducer,
    jobs: jobsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
})
