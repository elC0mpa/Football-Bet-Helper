import { BaseService } from "./BaseService";

class TeamService extends BaseService {
  /**
   *
   */
  constructor() {
    super("teams/");
  }

  listAllTeams(): Promise<any> {
    return this.getAll();
  }

  getTeam(id: string):Promise<any> {
    return this.getById(id)
  }
}

const teamService = new TeamService();
export { teamService };

