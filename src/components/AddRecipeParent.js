import React from "react";
import { RecipeProvider } from "../RecipeContext";
import RecipeFormAdd from "./RecipeFormAdd";
import RecipeList from "./RecipeList";

const AddRecipeParent = () => {
  return (
    <>
      <RecipeProvider>
        <RecipeFormAdd />
        <RecipeList />
      </RecipeProvider>
    </>
  );
};
export default AddRecipeParent;
