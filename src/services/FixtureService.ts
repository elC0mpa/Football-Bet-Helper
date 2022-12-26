import { BaseService } from "./BaseService";

class FixturesService extends BaseService {
  /**
   *
   */
  constructor() {
    super("fixtures/");
  }

  getNextFixturesForLeague(leagueId: string, next: number):Promise<any> {
    let filter = `league=${leagueId}&next=${next}`
    return this.getWithFilter(filter)
  }
}

const fixturesService = new FixturesService();
export { fixturesService };




