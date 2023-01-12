
import { configureStore, } from "@reduxjs/toolkit";
import { filtersReducer } from './FilterSlise';
import { ContactReduser } from './ContactSlise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, ContactReduser)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
           } })

   
});

export const persistor = persistStore(store)
    

