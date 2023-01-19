import { ILocation } from '../interfaces/ILocation';
import Teams from '../database/models/Teams';
import ILeaderboard from '../interfaces/ILeaderboard';
import IMatchesToFilter from '../interfaces/IMatchesToFilter';

function pointsSum(matches: IMatchesToFilter[]) {
  const sum = { totalPoints: 0, totalGames: 0, totalVictories: 0, totalDraws: 0, totalLosses: 0 };
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals === awayTeamGoals) {
      sum.totalDraws += 1;
      sum.totalPoints += 1;
    }
    if (homeTeamGoals > awayTeamGoals) {
      sum.totalVictories += 1;
      sum.totalPoints += 3;
    }
    if (homeTeamGoals < awayTeamGoals) {
      sum.totalLosses += 1;
    }
  });
  sum.totalGames = matches.length;
  return sum;
}

function goalsSum(matches: IMatchesToFilter[]) {
  const result = { goalsFavor: 0, goalsOwn: 0, goalsBalance: 0 };
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    result.goalsFavor += homeTeamGoals;
    result.goalsOwn += awayTeamGoals;
    const balance = homeTeamGoals - awayTeamGoals;
    result.goalsBalance += balance;
  });
  return result;
}

function getLeaderboard(
  teams: Teams[],
  matchesByTeams: IMatchesToFilter[][],
): ILeaderboard[] {
  return teams.map((team) => {
    const sum = pointsSum(matchesByTeams[team.id - 1]);
    const goals = goalsSum(matchesByTeams[team.id - 1]);
    return {
      name: team.teamName,
      ...sum,
      ...goals,
      efficiency: ((sum.totalPoints / (sum.totalGames * 3)) * 100).toFixed(2),
    };
  }).sort((a: ILeaderboard, b: ILeaderboard) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);
}

function gameLocation(location: ILocation, id: number) {
  if (location) {
    return {
      [location]: id,
      inProgress: false,
    };
  }
  return {
    inProgress: false,
  };
}

export { getLeaderboard, gameLocation };
