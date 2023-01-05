import {Head2Head} from "./Fixture";
import {League} from "./League";
import {Team} from "./Team";

export type Prediction = {
  comparison: Comparison;
  h2h: Head2Head[];
  league: League;
  teams: Teams;
  predictions: PredictionObj;
}


export type Comparison = {
  att: HomeAway;
  def: HomeAway;
  form: HomeAway;
  goals: HomeAway;
  h2h: HomeAway;
  poisson_distribution: HomeAway;
  total: HomeAway;
}

export type HomeAway = {
  home: string;
  away: string;
}

type HomeAwayDraw = HomeAway & {
  draw: string;
}

type Teams = {
  away: Team;
  home: Team;
}

export type PredictionObj = {
  advice: string;
  goals: HomeAway;
  percent: HomeAwayDraw;
  under_over: string | null;
  win_or_draw: boolean;
  winner: {
    comment: string;
    id: number;
    name: string;
  }
}
