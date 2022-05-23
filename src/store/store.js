import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactApi } from '../services/contactApi'
import { projectsApi } from '../services/projectsApi'

export const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware,contactApi.middleware),
})

setupListeners(store.dispatch)