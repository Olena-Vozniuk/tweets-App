import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64303cacc26d69edc88de5a2.mockapi.io";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("/users");
            return data;
        } catch ({ message }) {
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const followUser = createAsyncThunk(
    "users/FollowUser",
    async (id, thunkAPI) => {    
        try {
            const { users } = thunkAPI.getState();
            const user = users.items.find(user => user.id === id);
            const { data } = await axios.put(`/users/${id}`, {
                followers: user.followers + 1
            });           
            return data;
        } catch ({ message }) {
            
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const unfollowUser = createAsyncThunk(
  'users/unFollowUser',
    async (id, thunkAPI) => {
        const { users } = thunkAPI.getState();
        const user = users.following.find(user => user.id === id);
    try {
      const { data } = await axios.put(`/users/${id}`, {
          followers: user.followers - 1,
      });     
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);