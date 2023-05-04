import React, { useState } from "react";

const Tabs = () => {
  return (
    <>
      <div className="main-container ">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-0 gap-5">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="w-full">
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Savory, comforting, hearty, satisfying.
                </h2>
                <p>
                  Ramen is a popular Japanese noodle soup dish made with wheat
                  noodles, broth, and various toppings such as sliced pork,
                  green onions, and bamboo shoots. The dish has its origins in
                  China but has become a staple of Japanese cuisine, with many
                  regional variations and styles.
                </p>
                <div className="card-actions justify-end">
                  <button className="main-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="w-full">
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Savory, comforting, hearty, satisfying.
                </h2>
                <p>
                  Ramen is a popular Japanese noodle soup dish made with wheat
                  noodles, broth, and various toppings such as sliced pork,
                  green onions, and bamboo shoots. The dish has its origins in
                  China but has become a staple of Japanese cuisine, with many
                  regional variations and styles.
                </p>
                <div className="card-actions justify-end">
                  <button className="main-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="w-full">
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Savory, comforting, hearty, satisfying.
                </h2>
                <p>
                  Ramen is a popular Japanese noodle soup dish made with wheat
                  noodles, broth, and various toppings such as sliced pork,
                  green onions, and bamboo shoots. The dish has its origins in
                  China but has become a staple of Japanese cuisine, with many
                  regional variations and styles.
                </p>
                <div className="card-actions justify-end">
                  <button className="main-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
