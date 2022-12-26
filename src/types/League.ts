export type FootballLeague = {
  country: Country;
  league: League;
  seasons: Season[];
}

export type Country = {
  code: string;
  flag: string;
  name: string;
}

export type League = {
  id: number;
  logo: string;
  name: string;
  type: string;
}

export type Season = {
  current: boolean;
  end: string;
  start: string;
  year: number;
  coverage: Coverage;
}

export type Coverage = {
  injuries: boolean;
  odds: boolean;
  players: boolean;
  predictions: boolean;
  standings: boolean;
  top_assits: boolean;
  top_cards: boolean;
  top_scorers: boolean;
  fixtures: Fixture
}

export type Fixture = {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}
