import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65faa8623909a9a65b1b0f76.mockapi.io/";

export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "catalog/getCampersById",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/?_id=${credentials}`);
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
