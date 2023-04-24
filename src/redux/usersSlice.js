import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, followUser, unfollowUser } from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        following: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchUsers.pending](state) {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [followUser.pending](state) {
            state.isLoading = true;
        },
        [followUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.following = [...state.following, action.payload];
        },
        [followUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [unfollowUser.pending](state) {
            state.isLoading = true;
        },
        [unfollowUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.following.findIndex(
                user => user.id === action.payload.id
            );
            state.following.splice(index, 1);
        },
        [unfollowUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});



const persistConfig = {
  key: 'users',
  storage,
};

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
