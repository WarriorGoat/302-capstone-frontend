import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useSelector } from "react-redux";
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

export const updateUser = createAsyncThunk('user/updateUser', async payloadData => {

    try{
        // call to the API/backend
        console.log("Sending call to Axios")
        let response = await Axios.patch('/users/update-user/'+(payloadData.email), payloadData)
        return response.data
    }catch(error){
        console.log(error)
        // return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async payloadData => {

    try{
        // call to the API/backend
        console.log("Sending call to Axios")
        let response = await Axios.delete('/users/delete/'+(payloadData.email), payloadData)
        return response.data
    }catch(error){
        console.log(error)
        // return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const login = createAsyncThunk('user/login', async(userData, thunkAPI) => {
    try {
        let response = await Axios.post('/users/login', userData)
        localStorage.setItem('jwtToken', response.data.token)
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
        },
        udpateUser: (state, action)=>{
            console.log(action.payload)
            return {
                ...action.payload,
                password: ''
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
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log("Account Updated!!")
                return {
                    ...action.payload,
                    password: '',
                    status: 'fulfilled'
                }
            })
            .addCase(updateUser.rejected, (state) => {
                console.log('!@-------updateUser Error!-------@!')
                state.status = 'rejected'
            })
            .addCase(updateUser.pending, (state) => {
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
            .addCase(deleteUser.fulfilled, (state)=> {  
                console.log("Account Deleted!!")
                state.status = 'fulfilled'
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.message = action.payload
                state.status = 'rejected'
            })
    }
})

export const {setUser, resetStatus, resetUser } = usersSlice.actions

export default usersSlice.reducer