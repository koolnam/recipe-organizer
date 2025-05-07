import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
function Rating({ maxRating = 5, defaultRating = 0 }) {
  const [rating, setRating] = useState(defaultRating);

  const handleRatingChange = () => {
    const newRating = defaultRating + 1;
    setRating(newRating);
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingChange(index)}
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "gray",
            fontSize: "24px",
          }}
        >
          <Star
            className={cn(
              "w-6 h-6 transition-all",
              "text-gray-300 stroke-gray-300"
            )}
          />
        </span>
      ))}
    </div>
  );
}

export default Rating;
