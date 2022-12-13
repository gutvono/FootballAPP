import { Request, Response } from 'express';
import MatchesService from '../services/MatchesServices';

export default class MatchesController {
  constructor(private services = new MatchesService()) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    const matches = inProgress === undefined
      ? await this.services.getAll()
      : await this.services.getMatchInProgress(String(inProgress));
    return res.status(200).json(matches);
  }
}
