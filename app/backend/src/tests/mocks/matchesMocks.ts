import IBodyMatchCreation from "../../interfaces/IBodyMatchCreation";

export const matchCreate: IBodyMatchCreation = {
  "homeTeam": 16,
  "awayTeam": 9,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

export const createdMatchReturn = {
  "id": 49,
  "homeTeam": 16,
  "awayTeam": 9,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true
};

export const matchCreateEqualTeams: IBodyMatchCreation = {
  "homeTeam": 9,
  "awayTeam": 9,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

export const matchCreateNonExistingTeams: IBodyMatchCreation = {
  "homeTeam": 99,
  "awayTeam": 9,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
};

export const getMatches = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  }

];

export const updateMatchMock = {
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
};