import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    Chef_name,
    Chef_picture,
    id,
    Numbers_of_recipes,
    Years_of_experience,
    likes,
  } = chef;
  return (
    <>
      <div className="">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="h-80 w-52">
            <img className="h-full" src={Chef_picture} alt="Movie" />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title">{Chef_name}</h2>
            <p>Experience: {Years_of_experience}</p>
            <div className="flex items-center">
              <p>{Numbers_of_recipes}</p>
              <p className="flex items-center">
                {" "}
                <FaThumbsUp></FaThumbsUp> {likes}
              </p>
            </div>
            <hr />
            <div className="card-actions justify-start">
              <Link to={`/chefData/${id}`}>
                <button className="main-btn text-sm">View Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
