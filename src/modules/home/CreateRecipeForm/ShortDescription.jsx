import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export const ShortDescription = () => {
  const [charCount, setcharCount] = useState(0);
  const length = 40;

  return (
    <>
      <Textarea
        id="description"
        onChange={(e) => setcharCount(e.target.value.length)}
      />
      <div className="font-normal text-sm text-silver leading-5">
        {charCount > length ? (
          <p>too long description</p>
        ) : (
          <p>
            {charCount} / {length} characters
          </p>
        )}
      </div>
    </>
  );
};
