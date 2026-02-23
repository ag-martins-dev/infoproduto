import { Star } from "lucide-react";

type StarsRatingProps = {
  starsCount?: number;
};

export function StarsRating({ starsCount = 5 }: StarsRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: starsCount }).map((_item, index) => (
        <Star key={index} className="size-3.5 fill-current text-yellow-500" />
      ))}
    </div>
  );
}
