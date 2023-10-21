import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTeachersInformation = createAsyncThunk(
  'teachers/fetchInfo',
  async () => {
    const response = await axios.get(
      'https://school-management-api.harshv1741.repl.co/teachers'
    )
    console.log('response')
    return response.data
  }
)

export const addTeacherInformation = createAsyncThunk(
  'teachers/addInfo',
  async newTeacher => {
    const response = await axios.post(
      `https://school-management-api.harshv1741.repl.co/teachers/`,
      newTeacher
    )
    return response.data
  }
)

export const updateTeacherInformation = createAsyncThunk(
  'teachers/updateInfo',
  async ({ id, teacherData }) => {
    const response = await axios.put(
      `https://school-management-api.harshv1741.repl.co/teachers/${id}`,
      teacherData
    )
    return response.data
  }
)

export const deleteTeacherInformation = createAsyncThunk(
  'teachers/deleteInfo',
  async id => {
    const response = await axios.delete(
      `https://school-management-api.harshv1741.repl.co/teachers/${id}`
    )
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
    },
    [addTeacherInformation.pending]: state => {
      state.status = 'loading'
    },
    [addTeacherInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers.push(action.payload.teachers)
    },
    [addTeacherInformation.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateTeacherInformation.pending]: state => {
      state.status = 'loading'
    },
    [updateTeacherInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      const updatedTeacher = action.payload.teachers
      const index = state.teachers.findIndex(x => x._id === updatedTeacher._id)
      if (index !== -1) {
        state.teachers[index] = action.payload.teachers
      }
    },
    [updateTeacherInformation.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deleteTeacherInformation.pending]: state => {
      state.status = 'loading'
    },
    [deleteTeacherInformation.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers = state.teachers.fulter(
        teacher => teacher._id !== action.payload.teachers._id
      )
    },
    [deleteTeacherInformation.rejected]: (state, action) => {
      state.status = 'error'
      state.teachers = action.error.message
    }
  }
})

export default teacherReducer.reducer
