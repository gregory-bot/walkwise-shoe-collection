import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function OffersPage() {
  const offers = [
    {
      title: '50% Off on All Sneakers',
      images: [
        'https://m.media-amazon.com/images/I/61Ht6pj0JiL._AC_SX500_.jpg',
        'https://m.media-amazon.com/images/I/81pYKx2uvTL._AC_SX500_.jpg',
        'https://m.media-amazon.com/images/I/61K0cQOPlPL._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/614tD8JvPXL._AC_SX500_.jpg',
        'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/01667e57-f9fa-4867-901b-90f3c276992e._SL850_FMjpg_.jpg',
      ],
    },
    {
      title: 'buy two pairs and get 1 free😊',
      images: [
        'https://m.media-amazon.com/images/I/81HaPIj3C9L._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/51-3Ptl+KIL._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/71ofCHumP7L._AC_SY500_.jpg',
      ],
    },

    {
      title: 'get even top-rated shoes at an offer',
      images: [
        'https://m.media-amazon.com/images/I/71595VkktrL._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/61Vvku+kffL._AC_SX500_.jpg',
        'https://m.media-amazon.com/images/I/71fJS967sVL._AC_SY500_.jpg',
      ],
    },

    {
      title: 'whats stopping you from getting that shoe ?',
      images: [
        'https://m.media-amazon.com/images/I/61oxfMI0qDL._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/61W5p63FsjL._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/719E3Da9W5L._AC_SY500_.jpg',
        'https://m.media-amazon.com/images/I/61V2JlZP8KL._AC_SX500_.jpg',
      ],
    },
    // Add more offers as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Special Offers</h1>
        {offers.map((offer, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{offer.title}</h2>
            <Carousel
              showThumbs={false}
              autoPlay
              interval={8000}
              infiniteLoop
              showStatus={false}
              className="h-32"
            >
              {offer.images.map((image, idx) => (
                <div key={idx} className="h-32 relative">
                  <img src={image} alt={`Offer ${index + 1} Image ${idx + 1}`} className="h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    50% OFF
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersPage;