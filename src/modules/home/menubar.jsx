import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // assuming ShadCN import
import { CheckIcon, ChevronsUpDown } from "lucide-react";

const Categories = ["Italian", "Chinese", "Lebanon", "Indian", "Japanese"];

const Menubaritems = ({ value, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="h-[40px] w-full flex items-center rounded-sm px-2 py-1 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          type="button"
        >
          {value}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-[250px] p-2">
        {Categories.map((category) => (
          <DropdownMenuItem key={category} onSelect={() => onChange(category)}>
            {category}
            {value === category && (
              <span className="ml-auto">
                <CheckIcon className="h-4 w-4" />
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Menubaritems };
