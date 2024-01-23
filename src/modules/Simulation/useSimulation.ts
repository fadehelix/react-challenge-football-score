import { useState, useEffect } from 'react';
import { Match } from '../../types';
import { updateScore, getMatchId, getMatchSide } from './utils';
import { SimulationStatus } from '.';

// Helpers

const useSimulation = (initialMatches: Match[]) => {
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [status, setStatus] = useState<SimulationStatus>('idle');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (currentTime >= 90) {
      setIsRunning(false);
      setStatus('finished');
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

  return { matches, currentTime, isRunning, setIsRunning, setCurrentTime, setMatches, status, setStatus };
};

export { useSimulation };
