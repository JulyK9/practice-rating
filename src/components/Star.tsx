import { StarIcon } from '@heroicons/react/20/solid';

interface StarProps {
  selected: boolean;
  onSelect: () => void;
}

const Star: React.FC<StarProps> = ({ selected = false, onSelect }) => {
  // console.log('selected: ', selected);
  return (
    <div
      className={`
      w-[50px]
      cursor-pointer
      ${selected ? 'text-red-500' : 'text-zinc-500'}
      `}
    >
      <StarIcon onClick={onSelect} />
    </div>
  );
};

export default Star;
