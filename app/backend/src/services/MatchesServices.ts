import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import IBodyMatchCreation from '../interfaces/IBodyMatchCreation';
import Jwt from '../utils/JwtToken';
import Exception from '../utils/http.exception';

export default class MatchesService {
  constructor(
    private matchesModel: ModelStatic<Matches> = Matches,
    private teamsModel: ModelStatic<Teams> = Teams,
    private jwtServices = new Jwt(),
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
    return matches;
  }

  public async finishMatch(id: number): Promise<void> {
    const [result] = await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    if (result !== 1) throw new Exception(404, 'Update unsuccessful');
  }

  public async matchTeamsValidate({ homeTeam, awayTeam }: IBodyMatchCreation): Promise<void> {
    console.log(homeTeam, awayTeam);
    if (homeTeam === awayTeam) {
      throw new Exception(422, 'It is not possible to create a match with two equal teams');
    }
    const home = await this.teamsModel.findByPk(homeTeam);
    const away = await this.teamsModel.findByPk(awayTeam);
    if (!home || !away) throw new Exception(404, 'There is no team with such id!');
  }

  public matchCreateAuth(auth: string): void {
    this.jwtServices.verify(auth);
  }

  public async matchCreate(body: IBodyMatchCreation): Promise<Matches> {
    const newMatch = this.matchesModel.create({
      ...body,
      inProgress: true,
    });
    return newMatch;
  }
}
