import { Match } from '../../types';

/**
 * Returns a random match ID from the given array of matches.
 * @param {Match[]} matches - The array of matches.
 * @returns {number} - The random match ID.
 */
export function getMatchId(matches: Match[]): number {
  return matches[Math.floor(Math.random() * matches.length)].id;
}

/**
 * Returns a random match side (0 or 1).
 * @returns {number} - Randomly set host or guest team.
 */
export function getMatchSide(): number {
  return Math.floor(Math.random() * 2);
}

/**
 * Updates the score of a match for a specific side.
 * @param {Match[]} matches - The array of matches.
 * @param {number} matchId - The ID of the match to update.
 * @param {number} side - The team to update the score for.
 * @returns {Match[]} - The updated array of matches.
 */
export function updateScore(matches: Match[], matchId: number, side: number): Match[] {
  const updatedMatches = structuredClone(matches);
  const matchIndex = updatedMatches.findIndex((match) => match.id === matchId);
  updatedMatches[matchIndex].scores[side] += 1;
  return updatedMatches;
}
