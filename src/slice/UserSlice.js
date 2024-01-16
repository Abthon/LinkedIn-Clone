import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	user: null,
	loading: false,
}



const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		logIn: (state,action) => {
			state.user = action.payload;
		},

		logOut: (state) => {
			state.user = null;
		}
	}
})

export const {logIn, logOut} = userSlice.actions
export default userSlice.reducer

