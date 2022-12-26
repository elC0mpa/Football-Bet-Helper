import {League} from "./League";
import {Team} from "./Team";

export type TeamStatistics = {
  biggest: {
    goals: {
      against: AgainstForType;
      for: AgainstForType;
    };
    loses: AwayHomeStr;
    wins: AwayHomeStr;
    streak: {
      draws: number;
      loses: number;
      wins: number;
    }
  };
  cards: Cards;
  clean_sheet: AwayHomeTotal;
  failed_to_score: AwayHomeTotal;
  fixtures: {
    draws: AwayHomeTotal;
    loses: AwayHomeTotal;
    played: AwayHomeTotal;
    wins: AwayHomeTotal;
  }
  form: string;
  goals: {
    against: Goals;
    for: Goals;
  };
  league: League;
  lineups: LineUp[];
  penalty: {
    missed: TotalPercentage;
    scored: TotalPercentage;
    total: number;
  };
  team: Team;
}

type Cards = {
  red: MinutesInfo;
  yellow: MinutesInfo;
}

type Goals = {
  average: AwayHomeTotal;
  minute: MinutesInfo;
  total: AwayHomeTotal;
}

type AgainstForType = {
  home: number;
  away: number;
}

type AwayHomeStr = {
  away: string;
  home: string;
}

type AwayHomeTotal = {
  away: number | string;
  home: number | string;
  total: number | string;
}

type MinutesInfo = {
  "": TotalPercentage;
  "0-15": TotalPercentage;
  "16-30": TotalPercentage;
  "31-45": TotalPercentage;
  "46-60": TotalPercentage;
  "61-75": TotalPercentage;
  "76-90": TotalPercentage;
  "91-105": TotalPercentage;
  "106-120": TotalPercentage;
}

type TotalPercentage = {
  total: number | null;
  percentage: string | null;
}

type LineUp = {
  formation: string;
  played: number;
}
