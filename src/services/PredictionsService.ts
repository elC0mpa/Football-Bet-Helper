import { BaseService } from "./BaseService";

class PredictionsService extends BaseService {
  /**
   *
   */
  constructor() {
    super("predictions/");
  }

  getPredictionsForFixture(fixtureId: number): Promise<any> {
    const filter = `fixture=${fixtureId}`
    return this.getWithFilter(filter)
  }
}

const predictionsService = new PredictionsService();
export { predictionsService };

