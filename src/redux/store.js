import { configureStore } from '@reduxjs/toolkit';
import { sliceContacts } from "./sliceContacts";
import { contactsApi } from "./contactsAPI";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// export const store = configureStore({
//   reducer: {
//     contacts: sliceContacts.reducer,
//   }
// })

export const store = configureStore({
  reducer: {
    contacts: sliceContacts.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware]
  });

// const rootReducer = combineReducers({
//   contacts: sliceContacts.reducer,
// })
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
// export const persistor = persistStore(store);

