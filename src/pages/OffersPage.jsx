import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useCart } from '../context/CartContext';

function OffersPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  const offers = [
    {
      id: 'offer1',
      title: '50% Off on All Sneakers',
      description: 'Get 50% off on all sneakers. Limited time offer!',
      originalPrice: 5000,
      price: 1999,
      image: 'https://m.media-amazon.com/images/I/614tD8JvPXL._AC_SX500_.jpg',
    },
    {
      id: 'offer2',
      title: 'Buy Two Pairs and Get 1 Free',
      description: 'Buy two pairs of shoes and get one pair free!',
      originalPrice: 6000,
      price: 2999,
      image: 'https://m.media-amazon.com/images/I/71BeA7yHeKL._AC_SY500_.jpg',
    },
    {
      id: 'offer3',
      title: '30% Off on Running Shoes',
      description: 'Enhance your running experience with 30% off on running shoes!',
      originalPrice: 4000,
      price: 2800,
      image: 'https://m.media-amazon.com/images/I/71CLmqnKm9L._AC_SY500_.jpg',
    },
    {
      id: 'offer4',
      title: 'Buy One Get One Free on Sandals',
      description: 'Buy one pair of sandals and get another pair free!',
      originalPrice: 3000,
      price: 1500,
      image: 'https://m.media-amazon.com/images/I/71LtS4K6kDL._AC_SY500_.jpg',
    },
    {
      id: 'offer5',
      title: '20% Off on Formal Shoes',
      description: 'Get 20% off on all formal shoes. Perfect for office wear!',
      originalPrice: 4500,
      price: 3600,
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer6',
      title: '40% Off on Boots',
      description: 'Stay stylish and warm with 40% off on all boots!',
      originalPrice: 5500,
      price: 3300,
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer7',
      title: '25% Off on Kids Shoes',
      description: 'Get 25% off on all kids shoes. Comfortable and durable!',
      originalPrice: 3500,
      price: 2625,
      image: 'https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer8',
      title: 'Exclusive 50% Off on Custom Shoes',
      description: 'Personalize your shoes with 50% off on all custom designs!',
      originalPrice: 7000,
      price: 3500,
      image: 'https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer9',
      title: 'Flash Sale: 60% Off on Sports Shoes',
      description: 'Limited time flash sale! Get 60% off on sports shoes!',
      originalPrice: 6000,
      price: 2400,
      image: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer10',
      title: '30% Off on Women\'s Heels',
      description: 'Step up your style with 30% off on all women\'s heels!',
      originalPrice: 5000,
      price: 3500,
      image: 'https://images.pexels.com/photos/1619655/pexels-photo-1619655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer11',
      title: 'Buy One Get One 50% Off on Slippers',
      description: 'Buy one pair of slippers and get another pair at 50% off!',
      originalPrice: 2000,
      price: 1500,
      image: 'https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer12',
      title: 'Special Offer: 35% Off on Hiking Shoes',
      description: 'Get ready for your next adventure with 35% off on hiking shoes!',
      originalPrice: 4500,
      price: 2925,
      image: 'https://images.pexels.com/photos/2929281/pexels-photo-2929281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer13',
      title: '20% Off on Casual Shoes',
      description: 'Stay comfortable and stylish with 20% off on casual shoes!',
      originalPrice: 3000,
      price: 2400,
      image: 'https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer14',
      title: 'Limited Time: 50% Off on Designer Shoes',
      description: 'Get 50% off on all designer shoes. Limited time offer!',
      originalPrice: 8000,
      price: 4000,
      image: 'https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer15',
      title: '30% Off on Loafers',
      description: 'Get 30% off on all loafers. Perfect for casual and formal wear!',
      originalPrice: 4000,
      price: 2800,
      image: 'https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer16',
      title: 'Buy One Get One Free on Flip Flops',
      description: 'Buy one pair of flip flops and get another pair free!',
      originalPrice: 1500,
      price: 750,
      image: 'https://images.pexels.com/photos/2237456/pexels-photo-2237456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer17',
      title: 'Exclusive 40% Off on Limited Edition Shoes',
      description: 'Get 40% off on all limited edition shoes. Don\'t miss out!',
      originalPrice: 7000,
      price: 4200,
      image: 'https://images.pexels.com/photos/982189/pexels-photo-982189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer18',
      title: '25% Off on Athletic Shoes',
      description: 'Enhance your performance with 25% off on athletic shoes!',
      originalPrice: 5000,
      price: 3750,
      image: 'https://images.pexels.com/photos/296159/pexels-photo-296159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'offer19',
      title: 'Flash Deal: 50% Off on All Footwear',
      description: 'Flash deal! Get 50% off on all footwear. Limited stock!',
      originalPrice: 6000,
      price: 3000,
      image: 'https://m.media-amazon.com/images/I/61NPKHExAtL._AC_SY500_.jpg',
    },
    {
      id: 'offer20',
      title: 'Special Offer: 30% Off on All Shoes',
      description: 'Get 30% off on all shoes. Perfect for any occasion!',
      originalPrice: 4000,
      price: 2800,
      image: 'https://m.media-amazon.com/images/I/61H-vRZmXrL._AC_SX500_.jpg',
    },
  ];

  const handleAddToCart = (item, selectedSize, selectedColor, rating) => {
    const itemWithDetails = {
      ...item,
      size: selectedSize,
      color: selectedColor,
      rating: rating,
    };
    addToCart(itemWithDetails);
  };

  const handleBackHomeClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 pb-10 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleBackHomeClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            BACK HOME
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-8">Special Offers</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer) => {
            const [selectedSize, setSelectedSize] = useState('');
            const [selectedColor, setSelectedColor] = useState('');
            const [rating, setRating] = useState(0);

            const ratingChanged = (newRating) => {
              setRating(newRating);
            };

            return (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
                <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <img src={offer.image} alt={offer.title} className="absolute top-0 left-0 w-full h-full object-contain" />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    50% OFF
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1 text-black-600">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{offer.description}</p>

                  {/* Size Selection */}
                  <div className="mb-2">
                    <label htmlFor={`size-${offer.id}`} className="block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <select
                      id={`size-${offer.id}`}
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select size</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-2">
                    <label htmlFor={`color-${offer.id}`} className="block text-sm font-medium text-gray-700">
                      Color
                    </label>
                    <select
                      id={`color-${offer.id}`}
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">select colour</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="White">purple</option>
                      <option value="Red">Red</option>
                      <option value="White">pink</option>
                      <option value="Blue">Blue</option>
                      <option value="White">yellow</option>
                      <option value="Green">Green</option>
                    </select>
                  </div>

                  {/* Rating Section */}
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Rate
                    </label>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ff0000"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-green-500 line-through mr-2">was KSH {offer.originalPrice}</span>
                      <span className="text-blue-600 font-bold text-lg">KSH {offer.price}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(offer, selectedSize, selectedColor, rating)}
                      className="bg-yellow-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                      disabled={!selectedSize || !selectedColor}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;