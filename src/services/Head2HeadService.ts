import { BaseService } from "./BaseService";

class Head2HeadService extends BaseService {
  /**
   *
   */
  constructor() {
    super("fixtures/headtohead");
  }

  getHeadToHeadData(teamsId: string[], last?: number, leagueId?: string):Promise<any> {
    const h2h = `${teamsId[0]}-${teamsId[1]}`
    let filter = `h2h=${h2h}`
    filter = last ? `${filter}&last=${last}` : filter
    filter = leagueId ? `${filter}&league=${leagueId}` : filter
    return this.getWithFilter(filter)
  }
}

const head2HeadService = new Head2HeadService();
export { head2HeadService };



