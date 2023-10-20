import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStudentsInformation = createAsyncThunk(
  'students/fetchInfo',
  async () => {
    const response = await axios.get(
      'https://school-management-api.harshv1741.repl.co/students'
    )
    console.log(response.data)
    return response.data
  }
)

export const addStudentInformation = createAsyncThunk(
  'students/addInfo',
  async newStudent => {
    const response = await axios.post(
      `https://school-management-api.harshv1741.repl.co/students/`,
      newStudent
    )
    return response.data
  }
)

export const updateStudentInformation = createAsyncThunk(
  'students/updateInfo',
  async ({ id, studentData }) => {
    const response = await axios.put(
      `https://school-management-api.harshv1741.repl.co/students/${id}`,
      studentData
    )
    return response.data
  }
)

export const deleteStudentInformation = createAsyncThunk(
  'students/deleteInfo',
  async id => {
    const response = await axios.delete(
      `https://school-management-api.harshv1741.repl.co/students/${id}`
    )
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
    },
    [fetchStudentsInformation.rejected]: (state, action) => {
      state.status = 'error'
      console.log(action.error.message)
      state.error = action.error.message
    },
    [addStudentInformation.pending]: state => {
      state.status = 'loading'
    },
    [addStudentInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      state.students.push(action.payload)
    },
    [addStudentInformation.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateStudentInformation.pending]: state => {
      state.status = 'loading'
    },
    [updateStudentInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      const index = state.students.findIndex(
        x => x.id === action.payload.students._id
      )

      if (index !== -1) {
        state.students[index] = action.payload.student
      }
    },
    [updateStudentInformation.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})

export default studentReducer.reducer
