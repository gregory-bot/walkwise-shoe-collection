import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import SearchBar from "./SearchBar"; // Import SearchBar component

const videos = [
  "https://videos.pexels.com/video-files/5700368/5700368-uhd_2560_1440_24fps.mp4",
  "https://videos.pexels.com/video-files/29951359/12854089_2560_1440_25fps.mp4",
  "https://media.istockphoto.com/id/1466845609/video/shop-display-of-lot-of-sports-shoes-on-wall.mp4?s=mp4-640x640-is&k=20&c=Nun9vZP-wru2FqUwpGwyVmj_ZYdLqse5BaG2GJKb9FQ=",
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {videos.map((video, index) => (
        <video
          key={index}
          ref={index === activeIndex ? videoRef : null}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.4)" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        
        {/* Search Bar - Centered */}
        <div className="absolute top-24 w-full flex justify-center">
          <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
        </div>

        {/* Typewriter Effect */}
        <div className="text-4xl md:text-6xl mb-12 text-center">
          <Typewriter
            options={{
              strings: [
                "Step into comfort with WalkWise",
                "Premium footwear for every occasion",
                "Find your perfect pair today",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToServices}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          View Our Services
        </button>
      </div>
    </div>
  );
}

export default Hero;
