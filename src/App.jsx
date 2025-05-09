import { Homepage } from "@/modules/home/Homepage";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    project: [],
  });
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
