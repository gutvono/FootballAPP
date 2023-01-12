import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams';

export default class TeamService {
  constructor(
    private teamModel: ModelStatic<Teams> = Teams,
  ) {}

  public async getAll(): Promise<Teams[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  public async getById(paramId: string): Promise<Teams | null> {
    const team = await this.teamModel.findOne({ where: { id: paramId } });

    return team;
  }
}
