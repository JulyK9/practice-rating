import { useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  totalStars: number;
  bgColor: string;
}

const createStarArray = (length: number) => [...Array(length)];

const StarRating: React.FC<StarRatingProps> = ({ totalStars, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const { bgColor } = props;
  // console.log(bgColor);
  return (
    <div
      className={`bg-${bgColor}-200 flex flex-col justify-center items-center p-5 gap-2`}
    >
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
