import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { getLeaderboard, gameLocation } from '../utils/LeaderboardFunctions';
import ILeaderboard from '../interfaces/ILeaderboard';

export default class LeaderboardService {
  constructor(
    private matchesModel: ModelStatic<Matches> = Matches,
    private teamsModel: ModelStatic<Teams> = Teams,
  ) {}

  public async getAll(location: 'homeTeam' | 'awayTeam' | null): Promise<ILeaderboard[]> {
    const teams = await this.teamsModel.findAll();
    const matchesByTeams = await Promise.all(teams
      .map(({ dataValues: { id } }) => this.matchesModel.findAll({
        where: gameLocation(location, id),
      })));
    return getLeaderboard(teams, matchesByTeams);
  }
}
