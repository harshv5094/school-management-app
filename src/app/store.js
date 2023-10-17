import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from '../features/studentReducer'

export default configureStore({
  reducer: {
    students: studentReducer.reducer
  }
})
