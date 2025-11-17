import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    count: 0,
};

const user = createSlice({
    name: "userList",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const isAvalable = state.userList.find(
                (item) => item.userName === action.payload.userName
            );

            if (!isAvalable) {
                return {
                    ...state,
                    count: state.count + 1,
                    userList: [...state.userList, action.payload],
                };
            }
            return state;
        },

        removeUser: (state, action) => {
            return {
                ...state,
                count: state.count - 1,
                userList: state.userList.filter(
                    (item) => item.id !== action.payload
                ),
            };
        },

        editUser: (state, action) => {
            const { id, data } = action.payload;

            return {
                ...state,
                userList: state.userList.map((item) =>
                    item.id === id ? { ...item, ...data } : item
                ),
            };
        },
    },
});

export default user.reducer;

export const { addUser, removeUser, editUser } = user.actions;
