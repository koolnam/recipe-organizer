import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // assuming ShadCN import

const Categories = ["Italian", "Chinese", "Lebanon", "Indian", "Japanese"];

const Menubaritems = ({ value, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="w-full flex items-center rounded-sm px-2 py-1 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          type="button"
        >
          {value}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {Categories.map((category) => (
          <DropdownMenuItem key={category} onSelect={() => onChange(category)}>
            {category}
            {value === category && <span className="ml-2">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Menubaritems };
