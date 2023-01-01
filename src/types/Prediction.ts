import {Head2Head} from "./Fixture";
import {League} from "./League";
import {Team} from "./Team";

export type Prediction = {
  comparison: Comparison;
  h2h: Head2Head[];
  league: League;
  teams: Teams
}


type Comparison = {
  att: HomeAway;
  def: HomeAway;
  form: HomeAway;
  goals: HomeAway;
  h2h: HomeAway;
  poisson_distribution: HomeAway;
  total: HomeAway;
}

type HomeAway = {
  home: string;
  away: string;
}

type Teams = {
  away: Team;
  home: Team;
}
