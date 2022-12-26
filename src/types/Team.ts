export type FootballTeam = {
  team: Team;
  venue: Venue;
}

export type Team = {
  code?: string;
  country?: string;
  founded?: number;
  id: number;
  logo: string;
  name: string;
  national?: boolean;
}

export type Venue = {
  address?: string;
  capacity?: number;
  city: string;
  id: number;
  image?: string;
  name: string;
  surface?: string;
}
