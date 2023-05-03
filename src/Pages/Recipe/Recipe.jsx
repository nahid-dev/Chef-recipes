import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const [favourite, setFavourte] = useState(false);
  const {
    cooking_method,
    rating,
    recipe_ingredients,
    recipe_name,
    recipe_picture,
  } = recipe;

  const handleFavBtn = () => {
    toast.success("Added to Favorite");
    setFavourte(true);
  };
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="recipe-img-h" src={recipe_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-2xl">{recipe_name}</h2>
            <button
              onClick={handleFavBtn}
              className="flex items-center space-x-2  btn btn-outline"
              disabled={favourite}
            >
              <FaHeart></FaHeart>
            </button>
          </div>

          <div>
            {recipe_ingredients.map((ingredients, index) => (
              <li className="list-none font-bold text-base">
                <span className="me-3">{index + 1}</span>{" "}
                <span>{ingredients}</span>
              </li>
            ))}
          </div>

          <p>{cooking_method.slice(0, 200)}</p>
          <hr />
          <div className="cart-bottom-area">
            <div className="flex items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="pt-1 ms-5">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
