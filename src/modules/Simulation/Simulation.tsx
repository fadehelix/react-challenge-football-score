import { ScoreBoard } from '../../components/ScoreBoard';
import { matches as initialMatches } from './data';
import { useSimulation } from './useSimulation';
import { Actions } from './components/Actions';
import { calculateTotalGoals } from './utils';
import { Tile } from '../../components';

type SimulationProps = {
  name: string;
};

const Simulation = ({ name }: SimulationProps) => {
  const { matches, setMatches, setCurrentTime, setIsRunning, status, setStatus } = useSimulation(initialMatches);

  const handleStart = () => {
    setIsRunning(true);
    setStatus('running');
  };
  const handleFinish = () => {
    console.log('handleFinish');
    setIsRunning(false);
    setStatus('finished');
  };
  const handleRestart = () => {
    setMatches(initialMatches);
    setIsRunning(true);
    setCurrentTime(0);
    setStatus('running');
  };

  return (
    <Tile title={name} className="text-center min-w-80 p-8">
      <div className="flex flex-col items-center">
        <Actions
          simulationState={status}
          startHandler={handleStart}
          finishHandler={handleFinish}
          restartHandler={handleRestart}
        />
        <ScoreBoard matches={matches} className="my-4" />
        <div className="text-right w-full">Total goals: {calculateTotalGoals(matches)}</div>
      </div>
    </Tile>
  );
};

export { Simulation };
