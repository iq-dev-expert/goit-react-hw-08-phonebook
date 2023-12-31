import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalReducer, globalSlice } from './reduxGlobal/globalSlice';
import {
  contactsReducer,
  contactsSlice,
} from './reduxContactsList/contactsSlice';
import { filterReducer, filterSlice } from './reduxContactsList/filterSlice';
import { authReducer, authSlice } from './reduxAuth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  [globalSlice.name]: globalReducer,
  [authSlice.name]: persistReducer(persistConfig, authReducer),
  [contactsSlice.name]: contactsReducer,
  [filterSlice.name]: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
