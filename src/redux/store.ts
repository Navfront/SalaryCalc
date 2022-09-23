import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app-slice'
import calendarSlice from './slices/calendar-slice'
import ratesSlice from './slices/rates-slice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import dayjs from 'dayjs'
import aboutSlice from './slices/about-slice'

const persistConfig = {
  key: dayjs().year().toString(),
  storage,
  blacklist: ['app']
}

const rootReducer = combineReducers({
  app: appSlice,
  rates: ratesSlice,
  calendar: calendarSlice,
  about: aboutSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
