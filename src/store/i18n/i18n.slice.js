import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { defaultLang, supportedLangs } from "../../i18n/i18nConfig";

import { fetchTranslations } from "./i18n.service";

const initialState = {
  status: "loading",
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {},
};

export const setLangAsync = createAsyncThunk(
  "i18n/setLangAsync",
  async (lang, { dispatch }) => {
    // Default to active locale if none is given.
    const translations = await fetchTranslations(lang);
    dispatch(i18nSlice.actions.setLang(lang));
    return translations;
  }
);

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLangAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(setLangAsync.fulfilled, (state, action) => {
      state.translations = action.payload;
      state.status = "idle";
    });
  },
});

export const selectTranslations = (state) => state.i18n.translations;

export const { setLang } = i18nSlice.actions;
export default i18nSlice.reducer;
