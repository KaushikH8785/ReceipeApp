import { createContext, useState } from "react";
import React, { useCallback } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipe, setRecipe] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [editIngredient, setEditIngredient] = useState("");
  const [artists, setArtists] = useState([]);
  const [active, setActive] = useState(false);
  const [updateRecipe, setUpdateRecipe] = useState(null);
  const [toggle, setToggle] = useState(null);
  const [IngreToggle, setIngreToggle] = useState(null);

  const names = ingredient;
  const ingArr = names.toString().split(",");

  let nextId = 0;

  // Add & Update recipe Btn click function for add or update recipe & ingredient
  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault();
      if (recipe === "" && ingredient === "") {
        alert("Please fill Recipe Details");
      } else if (artists && active) {
        const newArtistID = artists.map((artist) => {
          if (artist.id === updateRecipe) {
            return { ...artist, recipe, ingredient: ingArr };
          }
          return artist;
        });
        setArtists(newArtistID);
        setRecipe("");
        setIngredient("");
        setActive(false);
      } else {
        const newArtistsElse = [
          ...artists,
          { id: nextId++, recipe: recipe, ingredient: ingArr },
        ];
        setArtists(newArtistsElse);
        setRecipe("");
        setIngredient("");
      }
    },
    [recipe, ingredient, active, artists, ingArr, updateRecipe]
  );

  //Edit click function for ingredient edit
  const handleEditClick = useCallback(
    (e, id) => {
      e.preventDefault();
      let NewUpdateItem = artists.find((artist) => {
        return artist.id === id;
      });
      setRecipe(NewUpdateItem.recipe);
      setIngredient(NewUpdateItem.ingredient);
      setActive(true);
      setUpdateRecipe(id);
    },
    [artists]
  );

  //Delete function for perticular recipe
  const handleDeleteClick = useCallback(
    (id) => {
      const newList = artists.filter((artist) => artist.id !== id);
      setArtists(newList);
    },
    [artists]
  );

  //Remove Particular Ingredient function
  const removeIngre = useCallback(
    (e, aridx, inidx) => {
      e.preventDefault();
      const newArtists = [...artists];
      const findArtist = newArtists.find((a, idx) => idx === aridx);
      findArtist.ingredient.splice(inidx, 1);
      newArtists.splice(aridx, 1, findArtist);
      setArtists(newArtists);
    },
    [artists]
  );

  //Save Particular Ingredient function
  const saveIngredint = useCallback(
    (e, aridx, inidx) => {
      e.preventDefault();
      const newArtistsArr = [...artists];
      const findArtistArr = newArtistsArr.find((a, idx) => idx === aridx);
      if (editIngredient === "") {
        alert("Please enter ingredient value");
        findArtistArr.ingredient.splice(inidx, 0);
        setArtists(newArtistsArr);
      } else {
        findArtistArr.ingredient.splice(inidx, 1, editIngredient);
        setArtists(newArtistsArr);
      }
      setToggle(false);
      setIngreToggle(false);
    },
    [artists, editIngredient]
  );

  //Form toggle css style
  const ToggleClass = (aridx, inidx, propertyValue) => {
    setEditIngredient(propertyValue);
    setToggle({ aindex: aridx, iindex: inidx });
    setIngreToggle({ artIdx: aridx, ingreIdx: inidx });
  };

  //Cancel On Click Ingrediants
  const cancelOnClick = () => {
    setToggle(false);
    setIngreToggle(false);
  };

  return (
    <RecipeContext.Provider
      value={{
        setEditIngredient,
        handleEditClick,
        handleDeleteClick,
        removeIngre,
        saveIngredint,
        ToggleClass,
        cancelOnClick,
        recipe,
        setRecipe,
        setIngredient,
        ingredient,
        editIngredient,
        artists,
        active,
        updateRecipe,
        toggle,
        IngreToggle,
        handleOnClick,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContext;
