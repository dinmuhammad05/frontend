import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../storage/storage";
import userReducer from "./reducer/user-reducer";

const persistedState = loadState("users");

export const store = configureStore({
    reducer: {
        userReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState("users", store.getState());
});
