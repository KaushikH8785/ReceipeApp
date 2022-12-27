import React from "react";
import Title from "./Title";
import { RecipeProvider } from "../RecipeContext";
import RecipeFormAdd from "./RecipeFormAdd";
import RecipeList from "./RecipeList";

const AddRecipeParent = () => {
  return (
    <>
      <RecipeProvider>
        <Title />
        <RecipeFormAdd />
        <RecipeList />
      </RecipeProvider>
    </>
  );
};
export default AddRecipeParent;
