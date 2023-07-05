import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../lib/Axios";

export const registerEntry = createAsyncThunk(
  "entries/registerCompany",
  async (payloadData) => {
    // call to the API/backend
    let response = await Axios.post("/entries/create-one", payloadData);
    return response.data;
  }
);

export const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    company: "",
    author: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    webAddress: "",
    companyAddress: {
      streetNum: 0,
      streetName: "",
      city: "",
      state: "",
      zipCode: 0,
    },
    licenseInfo: {
      licenseState: "",
      licenseNum: "",
      licenseClass: "",
    },
    workTypes: {
      type0: "",
      type1: "",
      type2: "",
      type3: "",
      type4: "",
      type5: "",
      type6: "",
      type7: "",
      type8: "",
      type9: "",
    },
    active: false,
    freeEstimates: false,
  },
  reducers: {
    setEntry: (state, action) => {
      console.log(action.payload);
      state.usersArray.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerEntry.fulfilled, (state, action) => {
        return {
          ...action.payload,
          status: "fulfilled",
        };
      })
      .addCase(registerEntry.rejected, (state) => {
        console.log("!@-------registerCompany Error!-------@!");
        state.status = "rejected";
      })
      .addCase(registerEntry.pending, (state) => {
        state.status = "pending";
      });
  },
});
export const { setEntry } = entriesSlice.actions;

export default entriesSlice.reducer;
