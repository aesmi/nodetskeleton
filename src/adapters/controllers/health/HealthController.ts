import BaseController, { Request, Response, NextFunction } from "../base/BaseController";
import { PongUseCase } from "../../../application/modules/health/useCases/pong";
import container from "./container/index";

class HealthController extends BaseController {
  constructor() {
    super();
    this.initializeRoutes();
  }

  pong = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      this.handleResult(res, await container.get<PongUseCase>(PongUseCase.name).execute());
    } catch (error) {
      next(error);
    }
  };

  private initializeRoutes(): void {
    this.router.get("/ping", this.pong);
  }
}

export default new HealthController();
