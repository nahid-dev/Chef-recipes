import React, { Suspense, lazy, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link, useLoaderData } from "react-router-dom";
import Video from "./Video";
import Tabs from "./Tabs";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Chef = lazy(() => import("./Chef"));

const Home = () => {
  const chefData = useLoaderData();
  return (
    <>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        {/* Banner Slider */}
        <div className=" md:flex items-center hidden h-screen">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 main-container h-screen">
                <div className="slider-content h-full flex items-center">
                  <div className="w-3/4 space-y-5">
                    <h1 className="font-extrabold text-6xl">
                      Find Japanese Best Traditional Food Here.
                    </h1>
                    <p>
                      served with various toppings such as raw fish, seafood,
                      and vegetables. Another popular dish is tempura, which
                      consists of battered and deep-fried seafood or vegetables.
                      Ramen, a type of noodle soup, is also a beloved dish in
                      Japan and has gained popularity worldwide.
                    </p>
                    <div>
                      <Link>
                        <button className="main-btn">See More</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="">
                    <img
                      className=""
                      src={`https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-2 main-container h-screen">
                <div className="slider-content h-full flex items-center">
                  <div className="w-3/4 space-y-5">
                    <h1 className="font-extrabold text-6xl">
                      Find Japanese Best Traditional Food Here.
                    </h1>
                    <p>
                      served with various toppings such as raw fish, seafood,
                      and vegetables. Another popular dish is tempura, which
                      consists of battered and deep-fried seafood or vegetables.
                      Ramen, a type of noodle soup, is also a beloved dish in
                      Japan and has gained popularity worldwide.
                    </p>
                    <div>
                      <Link>
                        <button className="main-btn">See More</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-end">
                  <div className="">
                    <img
                      className=""
                      src={`https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 main-container h-screen">
                <div className="slider-content h-full flex items-center">
                  <div className="w-3/4 space-y-5">
                    <h1 className="font-extrabold text-6xl">
                      Find Japanese Best Traditional Food Here.
                    </h1>
                    <p>
                      served with various toppings such as raw fish, seafood,
                      and vegetables. Another popular dish is tempura, which
                      consists of battered and deep-fried seafood or vegetables.
                      Ramen, a type of noodle soup, is also a beloved dish in
                      Japan and has gained popularity worldwide.
                    </p>
                    <div>
                      <Link>
                        <button className="main-btn">See More</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-end">
                  <div className="">
                    <img
                      className=""
                      src={`https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile Device only */}
        <div className="my-10 mt-20 md:hidden">
          <div className="grid grid-cols-1 main-container ">
            <div className="slider-content h-full flex items-center p-5">
              <div className="space-y-4">
                <h1 className="font-extrabold text-4xl">
                  Find Japanese Best Traditional Food Here.
                </h1>
                <p>
                  served with various toppings such as raw fish, seafood, and
                  vegetables. Another popular dish is tempura, which consists of
                  battered and deep-fried seafood or vegetables. Ramen, a type
                  of noodle soup, is also a beloved dish in Japan and has gained
                  popularity worldwide.
                </p>
                <div>
                  <Link>
                    <button className="main-btn">See More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slider-image custom-slide-h w-full p-5">
              <div className="h-5/6">
                <img
                  className="h-full rounded-s-full custom-slide-w"
                  src={`https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Traditional Recipes */}
        <Tabs></Tabs>
        {/* Some top Chef here */}
        <div className="my-10 mb-20">
          <div className="section-header mb-10">
            <div className="main-container">
              <div className="grid grid-cols-1 text-center">
                <div>
                  <h2 className="text-5xl font-bold mb-2">Our Top Chef's</h2>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, aperiam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content main-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
              {chefData.map((chef) => (
                <Chef key={chef.id} chef={chef}></Chef>
              ))}
            </div>
          </div>
        </div>
        {/* Video section */}
        <Video></Video>
      </Suspense>
    </>
  );
};

export default Home;
