import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {fixturesService} from "../services/FixtureService";
import {Head2Head} from "../types/Fixture";

interface LeaguesState {
  fixtures: Head2Head[];
  loading: boolean;
}

const initialState: LeaguesState = {
  fixtures: [],
  loading: false
};

export const fetchFixtures = createAsyncThunk('fixtures/fetchFixtures', (leagueId: string) => {
  return fixturesService.getNextFixturesForLeague(leagueId, 10);
})

export const fixturesSlice = createSlice({
  name: "fixtures",
  initialState,
  reducers: {
    setFixtures: (
      state,
      action: PayloadAction<Head2Head[]>
    ) => {
      const { payload } = action;
      state.fixtures = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFixtures.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchFixtures.fulfilled, (state, action) => {
      state.fixtures = action.payload
      state.loading = false;
    }),
    builder.addCase(fetchFixtures.rejected, (state) => {
      state.fixtures = []
      state.loading = false;
    })
  }
});

export const {setFixtures} =
  fixturesSlice.actions;

export default fixturesSlice.reducer;


