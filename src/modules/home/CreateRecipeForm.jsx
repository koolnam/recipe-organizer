import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

export const CreateRecipeForm = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create recipe </DialogTitle>
        <DialogDescription>Add your recipe details below</DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
