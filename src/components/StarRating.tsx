import { useState } from 'react';
import Star from './Star';

interface StarRatingProps {
  totalStars: number;
}

const createStarArray = (length: number) => [...Array(length)];

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars] = useState(3);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex">
        {createStarArray(totalStars).map((n, i) => (
          <Star key={i} selected={selectedStars > i} />
        ))}
      </div>
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
