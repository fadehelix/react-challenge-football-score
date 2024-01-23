// Models - reflect the domain
export type Score = number;
export type Team = {
  name: string;
};
export type Match = {
  id: number;
  teams: Teams;
  scores: Scores;
};

// Helpers
export type Teams = [Team, Team];
export type Scores = [Score, Score];
