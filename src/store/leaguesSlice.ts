import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type League = {
  name:string;
  id: number;
}

interface LeaguesState {
  leagues: League[];
  selectedLeague: number;
}

const initialState: LeaguesState = {
  leagues: [
    {
      id: 135,
      name: 'Serie A'
    },
    {
      id: 39,
      name: 'Premier League'
    }
  ],
  selectedLeague: 135
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {
    changeSelectedLeague: (
      state,
      action: PayloadAction<number>
    ) => {
      const { payload } = action;
      const id = payload;
      const index = state.leagues.findIndex((league: League) => league.id === id)
      if(index === -1) return;
      state.selectedLeague = id
    },
  },
});

export const {changeSelectedLeague} =
  leaguesSlice.actions;

export default leaguesSlice.reducer;

