import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Recipe from "../Pages/Recipe/Recipe";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    Chef_name,
    Chef_picture,
    Chef_description,
    Numbers_of_recipes,
    likes,
    Years_of_experience,
    Recipes,
  } = chefDetails;
  return (
    <>
      <Header></Header>
      <div className="secondary-bg ">
        <div className="main-container flex items-end justify-center chef-banner-h text-center">
          <div>
            <h3 className="text-4xl font-extrabold">Chef Details</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              magnam.
            </p>
          </div>
        </div>
      </div>
      {/* Chef Details */}
      <div className="secondary-bg pt-14">
        <div className="main-container">
          <div className="chef-banner third-bg">
            <div className="chef-banner-content">
              <div className="grid grid-cols-5 gap-10">
                <div className="col-span-2">
                  <div>
                    <div className="chef-image">
                      <img
                        className="chef-h w-full"
                        src={Chef_picture}
                        alt="Chef Picture"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  <div className="p-10 ">
                    <div className="space-y-4">
                      <div className="badge badge-secondary badge-outline">
                        {Numbers_of_recipes}
                      </div>
                      <h5 className="font-bold text-4xl ">{Chef_name}</h5>
                    </div>
                    <div className="space-y-5">
                      <p className="flex space-x-5 font-bold text-lg ">
                        <span>Likes: </span>
                        <span className="flex">
                          <FaThumbsUp className="likes-color me-3"></FaThumbsUp>
                          {likes}
                        </span>
                      </p>
                      <p className="text-lg font-bold">
                        <span>Experience: </span>{" "}
                        <span>{Years_of_experience}</span>
                      </p>
                      <p>{Chef_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chef Recipes */}
      <div className="secondary-bg py-20">
        <div className="main-container">
          <div className="grid grid-cols-3 gap-5">
            {Recipes.map((recipe) => (
              <Recipe key={recipe.recipe_name} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChefDetails;
