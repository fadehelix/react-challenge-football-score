import { useState, useEffect } from 'react';
import { Match } from '../../types';
import { updateScore, getMatchId, getMatchSide } from './utils';

// Helpers

const useSimulation = (initialMatches: Match[]) => {
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (currentTime >= 90) {
      setIsRunning(false);
    }
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 10);
        const matchesWithUpdatedScore = updateScore(matches, getMatchId(matches), getMatchSide());
        setMatches(matchesWithUpdatedScore);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, currentTime, matches]);

  return { matches, currentTime, isRunning, setIsRunning, setCurrentTime, setMatches };
};

export { useSimulation };
