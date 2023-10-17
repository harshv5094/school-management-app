import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStudentsInformation = createAsyncThunk(
  'students/fetchInfo',
  async () => {
    const response = await axios(
      'https://school-management-api.harshv1741.repl.co/students'
    )
    console.log(response.data)
    return response.data
  }
)

export const studentReducer = createSlice({
  name: 'students',
  initialState: {
    students: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchStudentsInformation.pending]: state => {
      state.status = 'loading'
    },
    [fetchStudentsInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      state.students = action.payload.students
      console.log(state.students)
    },
    [fetchStudentsInformation.rejected]: (state, action) => {
      state.status = 'error'
      console.log(action.error.message)
    }
  }
})

export default studentReducer.reducer
