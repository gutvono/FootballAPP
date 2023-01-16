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

  public async finishMatch({ params }: Request, res: Response): Promise<Response> {
    this.services.finishMatch(Number(params.id));
    return res.status(200).json({ message: 'Finished' });
  }

  public async changeMatchStatus({ body, headers }: Request, res: Response): Promise<Response> {
    this.services.matchCreateAuth(headers.authorization as string);
    await this.services.matchTeamsValidate(body);
    const match = await this.services.matchCreate(body);
    return res.status(201).json(match);
  }

  public async updateMatch(req: Request, res: Response): Promise<Response> {
    this.services.updateMatch(req);
    return res.status(200).json({ message: 'Match updated with success' });
  }
}
