import { twMerge } from 'tailwind-merge';
import { Row } from './components';
import { Match } from '../../types';

type ScoreBoardProps = {
  matches: Match[];
} & React.HTMLProps<HTMLDivElement>;

const ScoreBoard = ({ matches, ...props }: ScoreBoardProps) => {
  return (
    <div {...props} className={twMerge('w-full', props.className)}>
      {matches && matches.map((match, index) => <Row key={index} teams={match.teams} scores={match.scores} />)}
    </div>
  );
};

export { ScoreBoard };
