import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./About.css";

import { Autoplay, Pagination } from "swiper";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle('');
  return (
    <>
      <div className="bg-white pt-8 flex flex-col items-center md:px-40">
        <h2
          className="text-green-400 text-4xl font-medium border-b-4 inline-block"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          About us
        </h2>
        <p className="text-yellow-400 mb-4 md:mb-0">Everything you need to know about us</p>
        <div className="flex flex-col-reverse md:grid grid-cols-2">
          <div className="flex items-center px-2 md:px-0">
            <p className="text-center md:text-left pb-2 md:pb-0">
              <span className="text-green-400">Lorem ipsum</span> dolor, sit
              amet consectetur adipisicing elit. Optio perferendis pariatur, sit
              ipsam omnis eveniet suscipit incidunt, minus laboriosam nam modi
              ab hic ratione commodi in quod maxime? Deleniti optio amet ipsa
              eligendi non quia tempora labore architecto, iure necessitatibus
              cupiditate odit doloribus exercitationem culpa provident quasi
              sequi praesentium quae!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="http://wethemez.com/demo/manganted/img/about-us-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="md:h-96 p-4 md:p-0 bg-about">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="py-4 md:py-0">
              <p className="italic text-lg text-white text-left">
                Latest tweet of{" "}
                <span className="text-yellow-400">@s-peac-hless:</span>
              </p>
              <br />
              <h5 className="text-white md:text-4xl text-right italic">
                "Buying couples of chilli to prepare for a Spicy Party... "
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="italic text-lg text-white text-left">
                Latest tweet of{" "}
                <span className="text-yellow-400">@s-peac-hless:</span>
              </p>
              <br />
              <h5 className="text-white md:text-4xl text-right italic">
                "Buying couples of chilli to prepare for a Spicy Party... "
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="italic text-lg text-white text-left">
                Latest tweet of{" "}
                <span className="text-yellow-400">@s-peac-hless:</span>
              </p>
              <br />
              <h5 className="text-white md:text-4xl text-right italic">
                "Buying couples of chilli to prepare for a Spicy Party... "
              </h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default About;
