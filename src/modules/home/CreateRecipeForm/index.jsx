import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Menubaritems } from "../menubar";
import { ShortDescription } from "./ShortDescription";
import { Textarea } from "@/components/ui/textarea";
import Rating from "@/modules/home/Rating";
import { Button } from "@/components/ui/button";
export const CreateRecipeForm = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create recipe </DialogTitle>
        <DialogDescription>Add your recipe details below</DialogDescription>
      </DialogHeader>
      <form className="space-y-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Category</Label>
          <Menubaritems />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description">Short description</Label>
          <ShortDescription />
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="rating">Rating</Label>
          <Rating />
          <div className="pt-3"></div>
          <div className="border border-[#E4E4E7] h-[1px] w-full"></div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="recipe">Recipe</Label>
          <Textarea id="recipe" />
        </div>
        <div className="flex justify-end w-full items-center pt-5 gap-1.5">
          <Button className="bg-secondary rounded-md gap-2 text-black hover:bg-secondary/80">
            Cancel
          </Button>
          <Button>Create Recipe</Button>
        </div>
      </form>
    </DialogContent>
  );
};
