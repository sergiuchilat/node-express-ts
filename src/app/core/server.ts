import express, { Express } from "express";
import registerRoutes from "./route.register";
import bodyParser from "body-parser";
import localizationMiddleware from "../middlewares/localization.middleware";

export class Server {
  private readonly app: Express

  constructor() {
    this.app = express();
    this.routes()
  }

  private routes() {
    const router = express.Router()
    registerRoutes(router)
    this.app.use(bodyParser.json())
    this.app.use(localizationMiddleware)
    this.app.use('/api', router)
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  }
}
