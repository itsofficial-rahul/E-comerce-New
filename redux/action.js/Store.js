import { applyMiddleware, createStore } from "redux";
import { persistedReducer, rootReducer } from "./reducer/CombineREducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
const initialState = {};
const middleware = [reduxThunk];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
