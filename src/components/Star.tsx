import { StarIcon } from '@heroicons/react/20/solid';

interface StarProps {
  selected: boolean;
}

const Star: React.FC<StarProps> = ({ selected = false }) => {
  console.log('selected: ', selected);
  return (
    <div
      className={`
      w-[50px]
      ${selected ? 'text-zinc-500' : 'text-red-500'}
      `}
    >
      <StarIcon />
    </div>
  );
};

export default Star;
