import { createSlice } from '@reduxjs/toolkit'

export const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    notification: {show : false , message : "" , success: false}
  },
  reducers: {
    notiSet: (state, action) => {
      state.notification = action.payload
    }
 
  }
})

// Action creators are generated for each case reducer function
export const { notiSet  } = notifySlice.actions

export default notifySlice.reducer