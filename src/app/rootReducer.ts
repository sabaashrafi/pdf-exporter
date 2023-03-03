import { combineReducers } from '@reduxjs/toolkit'
import formReducer from '../feature/form-slice';
// Reducers

const rootReducer = combineReducers({
    form: formReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
