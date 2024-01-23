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
  const { matches, status, changeStatus } = useSimulation(initialMatches);

  return (
    <Tile title={name} className="text-center min-w-80 p-8">
      <div className="flex flex-col items-center">
        <Actions simulationStatus={{ get: status, set: changeStatus }} />
        <ScoreBoard matches={matches} className="my-4" />
        <div className="text-right w-full">Total goals: {calculateTotalGoals(matches)}</div>
      </div>
    </Tile>
  );
};

export { Simulation };
