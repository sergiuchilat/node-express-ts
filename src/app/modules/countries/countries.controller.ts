import { Request, Response } from 'express';
import CountriesService from "./countries.service";
import BaseController from "../../../core/base.controller";

export default class CountriesController extends BaseController {

  private countriesService: CountriesService;

  constructor () {
    super ()
    this.countriesService = new CountriesService ();
  }

  async get (req: Request, res: Response) {
    res.send (await this.countriesService.get ());
  }

  async getById (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send (await this.countriesService.getById (id));
  }

  async create(req: Request, res: Response) {
    res.send(await this.countriesService.create(req.body))
  }

  async update (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send(await this.countriesService.update(id, req.body))
  }

  async delete (req: Request, res: Response) {
    const id = Number(req.params?.id)

    res.send(await this.countriesService.delete(id))
  }
}
