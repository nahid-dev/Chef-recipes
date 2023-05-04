import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <>
      <div className="main-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
          <div className="flex items-center">
            <div className="space-y-5">
              <h5 className="text-4xl font-extrabold">
                We Invite You to the Restaurant
              </h5>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ratione optio nulla illum, eius dolor maiores nulla illum,
              </p>
              <div className="open-close-time font-semibold">
                <p>
                  <span className="me-5">Monday - Friday</span>{" "}
                  <span>08AM - 12PM</span>
                </p>
                <p>
                  <span className="me-5">Saturday - Sunday</span>{" "}
                  <span>10AM - 11PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555529536-a60ea7a7a093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />

            <button className="video-play">
              <FaPlay></FaPlay>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
