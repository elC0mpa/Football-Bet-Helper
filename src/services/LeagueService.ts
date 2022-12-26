import { BaseService } from "./BaseService";

class LeagueService extends BaseService {
  /**
   *
   */
  constructor() {
    super("leagues/");
  }

  listAllLeagues(): Promise<any> {
    return this.getAll();
  }

  getLeague(id: string):Promise<any> {
    return this.getById(id)
  }
}

const leagueService = new LeagueService();
export { leagueService };
