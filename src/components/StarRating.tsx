import { useState } from 'react';
import Star from './Star';

interface StarRatingProps {
  totalStars: number;
}

const createStarArray = (length: number) => [...Array(length)];

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex">
        {createStarArray(totalStars).map((_n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
            // onSelect={(prev: number) => setSelectedStars(prev + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
