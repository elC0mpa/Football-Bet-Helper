import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {fixturesService} from "../services/FixtureService";
import {predictionsService} from "../services/PredictionsService";
import {Head2Head} from "../types/Fixture";
import {Comparison, Prediction, PredictionObj} from "../types/Prediction";

interface FixturesState {
  fixtures: Head2Head[];
  loading: boolean;
  isHeadToHeadModalOpen: boolean;
  selectedFixture: Head2Head | null;
  loadingHeadToHeadData: boolean;
  headToHead: Head2Head[];
  comparison?: Comparison;
  predictions?: PredictionObj;
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

export const fecthPredictions = createAsyncThunk('fixtures/fecthPredictions', (fixture: Head2Head) => {
  return predictionsService.getPredictionsForFixture(fixture.fixture.id)
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
    builder.addCase(fecthPredictions.pending, (state) => {
      state.loadingHeadToHeadData = true
    }),
    builder.addCase(fecthPredictions.fulfilled, (state, action) => {
      const data: Prediction = action.payload[0];
      state.headToHead = data.h2h;
      state.comparison = data.comparison
      state.predictions = data.predictions
      console.log('predictions', data.predictions);
      state.loadingHeadToHeadData = false
    }),
    builder.addCase(fecthPredictions.rejected, (state) => {
      state.loadingHeadToHeadData = false
    })
  }
});

export const {setHeadToHeadFixture} =
  fixturesSlice.actions;

export default fixturesSlice.reducer;


