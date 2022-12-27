import React from "react";
import { useContext } from "react";
import RecipeContext from "../RecipeContext";
import edit from "../icon_pencil.svg";

function RecipeList() {
  const {
    setEditIngredient,
    handleEditClick,
    handleDeleteClick,
    removeIngre,
    saveIngredint,
    ToggleClass,
    cancelOnClick,
    editIngredient,
    artists,
    toggle,
    IngreToggle,
  } = useContext(RecipeContext);
  return artists.map((artist, aridx) => {
    const propertyName = artist.ingredient;
    return (
      <ul className="added-recipe-block" key={artist.id}>
        <li>
          <strong>Recipe Name: </strong> {artist.recipe}
        </li>
        <li>
          <strong>Ingredient: </strong>
          {propertyName.map((propertyValue, inidx) => {
            return (
              <div key={inidx} className="ingre">
                <div
                  style={{
                    display:
                      IngreToggle &&
                      IngreToggle.artIdx === aridx &&
                      IngreToggle.ingreIdx === inidx
                        ? "none"
                        : "block",
                  }}
                >
                  {propertyValue}
                </div>
                <div className="editingre">
                  <form
                    style={{
                      display:
                        toggle &&
                        toggle.aindex === aridx &&
                        toggle.iindex === inidx
                          ? "block"
                          : "none",
                    }}
                    onSubmit={(e) => saveIngredint(e, aridx, inidx)}
                  >
                    <input
                      value={editIngredient}
                      onChange={(e) => setEditIngredient(e.target.value)}
                    />
                    <button className="btn save" type="submit" id="save-ingre">
                      Save
                    </button>
                    <button
                      className="btn cancel"
                      id="cancel-ingre"
                      onClick={cancelOnClick}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
                <div
                  className="ingre-edit-delete"
                  style={{
                    display:
                      IngreToggle &&
                      IngreToggle.artIdx === aridx &&
                      IngreToggle.ingreIdx === inidx
                        ? "none"
                        : "flex",
                  }}
                >
                  <div
                    className="editicon"
                    onClick={() => ToggleClass(aridx, inidx, propertyValue)}
                  >
                    <img src={edit} alt="" />
                  </div>
                  <div
                    className="removeingre"
                    onClick={(e) => removeIngre(e, aridx, inidx)}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
        </li>
        <li>
          <div
            className="edit"
            onClick={(e) =>
              handleEditClick(e, artist.id, artist.recipe, artist.ingredient)
            }
          >
            Edit
          </div>
          <div className="delete" onClick={() => handleDeleteClick(artist.id)}>
            Delete
          </div>
        </li>
      </ul>
    );
  });
}

export default React.memo(RecipeList);
