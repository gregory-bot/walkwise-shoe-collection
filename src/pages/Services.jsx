import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Men\'s Sneakers',
    description: 'Stylish and comfortable sneakers for men',
    image: 'https://i.postimg.cc/mkVn6njR/samba.jpg',
    price: true
  },
  {
    id: 2,
    title: 'Women\'s Heels',
    description: 'Elegant and fashionable heels for women',
    image: 'https://m.media-amazon.com/images/I/514FX9sndaL._AC_SY500_.jpg',
    price: true
  },
  {
    id: 3,
    title: 'Kids\' Shoes',
    description: 'Durable and fun shoes for kids',
    image: 'https://m.media-amazon.com/images/I/71tAh7qqLkL._AC_SX500_.jpg',
    price: true
  },
  {
    id: 4,
    title: 'Running Shoes',
    description: 'High-performance running shoes',
    image: 'https://m.media-amazon.com/images/I/71UHiDtRUyL._AC_SY500_.jpg',
    price: true
  },
  {
    id: 5,
    title: 'Boots',
    description: 'Sturdy and stylish boots for all occasions',
    image: 'https://m.media-amazon.com/images/I/71l74+JlGYL._AC_SY500_.jpg',
    price: true
  },
  {
    id: 6,
    title: 'Sandals',
    description: 'Comfortable and trendy sandals',
    image: 'https://m.media-amazon.com/images/I/71iqhXgJ0nL._AC_SY500_.jpg',
    price: true
  },
  {
    id: 7,
    title: 'Slippers',
    description: 'Cozy and warm slippers for home',
    image: 'https://m.media-amazon.com/images/I/71SUt3mfR9L._AC_SY500_.jpg',
    price: true
  },
  {
    id: 8,
    title: 'Formal Shoes',
    description: 'Classic and elegant formal shoes',
    image: 'https://m.media-amazon.com/images/I/71bzAXD2jAL._AC_SX500_.jpg',
    price: true
  },
  {
    id: 9,
    title: 'Sports Shoes',
    description: 'Shoes designed for various sports activities',
    image: 'https://m.media-amazon.com/images/I/81vMHDw3bJL._AC_SY500_.jpg',
    price: true
  },
  {
    id: 10,
    title: 'Custom Shoes',
    description: 'Personalized shoes made to order',
    image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: true
  },
];

function Services() {
  return (
    <section id="services-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">Our Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;