import { configureStore } from '@reduxjs/toolkit'
//import slices here as reducer
// import counterReducer from './counterSlice'
import usersReducer from './usersSlice'
import entriesReducer from './entriesSlice'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        //key is name of redux state, value is the exported reducer
        users: usersReducer,
        auth: authReducer,
        entries: entriesReducer,
    }
})

export default store