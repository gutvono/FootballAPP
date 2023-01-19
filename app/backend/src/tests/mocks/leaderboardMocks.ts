import ILead from "../../interfaces/ILeaderboard"

export const teamsForLeaderboard = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  {
    "id": 4,
    "teamName": "Corinthians"
  }
]

export const homeLeaderboard: ILead[] = [
    {
      "name": "Avaí/Kindermann",
      "totalPoints": 3,
      "totalGames": 1,
      "totalVictories": 1,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 3,
      "goalsOwn": 1,
      "goalsBalance": 2,
      "efficiency": "100.00"
    },
    {
      "name": "Botafogo",
      "totalPoints": 3,
      "totalGames": 1,
      "totalVictories": 1,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 2,
      "goalsOwn": 1,
      "goalsBalance": 1,
      "efficiency": "100.00"
    }
  ]

  export const matchesMock = [
    {
      "id": 1,
      "homeTeam": 1,
      "homeTeamGoals": 3,
      "awayTeam": 2,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Avaí/Kindermann"
      },
      "teamAway": {
        "teamName": "Bahia"
      }
    },
    {
      "id": 2,
      "homeTeam": 3,
      "homeTeamGoals": 2,
      "awayTeam": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Botafogo"
      },
      "teamAway": {
        "teamName": "Corinthians"
      }
    }
  ];

export const awayLeaderboard: ILead[] = [
  {
    "name": "Bahia",
    "totalPoints": 0,
    "totalGames": 1,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 3,
    "goalsBalance": -2,
    "efficiency": "00.00"
  },
  {
    "name": "Corinthians",
    "totalPoints": 0,
    "totalGames": 1,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 2,
    "goalsBalance": -1,
    "efficiency": "00.00"
  }
]