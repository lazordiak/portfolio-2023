import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  hasLoaded: boolean;
  shaderIndex: number;
}

export const initialState: AppState = { hasLoaded: false, shaderIndex: 0 };

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setToLoaded: (state) => {
      return {
        hasLoaded: true,
        shaderIndex: state.shaderIndex,
      };
    },
    updateShaderIndex: (state, action) => {
      return {
        hasLoaded: state.hasLoaded,
        shaderIndex: action.payload,
      };
    },
  },
});

export const { setToLoaded, updateShaderIndex } = appSlice.actions;

export default appSlice.reducer;
