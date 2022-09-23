
import { createSlice } from '@reduxjs/toolkit'

export interface AboutInitialState {
  showAbout: boolean
}

const init: AboutInitialState = {
  showAbout: true
}

export const aboutSlice = createSlice({
  name: 'about',
  initialState: init,
  reducers: {
    toggleAbout: (state) => {
      state.showAbout = !state.showAbout
    }

  }
})

export const { toggleAbout } = aboutSlice.actions
export default aboutSlice.reducer
