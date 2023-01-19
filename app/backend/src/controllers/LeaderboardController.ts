import { Request, Response } from 'express';
import { ILocation } from '../interfaces/ILocation';
import LeaderboardService from '../services/LeaderboardServices';

export default class LeaderboardController {
  constructor(private services = new LeaderboardService()) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    let location: ILocation = null;
    const url = req.originalUrl.split('/')[2];
    if (url === 'home') location = 'homeTeam';
    if (url === 'away') location = 'awayTeam';
    const leaderboard = await this.services.getAll(location);
    return res.status(200).json(leaderboard);
  }
}
