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
      </form>
    </DialogContent>
  );
};
