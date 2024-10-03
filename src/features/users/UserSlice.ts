import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getAddress } from "../../services/apiLocation";

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // User geo location
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude.toString(),
      longitude: positionObj.coords.longitude.toString(),
    };
    // Description of the geolocation of the user
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  },
);

interface User {
  name: string;
  phone: string;
  position: {
    latitude: string;
    longitude: string;
  };
  address: string;
  addressStatus: "idle" | "loading" | "error" | "success";
  addressError: string;
}

const initialState: User = {
  name: "",
  phone: "",
  position: { latitude: "", longitude: "" },
  address: "",
  addressStatus: "idle",
  addressError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.addressStatus = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.addressStatus = "success";
        state.addressError = "";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.position = { latitude: "", longitude: "" };
        state.address = "";
        state.addressStatus = "error";
        state.addressError =
          "There was a problem getting your address. Make sure to fill this field!";
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUserName = (state: RootState) => state.user.name;
