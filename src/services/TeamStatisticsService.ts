import { BaseService } from "./BaseService";

class TeamStatisticsService extends BaseService {
  /**
   *
   */
  constructor() {
    super("teams/statistics");
  }

  getTeamStatistics(teamId: string, leagueId: string, season: string, date?: string):Promise<any> {
    let filter = `league=${leagueId}&season=${season}&team=${teamId}`
    filter = date ? `${filter}&date=${date}` : filter
    return this.getWithFilter(filter)
  }
}

const teamStatisticsService = new TeamStatisticsService();
export { teamStatisticsService };


