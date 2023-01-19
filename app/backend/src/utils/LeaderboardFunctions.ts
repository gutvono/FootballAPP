import { ILoc } from '../interfaces/ILocation';
import Teams from '../database/models/Teams';
import ILead from '../interfaces/ILeaderboard';
import IMatches from '../interfaces/IMatchesToFilter';

function pointsSumHome(matches: IMatches[]) {
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

function pointsSumAway(matches: IMatches[]) {
  const sum = { totalPoints: 0, totalGames: 0, totalVictories: 0, totalDraws: 0, totalLosses: 0 };
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals === awayTeamGoals) {
      sum.totalDraws += 1;
      sum.totalPoints += 1;
    }
    if (awayTeamGoals > homeTeamGoals) {
      sum.totalVictories += 1;
      sum.totalPoints += 3;
    }
    if (awayTeamGoals < homeTeamGoals) {
      sum.totalLosses += 1;
    }
  });
  sum.totalGames = matches.length;
  return sum;
}

function goalsSum(matches: IMatches[], location: ILoc) {
  const result = { goalsFavor: 0, goalsOwn: 0, goalsBalance: 0 };
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (location === 'homeTeam') {
      result.goalsFavor += homeTeamGoals;
      result.goalsOwn += awayTeamGoals;
      const balance = homeTeamGoals - awayTeamGoals;
      result.goalsBalance += balance;
    }
    if (location === 'awayTeam') {
      result.goalsFavor += awayTeamGoals;
      result.goalsOwn += homeTeamGoals;
      const balance = awayTeamGoals - homeTeamGoals;
      result.goalsBalance += balance;
    }
  });
  return result;
}

function getLeaderboard(teams: Teams[], matchesByTeams: IMatches[][], location: ILoc): ILead[] {
  return teams.map((team) => {
    const sum = location === 'homeTeam'
      ? pointsSumHome(matchesByTeams[team.id - 1])
      : pointsSumAway(matchesByTeams[team.id - 1]);
    const goals = goalsSum(matchesByTeams[team.id - 1], location);
    return {
      name: team.teamName,
      ...sum,
      ...goals,
      efficiency: ((sum.totalPoints / (sum.totalGames * 3)) * 100).toFixed(2),
    };
  }).sort((a: ILead, b: ILead) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);
}

function gameLocation(location: ILoc, id: number) {
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
