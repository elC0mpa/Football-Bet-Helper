import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {fixturesService} from "../services/FixtureService";
import {head2HeadService} from "../services/Head2HeadService";
import {Head2Head} from "../types/Fixture";

interface FixturesState {
  fixtures: Head2Head[];
  loading: boolean;
  isHeadToHeadModalOpen: boolean;
  selectedFixture: Head2Head | null;
  headToHead: Head2Head[];
  loadingHeadToHeadData: boolean;
}

const initialState: FixturesState = {
  fixtures: [],
  loading: false,
  isHeadToHeadModalOpen: false,
  selectedFixture: null,
  headToHead: [],
  loadingHeadToHeadData: false
};

export const fetchFixtures = createAsyncThunk('fixtures/fetchFixtures', (leagueId: string) => {
  return fixturesService.getNextFixturesForLeague(leagueId, 10);
})

export const fecthHeadToHead = createAsyncThunk('fixtures/fecthHeadToHead', (fixture: Head2Head) => {
  return head2HeadService.getHeadToHeadData([fixture.teams.home.id.toString(), fixture.teams.away.id.toString()], 10)
})

export const fixturesSlice = createSlice({
  name: "fixtures",
  initialState,
  reducers: {
    setHeadToHeadFixture: (
      state, action: PayloadAction<Head2Head | null>
    ) => {
      const {payload} = action;
      state.selectedFixture = payload;
      state.isHeadToHeadModalOpen = payload === null ? false : true;
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
    }),
    builder.addCase(fecthHeadToHead.pending, (state) => {
      state.loadingHeadToHeadData = true
    }),
    builder.addCase(fecthHeadToHead.fulfilled, (state, action) => {
      state.headToHead = action.payload
      state.loadingHeadToHeadData = false
    }),
    builder.addCase(fecthHeadToHead.rejected, (state) => {
      state.loadingHeadToHeadData = false
    })
  }
});

export const {setHeadToHeadFixture} =
  fixturesSlice.actions;

export default fixturesSlice.reducer;


