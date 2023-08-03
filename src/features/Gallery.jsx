import React from "react";
import ImageSlider from "../components/ImageSlider";
const Gallery = () => {

  const slides = [
    { url: "image1.png", title: "beach" },
    { url: "image2.png", title: "boat" },
    { url: "image3.png", title: "forest" },
    { url: "image4.png", title: "city" },
    { url: "image5.png", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="bg-[#FFF3CF] py-6 my-6" id="gallery">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl text-center font-bold pb-4 pt-6 text-[#1D0061]">
          গ্যালারি
        </h1>
        <h1 className="text-base">একনজরে সময়নের কার্যক্রম</h1>

        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>        
     
      </div>

  
    </div>
  );
};

export default Gallery;
