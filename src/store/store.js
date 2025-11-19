import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import product from "./reducer/phone-store";
import { loadState, saveState } from "../storage/storage";
import {
    addProduct,
    incrementPrice,
    decrementPrice,
    deleteProduct,
    summation,
} from "./reducer/phone-store";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addProduct, incrementPrice, decrementPrice, deleteProduct),
    effect: (_, listenerApi) => {
        listenerApi.dispatch(summation());
    },
});

export const store = configureStore({
    reducer: {
        product,
    },
    preloadedState: {
        product: loadState("products"),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

store.subscribe(() => {
    saveState("products", store.getState().product);
});
