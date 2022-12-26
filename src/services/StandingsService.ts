import { BaseService } from "./BaseService";

class StandingsService extends BaseService {
  /**
   *
   */
  constructor() {
    super("standings/");
  }

  getLeagueStandings(leagueId: string, season: string):Promise<any> {
    const filter = `league=${leagueId}&season=${season}`
    return this.getWithFilter(filter)
  }

  getTeamStandings(teamId: string, season: string):Promise<any> {
    const filter = `team=${teamId}&season=${season}`
    return this.getWithFilter(filter)
  }
}

const standingsService = new StandingsService();
export { standingsService };


