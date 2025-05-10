import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { forwardRef } from "react";

const ShortDescription = forwardRef((props, ref) => {
  const [charCount, setcharCount] = useState(0);
  const length = 40;

  return (
    <>
      <Textarea
        id="description"
        onChange={(e) => setcharCount(e.target.value.length)}
        ref={ref}
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
});
export { ShortDescription };
