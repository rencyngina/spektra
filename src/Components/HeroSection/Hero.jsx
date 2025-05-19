import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  const imagesData = [
    {
      src: "/images/guys3.jpg",
      title: "Building Services",
      description: "Electrical and mechanical designs and supervision",
      buttonLabel: "Who we are",
      linkTo: "/about",
    },
    {
      src: "/images/guys4.jpg",
      title: "Quality Control",
      description:
        "Ensuring standards are maintained in materials and workmanship",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
    
    {
      src: "/images/guys5.jpg",
      title: "IT Systems",
      description:
        "Switchrooms and Data Servers",
      buttonLabel: "Our Services",
      linkTo: "/services",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Mwenda RoyFord & Company Advocates</title>
        <meta
          name="description"
          content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services."
        />
      </Head>
      <div className="w-full h-[62vh] relative">
        <Slider {...settings} className="w-full h-full">
          {imagesData.map((image, index) => (
            <div key={index} className="relative w-full h-[62vh]">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-orange p-4 sm:p-8">
                <h1 className="w-full sm:w-1/2 lg:w-full text-4xl font-bold lg:text-4xl xl:text-5xl leading-relaxed lg:font-extrabold mb-2 text-center">
                  {image.title}
                </h1>
                <p className="text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-2xl leading-relaxed text-center mx-auto">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
