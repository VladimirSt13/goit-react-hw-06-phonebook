// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// -Redux-toolkit--------------

import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './cotactsSlice';
import { filtersReducer } from './fitersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistContactsReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
