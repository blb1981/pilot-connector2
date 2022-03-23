import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './features/drawer/drawerSlice'
import jobsReducer from './features/jobs/jobsSlice'
import filtersReducer from './features/filters/filtersSlice'

export default configureStore({
	reducer: {
		drawer: drawerReducer,
		jobs: jobsReducer,
		filters: filtersReducer,
	},
})
