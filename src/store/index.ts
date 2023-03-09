//reducer

import { persistReducer } from "redux-persist";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

// declare type persistConfigType= {
//     key: string;
//     Storage: typeof AsyncLocalStorage;
// }

// const persistConfig = {
//   key: "root",
//   Storage: AsyncLocalStorage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: reducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

