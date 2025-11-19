import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    totalPrice: 0,
    productList: [],
};

const product = createSlice({
    initialState,
    name: "product",
    reducers: {
        addProduct: (state, action) => {
            const idf = state.productList.find(
                (item) => item.id === action.payload.id
            );
            if (!idf) {
                return {
                    ...state,
                    count: state.count + 1,
                    productList: [
                        ...state.productList,
                        {
                            ...action.payload,
                            userCount: 1,
                            userPrice: action.payload.price,
                        },
                    ],
                };
            }

            return state;
        },
        incrementPrice: (state, action) => {
            return {
                ...state,
                productList: state.productList.map((item) =>
                    item.id === action.payload.id
                        ? {
                              ...item,
                              userCount: item.userCount + 1,
                              userPrice: item.price * (item.userCount + 1),
                          }
                        : item
                ),
            };
        },
        decrementPrice: (state, action) => {
            return {
                ...state,
                productList: state.productList.map((item) =>
                    item.id === action.payload.id
                        ? {
                              ...item,
                              userCount: item.userCount - 1,
                              userPrice: item.price * (item.userCount - 1),
                          }
                        : item
                ),
            };
        },
        deleteProduct: (state, action) => {
            return {
                ...state,
                count: state.count - 1,
                productList: state.productList.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        },
        summation: (state) => {
            return {
                ...state,
                totalPrice: state.productList.reduce(
                    (a, item) => a + item.userPrice,
                    0
                ),
            };
        },
    },
});

export default product.reducer;

export const {
    addProduct,
    incrementPrice,
    decrementPrice,
    deleteProduct,
    summation,
} = product.actions;
