import { twMerge } from 'tailwind-merge';
import { SimulationStatus } from '../types';
import { Button } from '../../../components';

type ActionsProps = {
  simulationState: SimulationStatus;
  startHandler: () => void;
  finishHandler: () => void;
  restartHandler: () => void;
} & React.HTMLProps<HTMLDivElement>;

const Actions = ({ simulationState, startHandler, finishHandler, restartHandler, ...props }: ActionsProps) => {
  return (
    <div {...props} className={twMerge('flex w-full justify-center', props.className)}>
      {simulationState === 'idle' && <Button onClick={() => startHandler()}>Start</Button>}
      {simulationState === 'running' && <Button onClick={() => finishHandler()}>Finish</Button>}
      {simulationState === 'finished' && <Button onClick={() => restartHandler()}>Restart</Button>}
    </div>
  );
};

export { Actions };
