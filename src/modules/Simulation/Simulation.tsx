import { Button, Tile } from '../../components';
import { ScoreBoard } from '../../components/ScoreBoard';
import { matches as initialMatches } from './data';
import { Match } from '../../types';
import { useSimulation } from './useSimulation';

function calculateTotalGoals(matches: Match[]) {
  return matches.reduce((sum, match) => sum + match.scores[0] + match.scores[1], 0);
}
type SimulationProps = {
  name: string;
};
const Simulation = ({ name }: SimulationProps) => {
  const { matches, setMatches, setCurrentTime, setIsRunning } = useSimulation(initialMatches);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleFinish = () => {
    setIsRunning(false);
  };
  const handleRestart = () => {
    setMatches(initialMatches);
    setIsRunning(true);
    setCurrentTime(0);
  };

  return (
    <Tile title={name} className="text-center min-w-80 p-8">
      <div className="flex flex-col items-center">
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleFinish}>Finish</Button>
        <Button onClick={handleRestart}>Restart</Button>
        <ScoreBoard matches={matches} className="my-4" />
        <div className="text-right w-full">Total goals: {calculateTotalGoals(matches)}</div>
      </div>
    </Tile>
  );
};

export { Simulation };
