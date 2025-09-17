import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    userSet: (state, action) => {
      state.userInfo = action.payload
    }
 
  }
})

// Action creators are generated for each case reducer function
export const {  userSet  } = userSlice.actions

export default userSlice.reducer