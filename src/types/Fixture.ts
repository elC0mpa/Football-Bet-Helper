import {League} from "./League";
import {Team, Venue} from "./Team";

export type Head2Head = {
  fixture: Fixture;
  goals: HomeAway;
  league: League;
  score: {
    extratime: HomeAway;
    fulltime: HomeAway;
    halftime: HomeAway;
    penalty: HomeAway;
  };
  teams: {
    away: H2HTeam;
    home: H2HTeam;
  }
}

export type Fixture = {
  date: string;
  id: number;
  periods: {
    first: number | null;
    second: number | null;
  }
  referee: string | null;
  status: {
    long: string;
    short: string;
    elapsed: number | null;
  }
  timestamp: number;
  timezone: string;
  venue: Venue;
}

type HomeAway = {
  home: number | null;
  away: number | null;
}

type H2HTeam = Team & {
  winner: boolean | null
}
