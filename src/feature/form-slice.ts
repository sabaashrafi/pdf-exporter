import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


type inputType = 'input' | 'textarea';

interface formSchema {
    name: string;
    placeholder: string;
    type: inputType;
}

const initialState: formSchema = {
    name: '',
    placeholder: '',
    type: 'input'
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addName(state, action: PayloadAction<string>): void {
            state.name = action.payload
        }
    }
})

export const { addName } = formSlice.actions
export default formSlice.reducer;