import {Team} from "./Team";

export type LeagueStandings = {
  all: PlayedWinDrawLoseGoals;
  away: PlayedWinDrawLoseGoals;
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: PlayedWinDrawLoseGoals;
  points: number;
  rank: number;
  status: string;
  team: Team;
  update: string;
}

type PlayedWinDrawLoseGoals = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: AgainstForType
}

type AgainstForType = {
  for: number;
  against: number;
}
