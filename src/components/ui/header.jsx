import React from "react";
import { PlusCircle } from "lucide-react";
import { DialogTrigger } from "./dialog";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="h-[72px] sticky top-0 z-10 bg-white flex items-center px-6 shadow">
      <span className=" font-semibold leading-7  text-[18px]">
        Recipe Oraganizer
      </span>
      <div className="ml-auto">
        <DialogTrigger asChild>
          <Button>
            <PlusCircle />
            Add recipe
          </Button>
        </DialogTrigger>
      </div>
    </header>
  );
};
