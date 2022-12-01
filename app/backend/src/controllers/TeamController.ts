import { Request, Response } from 'express';
import TeamService from '../services/TeamServices';

export default class TeamController {
  constructor(private services = new TeamService()) {}

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const teams = await this.services.getAll();
    return res.status(200).json(teams);
  }

  public async getById({ params }: Request, res: Response): Promise<Response> {
    const team = await this.services.getById(params.id);
    return res.status(200).json(team);
  }
}
