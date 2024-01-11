// import { persistReducer, persistStore } from "redux-persist";

// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./rootReducer";
// import storage from "redux-persist/lib/storage";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const configStore = (initialState = {}) => {
//   const persistedStore = configureStore({
//     reducer: persistedReducer,
//     preloadedState: initialState,
//     middleware: [...middleware],
//     // devTools: composeWithDevTools({
//     //   trace: true,
//     // }),
//   });

//   return {
//     persistor: persistStore(persistedStore),
//     persistedStore,
//   };
// };

// const store = configStore().persistedStore;

// export { store };
// ==============

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
