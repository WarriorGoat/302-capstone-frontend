import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../lib/Axios'
import { authSuccess } from './authSlice'

export const registerUser = createAsyncThunk('user/registerUser', async payloadData => {
    try{
        // call to the API/backend
        console.log(payloadData)
        let response = await Axios.post('/users/registration', payloadData)
        return response.data
    }catch(error){
        console.log(error)
        // return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const login = createAsyncThunk('user/login', async(userData, thunkAPI) => {
    try {
        console.log("Activate Frontend Login Request")
        console.log(userData)
        let response = await Axios.post('/users/login', userData)
        console.log(response)
        localStorage.setItem('jwtToken', response.data.token)
        console.log(response.data)
        //dispatch authSuccess with Thunk API
        thunkAPI.dispatch(authSuccess())
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        message: '',
        scope: '',
        status: ''
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            return {
                ...action.payload,
                password: ''
            }
        },
        resetStatus: (state) => {
            state.status = null
        },
        resetUser: (state) => {
            return {
                id: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                scope: '',
                message: 'User Logged Out!',
                status: null
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                return {
                    ...action.payload,
                    password: '',
                    status: 'fulfilled'
                }
            })
            .addCase(registerUser.rejected, (state) => {
                console.log('!@-------registerUser Error!-------@!')
                state.status = 'rejected'
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(login.fulfilled, (state, action)=> {
                state.id=action.payload.id
                state.firstName = action.payload.firstName 
                state.lastName = action.payload.lastName
                state.email = action.payload.email
                state.scope = action.payload.scope
                state.password = ''
                state.status = 'fulfilled'
            })
            .addCase(login.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(login.rejected, (state, action) => {
                state.message = action.payload
                state.status = 'rejected'
            })
    }
})

export const {setUser, resetStatus, resetUser } = usersSlice.actions

export default usersSlice.reducer