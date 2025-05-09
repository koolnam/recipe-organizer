import recipeimage from "@/assets/recipeimg.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/ui/header";
import { PlusCircle } from "lucide-react";
import { CreateRecipeForm } from "./CreateRecipeForm";

export function Homepage() {
  return (
    <>
      <Dialog>
        <Header />
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

        <CreateRecipeForm />
      </Dialog>
    </>
  );
}
