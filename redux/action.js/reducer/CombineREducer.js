import { combineReducers } from "redux";
import handleCart, { orderdataReducer } from "./handleCart";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ handleCart, orderdataReducer });
export const persistedReducer = persistReducer(persistConfig, rootReducer);
