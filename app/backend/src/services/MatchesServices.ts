import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

export default class MatchesService {
  constructor(
    private matchesModel: ModelStatic<Matches> = Matches,
    private teamsModel: ModelStatic<Teams> = Teams,
  ) {}

  public async getAll(): Promise<Matches[]> {
    const matches = await this.matchesModel.findAll({
      include: [
        { model: this.teamsModel, as: 'teamHome', attributes: ['teamName'] },
        { model: this.teamsModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  public async getMatchInProgress(status: string): Promise<Matches[]> {
    const inProgress = status === 'true';
    const matches = await this.matchesModel.findAll({
      include: [
        { model: this.teamsModel, as: 'teamHome', attributes: ['teamName'] },
        { model: this.teamsModel, as: 'teamAway', attributes: ['teamName'] },
      ],
      where: { inProgress },
    });
    console.log(matches);

    return matches;
  }
}
