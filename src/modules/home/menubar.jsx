import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Categories = ["Italian", "Lebanon", "Indian", "Japanese"];

export const Menubaritems = () => {
  const [selectedCategory, setSelectedCategory] = useState("Category");
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{selectedCategory}</MenubarTrigger>
        <MenubarContent>
          {Categories.map((category) => (
            <MenubarItem
              key={category}
              onClick={() => setSelectedCategory(category)}
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
};
