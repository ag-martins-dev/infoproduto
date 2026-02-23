import { Star } from "lucide-react";
import { memo } from "react";

type StarsRatingProps = {
  starsCount?: number;
};

export const StarsRating = memo(function StarsRating({
  starsCount = 5,
}: StarsRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: starsCount }).map((_item, index) => (
        <Star key={index} className="size-3.5 fill-current text-yellow-500" />
      ))}
    </div>
  );
});
