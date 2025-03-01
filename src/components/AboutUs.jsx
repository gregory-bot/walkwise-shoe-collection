import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.postimg.cc/TPCxV8cf/jkuat.jpg",
  "https://i.postimg.cc/mkVn6njR/samba.jpg",
  "https://images.pexels.com/photos/293404/pexels-photo-293404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function AboutUs() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Smooth Image Carousel */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            {images.map((img, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={img}
                alt="Walkwise shoe store"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                style={{ position: "absolute", top: 0, left: 0 }}
                initial={{ opacity: imgIndex === index ? 1 : 0 }}
                animate={{ opacity: imgIndex === index ? 1 : 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          </div>

          {/* About Us Content */}
          <div>
            <h2 className="text-3xl text-blue-600 font-bold mb-6">About Walkwise Shoe Store Services</h2>
            <p className="text-green-600 mb-6">
              At Walkwise, we’re your go-to destination for premium footwear. With a passion for quality and style, we offer a wide range of shoes for men, women, and kids, ensuring comfort, durability, and the latest trends for every step of your journey.
            </p>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[200px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.30104864432104!2d36.8250994!3d-1.2838218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129fc5ce763%3A0x777d4b970984a739!2sJENGI%20HOUSE!5e0!3m2!1sen!2ske!4v1738734442412!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
