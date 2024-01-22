import { Teams, Scores } from '../../../types';

type RowProps = {
  teams: Teams;
  scores: Scores;
};

const Row = ({ teams, scores }: RowProps) => {
  const [host, guest] = teams;
  const [hostScore, guestScore] = scores;

  return (
    <div className="w-full flex justify-between mt-2">
      <div className="w-3/4">
        {host.name} vs {guest.name}
      </div>
      <div>
        {hostScore}:{guestScore}
      </div>
    </div>
  );
};

export { Row };
