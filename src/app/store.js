import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from '../features/studentReducer'
import { teacherReducer } from '../features/teacherReducer'

export default configureStore({
  reducer: {
    students: studentReducer.reducer,
    teachers: teacherReducer.reducer
  }
})
