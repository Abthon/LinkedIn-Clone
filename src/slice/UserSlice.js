import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	user: null,
	loading: false,
}



const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {}
})

export default userSlice.reducer

