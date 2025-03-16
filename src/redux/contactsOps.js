import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://66d43eaf5b34bcb9ab3e0d12.mockapi.io/contacts"
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact  = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://66d43eaf5b34bcb9ab3e0d12.mockapi.io/contacts", contact
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact  = createAsyncThunk(
  "contacts/deleteContact",
  async (Id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://66d43eaf5b34bcb9ab3e0d12.mockapi.io/contacts/${Id}`
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
