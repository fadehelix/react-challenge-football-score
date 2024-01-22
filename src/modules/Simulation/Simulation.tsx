import { Button, Tile } from '../../components';
import { ScoreBoard } from '../../components/ScoreBoard';
import { matches } from './data';

const Simulation = () => {
  const name = 'Quatar 2023';
  const totalGoals = 22;

  const handleStart = () => {
    console.log('Start');
  };

  return (
    <Tile title={name} className="text-center min-w-80 p-8">
      <div className="flex flex-col items-center">
        <Button onClick={handleStart}>Start</Button>
        <ScoreBoard matches={matches} className="my-4" />
        <div className="text-right w-full">Total goals: {totalGoals}</div>
      </div>
    </Tile>
  );
};

export { Simulation };
