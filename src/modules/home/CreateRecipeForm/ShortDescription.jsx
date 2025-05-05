import React, { useState } from "react";

export const ShortDescription = () => {
  const [test, setTest] = useState();

  const length = test.length;

  return <div>ShortDescription {length}</div>;
};
