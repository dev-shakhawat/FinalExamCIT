import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import notifySlice from './slices/notifySlice'

export default configureStore({
  reducer: {
    user: userSlice,
    notify: notifySlice
  }
})