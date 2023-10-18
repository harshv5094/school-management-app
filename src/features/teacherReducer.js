import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTeachersInformation = createAsyncThunk(
  'teachers/fetchInformation',
  async () => {
    const response = await axios.get(
      'https://school-management-api.harshv1741.repl.co/teachers'
    )
    console.log('response')
    return response.data
  }
)

export const teacherReducer = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchTeachersInformation.pending]: state => {
      state.status = 'loading'
    },
    [fetchTeachersInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers = action.payload.teachers
    },
    [fetchTeachersInformation.rejected]: (state, action) => {
      state.status = 'error'
      console.log(action.error.message)
      state.error = action.error.message
    }
  }
})

export default teacherReducer.reducer
