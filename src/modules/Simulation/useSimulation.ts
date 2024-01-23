import { useState, useEffect } from 'react';
import { Match } from '../../types';
import { updateScore, getMatchId, getMatchSide } from './utils';
import { SimulationStatus } from '.';

// Helpers


const useSimulation = (initialMatches: Match[]) => {
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [currentTime, setCurrentTime] = useState(0);
  const [status, setStatus] = useState<SimulationStatus>('idle');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (status === 'restarted') {
      setCurrentTime(0);
      setMatches(initialMatches);
      setStatus('running');
    } else if (status === 'running') {
      if (currentTime >= 90) {
        setStatus('finished');
      }
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 10);
        const matchesWithUpdatedScore = updateScore(matches, getMatchId(matches), getMatchSide());
        setMatches(matchesWithUpdatedScore);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentTime, matches, status]);

  return { matches, currentTime, status, changeStatus: setStatus };
};

export { useSimulation };
