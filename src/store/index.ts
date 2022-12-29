import { configureStore } from "@reduxjs/toolkit";
import leaguesReducer from "./leaguesSlice";
import fixturesReducer from "./fixturesSlice";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    fixtures: fixturesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

