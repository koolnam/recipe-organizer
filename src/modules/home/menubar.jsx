import React, { useState } from "react";
import { forwardRef } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Categories = ["Italian", "Lebanon", "Indian", "Japanese"];

const Menubaritems = forwardRef(({ value, onChange }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState(value);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger ref={ref}>{selectedCategory}</MenubarTrigger>

        <MenubarContent>
          {Categories.map((category) => (
            <MenubarItem
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                onChange(category);
              }}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-26">✓</span>
              )}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
});
export { Menubaritems };
