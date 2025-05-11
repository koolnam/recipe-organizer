import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
// Your controlled Rating component, as updated earlier
const Rating = forwardRef(function Rating(
  { maxRating = 5, value, onChange },
  ref
) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (index) => {
    const newRating = index + 1;
    onChange?.(newRating);
  };

  return (
    <div ref={ref}>
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleRatingChange(index)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            className="p-1 cursor-pointer"
          >
            <Star
              className={cn(
                "w-7 h-7 transition-all",
                (hoverRating > 0 ? index < hoverRating : index < value)
                  ? "fill-yellow text-yellow"
                  : "text-gray-300 stroke-gray-300"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
});
export default Rating;
