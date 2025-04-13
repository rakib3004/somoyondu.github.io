import ImageSlider from "../components/ImageSlider";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [slides, setSlides] = useState([]);
  
  useEffect(() => {
    // Dynamically import all images from the gallery folder using Vite's import.meta.glob
    const importAllImages = async () => {
      try {
        // Get all images from the gallery folder using Vite's glob import
        const imageModules = import.meta.glob('../../public/gallery/*.{jpg,jpeg,png,gif,webp}');
        
        const loadedSlides = await Promise.all(
          Object.entries(imageModules).map(async ([path, module]) => {
            // Extract filename without extension
            const fileName = path
              .split('/').pop() // Get the last part of the path
              .replace(/\.[^/.]+$/, ''); // Remove file extension
            
            // Convert kebab-case or snake_case to Title Case
            const title = fileName
              .split(/[-_]/)
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            
            const imageUrl = (await module()).default;
            
            return {
              url: imageUrl,
              title: title,
              key: fileName
            };
          })
        );
        
        setSlides(loadedSlides);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    
    importAllImages();
  }, []);

  const containerStyles = {
    width: "500px",
    maxWidth: "100%",
    height: "500px",
    margin: "0 auto",
  };

  return (
    <div className="bg-[#FFF3CF] py-6 my-6" id="gallery">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl text-center font-bold pb-4 pt-6 text-[#1D0061]">
          গ্যালারি
        </h1>
        <h1 className="text-xl mb-6">একনজরে সময়নের কার্যক্রম</h1>

        {slides.length > 0 ? (
          <div style={containerStyles}>
            <ImageSlider>
              {slides.map((image) => (
                <img key={image.key} src={image.url} alt={image.title} />
              ))}
            </ImageSlider>
          </div>
        ) : (
          <p className="text-center py-4">ছবি লোড হচ্ছে ...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;