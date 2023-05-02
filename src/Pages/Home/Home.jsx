import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Banner Slider */}
      <div className=" custom-h flex items-center">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 main-container ">
              <div className="slider-content h-full flex items-center">
                <div className="w-3/4 space-y-5">
                  <h1 className="font-extrabold text-6xl">
                    Find Japanese Best Traditional Food Here.
                  </h1>
                  <p>
                    served with various toppings such as raw fish, seafood, and
                    vegetables. Another popular dish is tempura, which consists
                    of battered and deep-fried seafood or vegetables. Ramen, a
                    type of noodle soup, is also a beloved dish in Japan and has
                    gained popularity worldwide.
                  </p>
                  <div>
                    <Link>
                      <button className="main-btn">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slider-image custom-slide-h w-full flex items-center justify-end">
                <div className="h-5/6">
                  <img
                    className="h-full rounded-s-full custom-slide-w"
                    src={`https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-2 main-container ">
              <div className="slider-content h-full flex items-center">
                <div className="w-3/4 space-y-5">
                  <h1 className="font-extrabold text-6xl">
                    Find Japanese Best Traditional Food Here.
                  </h1>
                  <p>
                    served with various toppings such as raw fish, seafood, and
                    vegetables. Another popular dish is tempura, which consists
                    of battered and deep-fried seafood or vegetables. Ramen, a
                    type of noodle soup, is also a beloved dish in Japan and has
                    gained popularity worldwide.
                  </p>
                  <div>
                    <Link>
                      <button className="main-btn">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slider-image custom-slide-h w-full flex items-center justify-end">
                <div className="h-5/6">
                  <img
                    className="h-full rounded-s-full custom-slide-w"
                    src={`https://images.unsplash.com/photo-1535007813616-79dc02ba4021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 main-container ">
              <div className="slider-content h-full flex items-center">
                <div className="w-3/4 space-y-5">
                  <h1 className="font-extrabold text-6xl">
                    Find Japanese Best Traditional Food Here.
                  </h1>
                  <p>
                    served with various toppings such as raw fish, seafood, and
                    vegetables. Another popular dish is tempura, which consists
                    of battered and deep-fried seafood or vegetables. Ramen, a
                    type of noodle soup, is also a beloved dish in Japan and has
                    gained popularity worldwide.
                  </p>
                  <div>
                    <Link>
                      <button className="main-btn">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slider-image custom-slide-h w-full flex items-center justify-end">
                <div className="h-5/6">
                  <img
                    className="h-full rounded-s-full custom-slide-w"
                    src={`https://images.unsplash.com/photo-1669626389217-84f0a7bdf9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 main-container ">
              <div className="slider-content h-full flex items-center">
                <div className="w-3/4 space-y-5">
                  <h1 className="font-extrabold text-6xl">
                    Find Japanese Best Traditional Food Here.
                  </h1>
                  <p>
                    served with various toppings such as raw fish, seafood, and
                    vegetables. Another popular dish is tempura, which consists
                    of battered and deep-fried seafood or vegetables. Ramen, a
                    type of noodle soup, is also a beloved dish in Japan and has
                    gained popularity worldwide.
                  </p>
                  <div>
                    <Link>
                      <button className="main-btn">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slider-image custom-slide-h w-full flex items-center justify-end">
                <div className="h-5/6">
                  <img
                    className="h-full rounded-s-full custom-slide-w"
                    src={`https://plus.unsplash.com/premium_photo-1664648184160-2fbcb762cdfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
