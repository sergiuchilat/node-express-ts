import { Request, Response } from 'express';
import RegionsService from "./regions.service";
import BaseController from "../../../core/base.controller";

export default class RegionsController extends BaseController {

  private regionsService: RegionsService;

  constructor () {
    super ()
    this.regionsService = new RegionsService ();
  }

  async get (req: Request, res: Response) {
    res.send (await this.regionsService.get ());
  }

  async getById (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send (await this.regionsService.getById (id));
  }

  async create(req: Request, res: Response) {
    res.send(await this.regionsService.create(req.body))
  }

  async update (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send(await this.regionsService.update(id, req.body))
  }

  async delete (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send(await this.regionsService.delete(id))
  }
}
