import React from "react";
import { useContext } from "react";
import RecipeContext from "../RecipeContext";

function RecipeFormAdd() {
  const {
    recipe,
    setRecipe,
    setIngredient,
    ingredient,
    active,
    handleOnClick,
  } = useContext(RecipeContext);
  return (
    <>
      <h2>Recipe Title</h2>
      <div className="addWrapper" id="addcontainer">
        <div className="addBox">
          <h5>Recipe name:</h5>
          <input value={recipe} onChange={(e) => setRecipe(e.target.value)} />
          <h5>
            Ingredients <small>Seperate them via commas</small>
          </h5>
          <input
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          {active ? (
            <button
              className="btn btn-danger"
              id="add-recipe"
              onClick={handleOnClick}
            >
              Update Recipe
            </button>
          ) : (
            <button
              className="btn btn-danger"
              id="add-recipe"
              onClick={handleOnClick}
            >
              Add Recipe
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default React.memo(RecipeFormAdd);
