import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute left-15 bottom-20 flex gap-2 items-center">
          <Link
            to="#"
            className=" text-xl hover:bg-primary px-3 py-1 rounded-xl"
          >
            Track Your Parcel
          </Link>
          <HiArrowCircleRight className="-rotate-40 text-3xl" />
          <Link
            to="#"
            className="text-xl border hover:bg-primary hover:border-0 px-3 py-1 rounded-xl"
          >
            Be A Rider
          </Link>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
        <div className="absolute left-15 bottom-26 flex gap-2 items-center">
          <Link
            to="#"
            className=" text-xl hover:bg-primary px-3 py-1 rounded-xl"
          >
            Track Your Parcel
          </Link>
          <HiArrowCircleRight className="-rotate-40 text-3xl" />
          <Link
            to="#"
            className="text-xl hover:bg-primary px-3 py-1 rounded-xl"
          >
            Be A Rider
          </Link>
        </div>
      </div>
      <div>
        <img src={bannerImg3} />
        <div className="absolute left-15 bottom-30 flex gap-2 items-center">
          <Link
            to="#"
            className=" text-xl hover:bg-primary px-3 py-1 rounded-xl"
          >
            Track Your Parcel
          </Link>
          <HiArrowCircleRight className="-rotate-40 text-3xl" />
          <Link
            to="#"
            className="text-xl hover:bg-primary px-3 py-1 rounded-xl"
          >
            Be A Rider
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
