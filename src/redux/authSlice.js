import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../lib/Axios'
import { checkAuthToken } from '../lib/checkAuthToken'
import { resetUser, setUser } from './usersSlice'

export const logout = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    await localStorage.removeItem('jwtToken')
    thunkAPI.dispatch(resetUser())
})

export const authCheck = createAsyncThunk('auth/authCheck', async(_, thunkAPI) => {
  try {
    checkAuthToken()
    let response = await Axios.post('/users/authtoken')
    console.log("----checkAuthToken Response----")
    console.log(response)
    thunkAPI.dispatch(setUser(response.data))
    // console.log(response.data)
    return response.data

  } catch (error) {
    console.log("-------authCheck Errored out-------")
    return thunkAPI.rejectWithValue(error.response)
  }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
      authSuccess: (state) => {
        state.isAuth = true
      },
      authFailure: (state) => {
        state.isAuth = false
      },
      //same as above
      // authSuccess: state => state.isAuth = true,
      // authFailure: state => state.isAuth = false
      //
      // or return
      // authSuccess: (state) => {
      //   return {
      //     isAuth: true
      //   }
      // },
    },
    extraReducers: builder => {
      builder
        .addCase(authCheck.fulfilled, (state) => {
          state.isAuth = true
          console.log('!@-------authCheck Fulfilled-------@!')
        })
        .addCase(authCheck.rejected, (state, action) => {
          state.isAuth = false
          console.log('!@-------authCheck Rejeccted-------@!')
          // console.log(action.payload)
        })
        .addCase(logout.fulfilled, (state) => {
          state.isAuth = false
          console.log('!@------logout Fulfilled-------@!')
        })
    }
})

export const { authSuccess, authFailure } = authSlice.actions

export default authSlice.reducer