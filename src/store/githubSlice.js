import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const initialState = {
  rootUrl: "https://api.github.com",
  githubUser: mockUser,
  followers: mockFollowers,
  repos: mockRepos,
  requests: 0,
  isLoading: false,
  error: { show: false, message: "" },
};

export const getGithubUser = createAsyncThunk(
  "github/getGithubUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${initialState.rootUrl}/users/${user}`);
      const { repos_url, followers_url } = response.data;
      const repos = await axios.get(`${repos_url}?per_page=50`);
      const followers = await axios.get(`${followers_url}?per_page=50`);
      return {
        user: response.data,
        repos: repos.data,
        followers: followers.data,
      };
    } catch (error) {
      return rejectWithValue("there is no user with this name");
    }
  }
);

export const rateLimit = createAsyncThunk("github/rateLimit", async () => {
  const response = await axios.get(`${initialState.rootUrl}/rate_limit`);
  const {remaining } = response?.data?.rate;
  return  remaining;
});

const githubSlice = createSlice({
  name: "github",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGithubUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGithubUser.fulfilled, (state, action) => {
        state.githubUser = action.payload.user;
        state.repos = action.payload.repos;
        state.followers = action.payload.followers;
        state.isLoading = false;
      })
      .addCase(getGithubUser.rejected, (state, action) => {
        state.error = { show: true, message: action.payload };
      })
      .addCase(rateLimit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rateLimit.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.isLoading = false;
      })
      .addCase(rateLimit.rejected, (state, action) => {
        state.error = { show: true, message: action.payload };
      });
  },
});

export default githubSlice.reducer;
