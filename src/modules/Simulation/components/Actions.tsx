import { twMerge } from 'tailwind-merge';
import { SimulationStatus } from '../types';
import { Button } from '../../../components';

type ActionsProps = {
  simulationStatus: { get: SimulationStatus; set: (status: SimulationStatus) => void };
} & React.HTMLProps<HTMLDivElement>;

const Actions = ({ simulationStatus: simulationState, ...props }: ActionsProps) => {
  return (
    <div {...props} className={twMerge('flex w-full justify-center', props.className)}>
      {simulationState.get === 'idle' && <Button onClick={() => simulationState.set('running')}>Start</Button>}
      {(simulationState.get === 'running' || simulationState.get === 'restarted') && (
        <Button onClick={() => simulationState.set('finished')}>Finish</Button>
      )}
      {simulationState.get === 'finished' && <Button onClick={() => simulationState.set('restarted')}>Restart</Button>}
    </div>
  );
};

export { Actions };
