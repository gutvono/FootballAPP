import ILead from "../../interfaces/ILeaderboard"

export const teamsForLeaderboard = [
  {
    "id": 16,
    "teamName": "São Paulo"
  },
  {
    "id": 8,
    "teamName": "Grêmio"
  }
]

export const homeLeaderboard: ILead[] = [
    {
      "name": "São Paulo",
      "totalPoints": 6,
      "totalGames": 2,
      "totalVictories": 2,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 6,
      "goalsOwn": 1,
      "goalsBalance": 5,
      "efficiency": "100.00"
    }
  ]

export const awayLeaderboard: ILead[] = [
  {
    "name": "Grêmio",
    "totalPoints": 3,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 2,
    "goalsFavor": 5,
    "goalsOwn": 9,
    "goalsBalance": -4,
    "efficiency": "33.33"
  }
]