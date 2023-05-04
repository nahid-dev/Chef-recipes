import React from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <>
      <div className="secondary-bg pb-4">
        <div className="main-container flex items-end justify-center chef-banner-h text-center">
          <div>
            <h3 className="text-4xl font-extrabold">Food Blog</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              magnam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
