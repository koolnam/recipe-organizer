import recipeimage from "@/assets/recipeimg.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/ui/header";
import { PlusCircle } from "lucide-react";
import { CreateRecipeForm } from "./CreateRecipeForm";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { Star } from "lucide-react";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";

export function Homepage({ projectState, onAdd }) {
  const [open, setOpen] = useState(false);
  // const recipes = projectState.project;
  const haveRecipe = projectState.project.length > 0;
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getProject = localStorage.getItem("projectState");
  console.log(JSON.parse(getProject));

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <Header />
        {!haveRecipe ? (
          <div className="flex flex-col px-6 gap-1.5 justify-center min-h-[calc(100dvh-72px)] py-10 items-center">
            <img
              className="mx-auto"
              src={recipeimage}
              width="206px"
              height="247px"
              alt=""
            />
            <h1 className="font-semibold leading-7 text-[18px] text-center">
              You Have not saved any recipe yet
            </h1>
            <p className="text-center text-[#64748B] text-[16px] font-normal leading-7">
              Add a recipe to save it for later
            </p>
            <div className="flex justify-center">
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle />
                  Create recipe
                </Button>
              </DialogTrigger>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex pt-4 items-center justify-between">
              <h1 className="text-2xl pl-5 font-bold flex items-center gap-2">
                Your Recipes
                <Badge variant="secondary" className="ml-2 rounded-[30px]">
                  {projectState.project.length}
                </Badge>
              </h1>
            </div>

            <ul className="grid gap-6 grid-cols-1 md:grid-cols-3 p-15">
              {projectState.project.map((recipe) => (
                <li key={recipe.id}>
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-start justify-between pb-2">
                      <Badge
                        variant="outline"
                        className="bg-background rounded-[30px]"
                      >
                        {recipe.category}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <span className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Edit recipe
                            </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                              Delete recipe
                            </span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <h2 className="text-xl font-semibold">{recipe.title}</h2>
                      <p className="text-muted-foreground mt-1">
                        {recipe.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {formattedDate}
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= recipe.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )}
        <CreateRecipeForm onAdd={onAdd} closeDialog={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
