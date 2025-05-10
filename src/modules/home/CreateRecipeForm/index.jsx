import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef } from "react";
import { Menubaritems } from "../menubar";
import { ShortDescription } from "./ShortDescription";
import { Textarea } from "@/components/ui/textarea";
import Rating from "@/modules/home/Rating";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CreateRecipeForm = ({ closeDialog }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const recipeRef = useRef();
  const categoryRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    // console.log(ratingRef.current.value);
    // console.log(recipeRef.current.value);
    // console.log(categoryRef.current.value);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      closeDialog();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create recipe </DialogTitle>
        <DialogDescription>Add your recipe details below</DialogDescription>
      </DialogHeader>
      <form className="space-y-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" ref={titleRef} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Category</Label>
          <Menubaritems ref={categoryRef} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description">Short description</Label>
          <ShortDescription ref={descriptionRef} />
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="rating">Rating</Label>
          <Rating ref={ratingRef} />
          <div className="pt-3"></div>
          <div className="border border-[#E4E4E7] h-[1px] w-full"></div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="recipe">Recipe</Label>
          <Textarea id="recipe" ref={recipeRef} />
        </div>
        <div className="flex justify-end w-full items-center pt-5 gap-1.5">
          <DialogClose asChild>
            <Button className="bg-secondary rounded-md gap-2 text-black hover:bg-secondary/80">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : "Create Recipe"}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};
