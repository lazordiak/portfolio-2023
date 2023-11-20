import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  hasLoaded: boolean;
}

export const initialState: AppState = { hasLoaded: false };

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setToLoaded: () => {
      return {
        hasLoaded: true,
      };
    },
  },
});

export const { setToLoaded } = appSlice.actions;

export default appSlice.reducer;
