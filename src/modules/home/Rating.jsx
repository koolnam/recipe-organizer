import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
function Rating({ maxRating = 5, defaultRating = 0 }) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (index) => {
    const newRating = index + 1;
    setRating(newRating);
  };

  return (
    <div>
      <div className={cn("flex")}>
        {[...Array(maxRating)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleRatingChange(index)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            className="p-1 bg-transparent hover:bg-gray-100 focus:outline-none"
          >
            <Star
              className={cn(
                "w-7 h-7 transition-all",
                (hoverRating > 0 ? index < hoverRating : index < rating)
                  ? "fill-yellow text-yellow"
                  : "text-gray-300 stroke-gray-300"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Rating;
