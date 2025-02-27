import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ReactStars from 'react-rating-stars-component';
const mensShoes = [
  {
    id: 'ms1',
    title: 'Nike Air Max',
    description: 'Comfortable and stylish sneakers for everyday wear',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/267326/pexels-photo-267326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ms2',
    title: 'Adidas Ultraboost',
    description: 'High-performance running shoes with superior cushioning',
    price: 1590.99,
    image: 'https://images.pexels.com/photos/29342151/pexels-photo-29342151/free-photo-of-modern-sports-shoes-on-wooden-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ms3',
    title: 'Puma Suede Classic',
    description: 'Iconic design with a comfortable fit',
    price: 899.99,
    image: 'https://m.media-amazon.com/images/I/718eoAhoXqL._AC_SY500_.jpg'
  },
  {
    id: 'ms4',
    title: 'Reebok Club C',
    description: 'Classic tennis shoes with a retro look',
    price: 1790.00,
    image: 'https://m.media-amazon.com/images/I/71hZ9ScUc4L._AC_SY500_.jpg'
  },
  {
    id: 'ms5',
    title: 'New Balance 574',
    description: 'Versatile sneakers with a timeless design',
    price: 999.97,
    image: 'https://m.media-amazon.com/images/I/71qnRadHD+L._AC_SY500_.jpg'
  },
  {
    id: 'ms6',
    title: 'Converse Chuck Taylor',
    description: 'Classic high-top sneakers for a casual look',
    price: 1549.00,
    image: 'https://m.media-amazon.com/images/I/61jbjmVjrwL._AC_SY500_.jpg'
  },
  {
    id: 'ms7',
    title: 'Vans Old Skool',
    description: 'Skate shoes with a durable construction',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/61P+ocONXOL._AC_SY500_.jpg'
  },
  {
    id: 'ms8',
    title: 'Asics Gel-Kayano',
    description: 'Stability running shoes with advanced support',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/81QpazsoxLL._AC_SY500_.jpg'
  },
  {
    id: 'ms9',
    title: 'Under Armour HOVR',
    description: 'Innovative running shoes with energy return technology',
    price: 1300.98,
    image: 'https://m.media-amazon.com/images/I/91Th0Ipew0L._AC_SY575_.jpg'
  },
  {
    id: 'ms10',
    title: 'Brooks Ghost',
    description: 'Cushioned running shoes for a smooth ride',
    price: 1156,
    image: 'https://m.media-amazon.com/images/I/71DDpKWGtCL._AC_SY500_.jpg'
  },
  {
    id: 'ms11',
    title: 'Saucony Jazz Original',
    description: 'Retro running shoes with a comfortable fit',
    price: 1800,
    image: 'https://m.media-amazon.com/images/I/718fywc4osL._AC_SX500_.jpg'
  },
  {
    id: 'ms12',
    title: 'Hoka One One Clifton',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1760.55,
    image: 'https://m.media-amazon.com/images/I/51NMmqg91YL._AC_SX500_.jpg'
  },
  {
    id: 'ms13',
    title: 'Mizuno Wave Rider',
    description: 'Responsive running shoes with a smooth ride',
    price: 1399.00,
    image: 'https://m.media-amazon.com/images/I/71HAyiqnabL._AC_SY500_.jpg'
  },
  {
    id: 'ms14',
    title: 'Timberland 6-Inch Boots',
    description: 'Durable and stylish boots for all-weather conditions',
    price: 4000.99,
    image: 'https://m.media-amazon.com/images/I/81QJAdzJs+L._AC_SY500_.jpg'
  },
  {
    id: 'ms15',
    title: 'Jordan 1 Retro High',
    description: 'Classic basketball sneakers with premium materials',
    price: 3878.99,
    image: 'https://m.media-amazon.com/images/I/51neFxMGXbL._AC_SX500_.jpg'
  },
  {
    id: 'ms16',
    title: 'Nike Blazer Mid 77',
    description: 'Vintage-style sneakers with a sleek design',
    price: 3459.99,
    image: 'https://m.media-amazon.com/images/I/71M+2+N9t2L._AC_SY500_.jpg'
  },
  {
    id: 'ms17',
    title: 'Salomon Speedcross 5',
    description: 'Trail running shoes with excellent grip and durability',
    price: 5678.00,
    image: 'https://m.media-amazon.com/images/I/71xfnveKB+L._AC_SY500_.jpg'
  },
  {
    id: 'ms18',
    title: 'Merrell Moab 2',
    description: 'Hiking shoes designed for comfort and support',
    price: 1599,
    image: 'https://m.media-amazon.com/images/I/8128tBP5BNL._AC_SX500_.jpg'
  },
  {
    id: 'ms19',
    title: 'On Cloud 5',
    description: 'Lightweight and comfortable everyday running shoes',
    price: 1398,
    image: 'https://m.media-amazon.com/images/I/71E2aJla3JL._AC_SY500_.jpg'
  },
  {
    id: 'ms20',
    title: 'Fila Disruptor II',
    description: 'Chunky sneakers with a bold retro look',
    price: 4000.99,
    image: 'https://m.media-amazon.com/images/I/71haTpo3xZS._AC_SX500_.jpg'
  }
];

const womensHeels = [
  {
    id: 'wh1',
    title: 'Steve Madden Carrson',
    description: 'Classic block heels with an adjustable ankle strap',
    price: 1000,
    image: 'https://m.media-amazon.com/images/I/71NJvyBX86L._AC_SX500_.jpg'
  },
  {
    id: 'wh2',
    title: 'Jessica Simpson Stiletto',
    description: 'Elegant high heels with a pointed toe design',
    price: 1300.00,
    image: 'https://m.media-amazon.com/images/I/517wsfCX84L._AC_SY500_.jpg'
  },
  {
    id: 'wh3',
    title: 'Nine West Tatiana Pump',
    description: 'Sleek and sophisticated pointed-toe pumps',
    price: 679.55,
    image: 'https://m.media-amazon.com/images/I/61z2HltvqiL._AC_SX500_.jpg'
  },
  {
    id: 'wh4',
    title: 'Sam Edelman Yaro',
    description: 'Chic block heels with a minimalistic design',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/61Yxa4vxRLL._AC_SY500_.jpg'
  },
  {
    id: 'wh5',
    title: 'Badgley Mischka Kiara',
    description: 'Glamorous bridal heels with rhinestone embellishments',
    price: 4490.99,
    image: 'https://m.media-amazon.com/images/I/71lO3NjWXmL._AC_SY575_.jpg'
  },
  {
    id: 'wh6',
    title: 'Michael Kors Dorothy Flex',
    description: 'Timeless pumps with a comfortable fit',
    price: 3200,
    image: 'https://m.media-amazon.com/images/I/71RtMNwKwyL._AC_SX500_.jpg'
  },
  {
    id: 'wh7',
    title: 'Christian Louboutin So Kate',
    description: 'Luxury high heels with a signature red sole',
    price: 795.00,
    image: 'https://m.media-amazon.com/images/I/81q9MQDY69L._AC_SY500_.jpg'
  },
  {
    id: 'wh8',
    title: 'Stuart Weitzman Nudist',
    description: 'Elegant ankle-strap heels for any occasion',
    price: 3987,
    image: 'https://m.media-amazon.com/images/I/71iXY23fviL._AC_SX500_.jpg'
  },
  {
    id: 'wh9',
    title: 'Aldo Stessy Pump',
    description: 'Classic pointed-toe heels with a sleek finish',
    price: 599,
    image: 'https://images.pexels.com/photos/27204280/pexels-photo-27204280/free-photo-of-stilettos-negro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 'wh10',
    title: 'Jimmy Choo Romy',
    description: 'Designer heels with a timeless silhouette',
    price: 6950,
    image: 'https://m.media-amazon.com/images/I/61J8jZdpX3L._AC_SY500_.jpg'
  },
  {
    id: 'wh11',
    title: 'Stiletto Heels',
    description: 'Elegant and fashionable stiletto heels for women',
    price: 7000,
    image: 'https://m.media-amazon.com/images/I/5138QwjOpsL._AC_SX522_.jpg'
  },
  {
    id: 'wh12',
    title: 'Block Heels',
    description: 'Comfortable and stylish block heels for women',
    price: 1860.99,
    image: 'https://m.media-amazon.com/images/I/71HjMWSylpL._AC_SX500_.jpg'
  },
  {
    id: 'wh13',
    title: 'Wedge Heels',
    description: 'Trendy and comfortable wedge heels for women',
    price: 1250.55,
    image: 'https://m.media-amazon.com/images/I/611lWHy0M2L._AC_SX500_.jpg'
  },
  {
    id: 'wh14',
    title: 'Platform Heels',
    description: 'Stylish platform heels for a bold look',
    price: 999.00,
    image: 'https://m.media-amazon.com/images/I/716PbDMYE0L._AC_SY500_.jpg'
  },
  {
    id: 'wh15',
    title: 'Kitten Heels',
    description: 'Chic and comfortable kitten heels for women',
    price: 2000.00,
    image: 'https://m.media-amazon.com/images/I/51YZ+grJRuL._AC_SY500_.jpg'
  },
  {
    id: 'wh16',
    title: 'Peep Toe Heels',
    description: 'Fashionable peep toe heels for a stylish look',
    price: 1800.99,
    image: 'https://m.media-amazon.com/images/I/71NVq596w8L._AC_SY500_.jpg'
  },
  {
    id: 'wh17',
    title: 'Ankle Strap Heels',
    description: 'Elegant ankle strap heels for women',
    price: 1255.00,
    image: 'https://m.media-amazon.com/images/I/81-cMJBytWL._AC_SY500_.jpg'
  },
  {
    id: 'wh18',
    title: 'Slingback Heels',
    description: 'Stylish slingback heels for a comfortable fit',
    price: 699.00,
    image: 'https://m.media-amazon.com/images/I/615qTukQ2RL._AC_SY500_.jpg'
  },
  {
    id: 'wh19',
    title: 'Mule Heels',
    description: 'Trendy mule heels for a fashionable look',
    price: 890.00,
    image: 'https://m.media-amazon.com/images/I/61J2fzAgSpL._AC_SX679_.jpg'
  },
  {
    id: 'wh20',
    title: 'Espadrille Heels',
    description: 'Comfortable and stylish espadrille heels',
    price: 999.99,
    image: 'https://m.media-amazon.com/images/I/615-m7Fgv8L._AC_SY500_.jpg'
  }
];

const kidsShoes = [
  {
    id: 'ks1',
    title: 'Nike Kids Air Max',
    description: 'Durable and fun sneakers for kids',
    price: 590.99,
    image: 'https://m.media-amazon.com/images/I/71T-iTOb1PL._AC_SY500_.jpg'
  },
  {
    id: 'ks2',
    title: 'Adidas Kids Superstar',
    description: 'Classic and stylish sneakers for kids',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/81g4ZeFTJGL._AC_SY500_.jpg'
  },
  {
    id: 'ks3',
    title: 'Puma Kids Suede',
    description: 'Comfortable and trendy sneakers for kids',
    price: 3560.99,
    image: 'https://m.media-amazon.com/images/I/71OHHynKOYL._AC_SX500_.jpg'
  },
  {
    id: 'ks4',
    title: 'Reebok Kids Classic',
    description: 'Retro style sneakers for kids',
    price: 4400,
    image: 'https://m.media-amazon.com/images/I/61x2DKocV2L._AC_SX500_.jpg'
  },
  {
    id: 'ks5',
    title: 'New Balance Kids 574',
    description: 'Versatile and durable sneakers for kids',
    price: 540.99,
    image: 'https://m.media-amazon.com/images/I/51g3h3kqrVL._AC_SY500_.jpg'
  },
  {
    id: 'ks6',
    title: 'Converse Kids Chuck Taylor',
    description: 'Classic high-top sneakers for kids',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/618J9VEzIXL._AC_SY695_.jpg'
  },
  {
    id: 'ks7',
    title: 'Vans Kids Old Skool',
    description: 'Skate shoes with a durable construction for kids',
    price: 350,
    image: 'https://m.media-amazon.com/images/I/71kYDSF-SDL._AC_SX500_.jpg'
  },
  {
    id: 'ks8',
    title: 'Asics Kids Gel-Kayano',
    description: 'Stability running shoes with advanced support for kids',
    price: 500.99,
    image: 'https://m.media-amazon.com/images/I/61K6PyuYkXL._AC_SY500_.jpg'
  },
  {
    id: 'ks9',
    title: 'Under Armour Kids HOVR',
    description: 'Innovative running shoes with energy return technology for kids',
    price: 699,
    image: 'https://m.media-amazon.com/images/I/71pAqWT2qKL._AC_SX500_.jpg'
  },
  {
    id: 'ks10',
    title: 'Brooks Kids Ghost',
    description: 'Cushioned running shoes for a smooth ride for kids',
    price: 588,
    image: 'https://m.media-amazon.com/images/I/71kCcsYqZUL._AC_SY500_.jpg'
  },
  {
    id: 'ks11',
    title: 'Saucony Kids Jazz Original',
    description: 'Retro running shoes with a comfortable fit for kids',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/71ZlDEJgAlL._AC_SX500_.jpg'
  },
  {
    id: 'ks12',
    title: 'Hoka One One Kids Clifton',
    description: 'Lightweight running shoes with maximum cushioning for kids',
    price: 600.00,
    image: 'https://m.media-amazon.com/images/I/61U1zZlIPGL._AC_SY500_.jpg'
  },
  {
    id: 'ks13',
    title: 'Mizuno Kids Wave Rider',
    description: 'Responsive running shoes with a smooth ride for kids',
    price: 1500.00,
    image: 'https://m.media-amazon.com/images/I/716KPC8qtBL._AC_SX500_.jpg'
  },
  {
    id: 'ks14',
    title: 'Timberland Kids 6-Inch Boots',
    description: 'Durable and stylish boots for all-weather conditions for kids',
    price: 1700.99,
    image: 'https://m.media-amazon.com/images/I/81+PROtR+BL._AC_SY500_.jpg'
  },
  {
    id: 'ks15',
    title: 'Jordan Kids 1 Retro High',
    description: 'Classic basketball sneakers with premium materials for kids',
    price: 800.00,
    image: 'https://m.media-amazon.com/images/I/61n43LPaK8L._AC_SY500_.jpg'
  },
  {
    id: 'ks16',
    title: 'Nike Kids Blazer Mid 77',
    description: 'Vintage-style sneakers with a sleek design for kids',
    price: 500.99,
    image: 'https://m.media-amazon.com/images/I/41tp8vnukiL._AC_SY500_.jpg'
  },
  {
    id: 'ks17',
    title: 'Salomon Kids Speedcross 5',
    description: 'Trail running shoes with excellent grip and durability for kids',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/81Qb4qwW+2L._AC_SY500_.jpg'
  },
  {
    id: 'ks18',
    title: 'Merrell Kids Moab 2',
    description: 'Hiking shoes designed for comfort and support for kids',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/61ybPUlw8jL._AC_SY500_.jpg'
  },
  {
    id: 'ks19',
    title: 'On Kids Cloud 5',
    description: 'Lightweight and comfortable everyday running shoes for kids',
    price: 699.00,
    image: 'https://m.media-amazon.com/images/I/61xW-vAbF0L._AC_SX500_.jpg'
  },
  {
    id: 'ks20',
    title: 'Fila Kids Disruptor II',
    description: 'Chunky sneakers with a bold retro look for kids',
    price: 1000.00,
    image: 'https://m.media-amazon.com/images/I/512ZB1oNzqL._AC_SX500_.jpg'
  }
];


const runningShoes = [
  {
    id: 'rs1',
    title: 'Nike Air Zoom Pegasus',
    description: 'High-performance running shoes with responsive cushioning',
    price: 1199.99,
    image: 'https://images.pexels.com/photos/13525776/pexels-photo-13525776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rs2',
    title: 'Adidas Ultraboost',
    description: 'Comfortable and stylish running shoes with superior cushioning',
    price: 1579.99,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rs3',
    title: 'Asics Gel-Nimbus',
    description: 'Premium running shoes with advanced support and cushioning',
    price: 1449.99,
    image: 'https://images.pexels.com/photos/6748322/pexels-photo-6748322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rs4',
    title: 'Brooks Ghost',
    description: 'Cushioned running shoes for a smooth ride',
    price: 1100,
    image: 'https://m.media-amazon.com/images/I/710A1Nf73hL._AC_SY500_.jpg'
  },
  {
    id: 'rs5',
    title: 'New Balance Fresh Foam',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1290.00,
    image: 'https://images.pexels.com/photos/11743259/pexels-photo-11743259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rs6',
    title: 'Saucony Triumph',
    description: 'High-performance running shoes with superior comfort',
    price: 1399.00,
    image: 'https://m.media-amazon.com/images/I/61VRWs6aYJL._AC_SY500_.jpg'
  },
  {
    id: 'rs7',
    title: 'Hoka One One Clifton',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1299.00,
    image: 'https://m.media-amazon.com/images/I/51NMmqg91YL._AC_SX500_.jpg'
  },
  {
    id: 'rs8',
    title: 'Mizuno Wave Rider',
    description: 'Responsive running shoes with a smooth ride',
    price: 1399,
    image: 'https://m.media-amazon.com/images/I/71C7gIU9bbL._AC_SX500_.jpg'
  },
  {
    id: 'rs9',
    title: 'Under Armour HOVR',
    description: 'Innovative running shoes with energy return technology',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/51NLpo6mebL._AC_SY500_.jpg'
  },
  {
    id: 'rs10',
    title: 'Salomon Speedcross 5',
    description: 'Trail running shoes with excellent grip and durability',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/81jMdG98u8L._AC_SY500_.jpg'
  },
  {
    id: 'rs11',
    title: 'Nike ZoomX Vaporfly Next%',
    description: 'High-performance marathon running shoes with carbon plate technology',
    price: 2499,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rs12',
    title: 'Adidas Adizero Adios Pro 3',
    description: 'Elite racing shoes designed for speed and energy return',
    price: 2190,
    image: 'https://m.media-amazon.com/images/I/51Frc7yz1ML._AC_SY500_.jpg'
  },
  {
    id: 'rs13',
    title: 'Brooks Hyperion Elite 3',
    description: 'Lightweight and responsive racing shoes for serious runners',
    price: 1999.99,
    image: 'https://m.media-amazon.com/images/I/51MG44HF+CL._AC_SY500_.jpg'
  },
  {
    id: 'rs14',
    title: 'Saucony Endorphin Speed 3',
    description: 'Speed-focused running shoes with PWRRUN PB cushioning',
    price: 1790.99,
    image: 'https://m.media-amazon.com/images/I/71ZmJebQPxL._AC_SX500_.jpg'
  },
  {
    id: 'rs15',
    title: 'Hoka One One Carbon X 3',
    description: 'Designed for long-distance running with carbon fiber plate',
    price: 1995.00,
    image: 'https://m.media-amazon.com/images/I/61Q7RRj+dRL._AC_SY500_.jpg'
  },
  {
    id: 'rs16',
    title: 'Asics Novablast 3',
    description: 'High-cushioned daily trainers with a bouncy feel',
    price: 1399.00,
    image: 'https://m.media-amazon.com/images/I/71LwkuD8-OL._AC_SX500_.jpg'
  },
  {
    id: 'rs17',
    title: 'New Balance FuelCell Rebel v3',
    description: 'Lightweight and flexible running shoes for speed training',
    price: 1599,
    image: 'https://m.media-amazon.com/images/I/713lb2nvnlL._AC_SX500_.jpg'
  },
  {
    id: 'rs18',
    title: 'Under Armour Flow Velociti Wind 2',
    description: 'Lightweight trainers with Flow cushioning technology',
    price: 1400,
    image: 'https://m.media-amazon.com/images/I/51NLpo6mebL._AC_SY500_.jpg'
  },
  {
    id: 'rs19',
    title: 'Puma Deviate Nitro 2',
    description: 'Versatile performance running shoes with Nitro foam',
    price: 1500.00,
    image: 'https://m.media-amazon.com/images/I/51O55ZRXPXL._AC_SY500_.jpg'
  },
  {
    id: 'rs20',
    title: 'Mizuno Wave Rebellion Pro',
    description: 'Designed for elite runners with extreme energy return',
    price: 2200,
    image: 'https://m.media-amazon.com/images/I/71C7gIU9bbL._AC_SX500_.jpg'
  }
];

const boots = [
  {
    id: 'bt1',
    title: 'Timberland 6-Inch Premium Waterproof Boots',
    description: 'Durable and stylish boots for all-weather conditions',
    price: 5699.99,
    image: 'https://m.media-amazon.com/images/I/71Ww77gmXGL._AC_SY500_.jpg'
  },
  {
    id: 'bt2',
    title: 'Dr. Martens 1460 Smooth Leather Boots',
    description: 'Classic combat boots with a durable construction',
    price: 1000.99,
    image: 'https://m.media-amazon.com/images/I/61gBJFoVfzL._AC_SX500_.jpg'
  },
  {
    id: 'bt3',
    title: 'UGG Classic Short II Boots',
    description: 'Comfortable and warm boots for cold weather',
    price: 1299.99,
    image: 'https://m.media-amazon.com/images/I/718b-5aEyTL._AC_SX500_.jpg'
  },
  {
    id: 'bt4',
    title: 'Sorel Caribou Waterproof Boots',
    description: 'Rugged and insulated boots for extreme conditions',
    price: 1599,
    image: 'https://m.media-amazon.com/images/I/81xL9A8tR0L._AC_SY500_.jpg'
  },
  {
    id: 'bt5',
    title: 'Columbia Newton Ridge Plus II Waterproof Hiking Boots',
    description: 'Durable hiking boots with superior traction',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/61ad61gxW0L._AC_SY535_.jpg'
  },
  {
    id: 'bt6',
    title: 'Blundstone Original 500 Series',
    description: 'Classic Chelsea boots with a rugged design',
    price: 1799,
    image: 'https://m.media-amazon.com/images/I/71VQgUqG+DL._AC_SX500_.jpg'
  },
  {
    id: 'bt7',
    title: 'Red Wing Heritage Iron Ranger',
    description: 'Premium leather boots with a vintage look',
    price: 4000.00,
    image: 'https://m.media-amazon.com/images/I/61G4ycb+AGL._AC_SY500_.jpg'
  },
  {
    id: 'bt8',
    title: 'Ariat Heritage Roper Western Boots',
    description: 'Stylish and comfortable western boots',
    price: 1299,
    image: 'https://m.media-amazon.com/images/I/717NJ8KumhL._AC_SY500_.jpg'
  },
  {
    id: 'bt9',
    title: 'Hunter Original Tall Rain Boots',
    description: 'Iconic rain boots with a waterproof design',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/518FQ9aWqdL._AC_SY500_.jpg'
  },
  {
    id: 'bt10',
    title: 'Frye Harness 12R Boots',
    description: 'Classic harness boots with a rugged style',
    price: 2980,
    image: 'https://m.media-amazon.com/images/I/51Tg8waM7aL._AC_SY500_.jpg'
  },
  {
    id: 'bt11',
    title: 'Merrell Moab 2 Mid Waterproof Hiking Boots',
    description: 'Comfortable and durable hiking boots',
    price: 1290,
    image: 'https://m.media-amazon.com/images/I/815Tjn6vk9L._AC_SX500_.jpg'
  },
  {
    id: 'bt12',
    title: 'Wolverine 1000 Mile Boots',
    description: 'Handcrafted leather boots with a timeless design',
    price: 3400,
    image: 'https://m.media-amazon.com/images/I/515zfih69tS._AC_SY500_.jpg'
  },
  {
    id: 'bt13',
    title: 'Keen Targhee III Waterproof Mid Boots',
    description: 'Versatile and waterproof hiking boots',
    price: 1300,
    image: 'https://m.media-amazon.com/images/I/714uhl2mPsL._AC_SX500_.jpg'
  },
  {
    id: 'bt14',
    title: 'L.L.Bean Bean Boots',
    description: 'Classic duck boots with a waterproof design',
    price: 1100,
    image: 'https://m.media-amazon.com/images/I/61Pcyv5FZTL._AC_SY500_.jpg'
  },
  {
    id: 'bt15',
    title: 'Salomon Quest 4D 3 GTX Hiking Boots',
    description: 'High-performance hiking boots with advanced support',
    price: 2200,
    image: 'https://m.media-amazon.com/images/I/81PLWwT+coL._AC_SY500_.jpg'
  },
  {
    id: 'bt16',
    title: 'Danner Mountain Light Boots',
    description: 'Premium hiking boots with a classic design',
    price: 3700,
    image: 'https://m.media-amazon.com/images/I/61UBKWNaINL._AC_SY500_.jpg'
  },
  {
    id: 'bt17',
    title: 'Timberland PRO Boondock Work Boots',
    description: 'Rugged work boots with superior protection',
    price: 1800.00,
    image: 'https://m.media-amazon.com/images/I/91dBCMJ8t2L._AC_SY500_.jpg'
  },
  {
    id: 'bt18',
    title: 'Skechers Verdict Boots',
    description: 'Comfortable and durable boots for everyday wear',
    price: 7000,
    image: 'https://m.media-amazon.com/images/I/71yDeWkxjeL._AC_SX500_.jpg'
  },
  {
    id: 'bt19',
    title: 'Clarks Desert Boots',
    description: 'Classic desert boots with a timeless style',
    price: 1900,
    image: 'https://m.media-amazon.com/images/I/519YYsni4WS._AC_SY500_.jpg'
  },
  {
    id: 'bt20',
    title: 'Bogs Classic High Waterproof Insulated Boots',
    description: 'Insulated boots for cold and wet conditions',
    price: 1200.00,
    image: 'https://m.media-amazon.com/images/I/81e63BNQNoL._AC_SY695_.jpg'
  }
];

const sandals = [
  {
    id: 'sd1',
    title: 'Birkenstock Arizona',
    description: 'Classic two-strap sandals with a contoured footbed',
    price: 670.99,
    image: 'https://images.pexels.com/photos/112285/pexels-photo-112285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'sd2',
    title: 'Teva Original Universal',
    description: 'Comfortable and durable sandals for outdoor adventures',
    price: 490.99,
    image: 'https://m.media-amazon.com/images/I/71NvGOU0Z6L._AC_SX500_.jpg'
  },
  {
    id: 'sd3',
    title: 'Chaco Z/1 Classic',
    description: 'Adjustable strap sandals with excellent arch support',
    price: 1040,
    image: 'https://m.media-amazon.com/images/I/61OH0UszdML._AC_SY500_.jpg'
  },
  {
    id: 'sd4',
    title: 'Rainbow Sandals Single Layer',
    description: 'Comfortable leather flip-flops with a non-slip sole',
    price: 590,
    image: 'https://m.media-amazon.com/images/I/71qLDIHUsJL._AC_SX500_.jpg'
  },
  {
    id: 'sd5',
    title: 'OluKai Ohana',
    description: 'Water-resistant sandals with a cushioned footbed',
    price: 690,
    image: 'https://m.media-amazon.com/images/I/61DUTFmXtvL._AC_SY500_.jpg'
  },
  {
    id: 'sd6',
    title: 'Reef Fanning',
    description: 'Comfortable flip-flops with a built-in bottle opener',
    price: 540.99,
    image: 'https://m.media-amazon.com/images/I/71G-ZhWnPLL._AC_SY500_.jpg'
  },
  {
    id: 'sd7',
    title: 'KEEN Newport H2',
    description: 'Waterproof sandals with a secure fit and toe protection',
    price: 1090.99,
    image: 'https://m.media-amazon.com/images/I/71iZWH47gJL._AC_SY500_.jpg'
  },
  {
    id: 'sd8',
    title: 'ECCO Yucatan',
    description: 'Comfortable and supportive sandals for long walks',
    price: 1299.99,
    image: 'https://m.media-amazon.com/images/I/61cTaD8nQLL._AC_SX500_.jpg'
  },
  {
    id: 'sd9',
    title: 'Clarks Arla Glison',
    description: 'Lightweight and cushioned sandals for everyday wear',
    price: 666.99,
    image: 'https://m.media-amazon.com/images/I/71Oa1jmasOL._AC_SY500_.jpg'
  },
  {
    id: 'sd10',
    title: 'Vionic Tide II',
    description: 'Orthotic sandals with excellent arch support',
    price: 777.99,
    image: 'https://m.media-amazon.com/images/I/61AsgKk7A5L._AC_SX522_.jpg'
  },
  {
    id: 'sd11',
    title: 'Crocs Classic Clog',
    description: 'Comfortable and lightweight clogs for casual wear',
    price: 400.99,
    image: 'https://m.media-amazon.com/images/I/81NhIkaIE-L._AC_SX500_.jpg'
  },
  {
    id: 'sd12',
    title: 'Skechers Reggae Trailway',
    description: 'Sporty sandals with a cushioned footbed',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/710sX9aTXwL._AC_SX500_.jpg'
  },
  {
    id: 'sd13',
    title: 'Merrell Terran Lattice II',
    description: 'Comfortable and stylish sandals for outdoor activities',
    price: 790,
    image: 'https://m.media-amazon.com/images/I/71SA2RGyGZL._AC_SX500_.jpg'
  },
  {
    id: 'sd14',
    title: 'Sanuk Yoga Sling 2',
    description: 'Soft and flexible sandals with a yoga mat footbed',
    price: 800,
    image: 'https://m.media-amazon.com/images/I/71lbqqAEf3L._AC_SX500_.jpg'
  },
  {
    id: 'sd15',
    title: 'Adidas Adilette Comfort',
    description: 'Comfortable slide sandals with a cushioned footbed',
    price: 500,
    image: 'https://m.media-amazon.com/images/I/61LehY06bEL._AC_SX500_.jpg'
  },
  {
    id: 'sd16',
    title: 'Havaianas Top Flip Flops',
    description: 'Classic and comfortable flip-flops for casual wear',
    price: 199,
    image: 'https://m.media-amazon.com/images/I/61EIzVgVXOL._AC_SY500_.jpg'
  },
  {
    id: 'sd17',
    title: 'Teva Hurricane XLT2',
    description: 'Durable and comfortable sandals for outdoor adventures',
    price: 690.99,
    image: 'https://m.media-amazon.com/images/I/711-2R0DJLL._AC_SX500_.jpg'
  },
  {
    id: 'sd18',
    title: 'Birkenstock Gizeh',
    description: 'Stylish thong sandals with a contoured footbed',
    price: 999.00,
    image: 'https://m.media-amazon.com/images/I/71k5f-kc8SL._AC_SY675_.jpg'
  },
  {
    id: 'sd19',
    title: 'Reef Cushion Breeze',
    description: 'Soft and comfortable flip-flops for everyday wear',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/61pjOf1ixoL._AC_SY500_.jpg'
  },
  {
    id: 'sd20',
    title: 'KEEN Whisper',
    description: 'Lightweight and comfortable sandals for outdoor activities',
    price: 899.99,
    image: 'https://m.media-amazon.com/images/I/71iZWH47gJL._AC_SY500_.jpg'
  }
];

const slippers = [
  {
    id: 'sl1',
    title: 'UGG Scuffette II',
    description: 'Cozy and warm slippers with a sheepskin lining',
    price: 899.99,
    image: 'https://m.media-amazon.com/images/I/716tm9x1efL._AC_SY500_.jpg'
  },
  {
    id: 'sl2',
    title: 'Sorel Nakiska Slipper',
    description: 'Comfortable slippers with a wool blend lining',
    price: 6000.99,
    image: 'https://m.media-amazon.com/images/I/81RHg+NOzSL._AC_SY500_.jpg'
  },
  {
    id: 'sl3',
    title: 'Acorn Moc Slippers',
    description: 'Soft and warm slippers with a memory foam insole',
    price: 4000.99,
    image: 'https://m.media-amazon.com/images/I/61vku+FgaKL._AC_SY675_.jpg'
  },
  {
    id: 'sl4',
    title: 'Minnetonka Cally Slipper',
    description: 'Classic moccasin slippers with a cozy lining',
    price: 5400,
    image: 'https://m.media-amazon.com/images/I/71WMH6SOIRL._AC_SY500_.jpg'
  },
  {
    id: 'sl5',
    title: 'Dearfoams Fireside Sydney',
    description: 'Shearling slippers with a durable outsole',
    price: 3500,
    image: 'https://m.media-amazon.com/images/I/61BXlM9oJDL._AC_SY500_.jpg'
  },
  {
    id: 'sl6',
    title: 'Haflinger AS Classic Slipper',
    description: 'Wool slippers with a supportive footbed',
    price: 1999.55,
    image: 'https://m.media-amazon.com/images/I/51iUpaz7xrL._AC_SY500_.jpg'
  },
  {
    id: 'sl7',
    title: 'Glerups Wool Slippers',
    description: 'Comfortable wool slippers with a leather sole',
    price: 1190,
    image: 'https://m.media-amazon.com/images/I/61ZUD3aZS4L._AC_SY500_.jpg'
  },
  {
    id: 'sl8',
    title: 'L.L.Bean Wicked Good Moccasins',
    description: 'Shearling-lined moccasin slippers for ultimate comfort',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/81XXV0t9rsL._AC_SY500_.jpg'
  },
  {
    id: 'sl9',
    title: 'Isotoner Microterry Clog Slippers',
    description: 'Soft and cushioned slippers with a memory foam insole',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/71UfgU1wnHS._AC_SY500_.jpg'
  },
  {
    id: 'sl10',
    title: 'RockDove Two-Tone Memory Foam Slippers',
    description: 'Comfortable and stylish slippers with a memory foam insole',
    price: 2400.00,
    image: 'https://m.media-amazon.com/images/I/71aCdbd8q5L._AC_SY500_.jpg'
  },
  {
    id: 'sl11',
    title: 'Vionic Gemma Mule Slippers',
    description: 'Orthotic slippers with excellent arch support',
    price: 698.99,
    image: 'https://m.media-amazon.com/images/I/71R+5wQTW9L._AC_SY500_.jpg'
  },
  {
    id: 'sl12',
    title: 'Tempur-Pedic Men’s Slippers',
    description: 'Memory foam slippers with a durable outsole',
    price: 1400,
    image: 'https://m.media-amazon.com/images/I/51SEIeNES7L._AC_SY500_.jpg'
  },
  {
    id: 'sl13',
    title: 'UGG Ascot Slipper',
    description: 'Luxurious suede slippers with a sheepskin lining',
    price: 1090.99,
    image: 'https://m.media-amazon.com/images/I/81EqkuuvokL._AC_SY500_.jpg'
  },
  {
    id: 'sl14',
    title: 'Skechers BOBS Keepsakes Ice Angel Slipper',
    description: 'Warm and cozy slippers with a faux fur lining',
    price: 400,
    image: 'https://m.media-amazon.com/images/I/81hgqX0Be1L._AC_SX500_.jpg'
  },
  {
    id: 'sl15',
    title: 'Lands’ End Suede Moc Slippers',
    description: 'Classic moccasin slippers with a soft lining',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/618KJGPMg0L._AC_SY500_.jpg'
  },
  {
    id: 'sl16',
    title: 'Bearpaw Loki II Slipper',
    description: 'Sheepskin slippers with a cushioned footbed',
    price: 590,
    image: 'https://m.media-amazon.com/images/I/71BeZCCf1XL._AC_SY500_.jpg'
  },
  {
    id: 'sl17',
    title: 'Acorn Spa Wrap Slipper',
    description: 'Soft and adjustable slippers with a memory foam insole',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/71Yp1C3NjeL._AC_SY500_.jpg'
  },
  {
    id: 'sl18',
    title: 'UGG Coquette Slipper',
    description: 'Cozy and warm slippers with a sheepskin lining',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/61daCfExwKL._AC_SY500_.jpg'
  },
  {
    id: 'sl19',
    title: 'Dearfoams Rebecca Microfiber Velour Slipper',
    description: 'Soft and cushioned slippers with a memory foam insole',
    price: 600,
    image: 'https://m.media-amazon.com/images/I/81pweFfHc7L._AC_SX500_.jpg'
  },
  {
    id: 'sl20',
    title: 'Haflinger AT Wool Slippers',
    description: 'Comfortable wool slippers with a supportive footbed',
    price: 700,
    image: 'https://m.media-amazon.com/images/I/81vtc4baVIL._AC_SX522_.jpg'
  }
];

const formalShoes = [
  {
    id: 'fs1',
    title: 'Allen Edmonds Park Avenue',
    description: 'Classic cap-toe oxford with premium leather',
    price: 3950,
    image: 'https://m.media-amazon.com/images/I/61PBBCkhnzL._AC_SY500_.jpg'
  },
  {
    id: 'fs2',
    title: 'Johnston & Murphy Melton',
    description: 'Elegant cap-toe oxford with a sleek design',
    price: 2700.00,
    image: 'https://m.media-amazon.com/images/I/61Mz9GKSEjL._AC_SX500_.jpg'
  },
  {
    id: 'fs3',
    title: 'Cole Haan Original Grand',
    description: 'Comfortable and stylish wingtip oxford',
    price: 1500.66,
    image: 'https://m.media-amazon.com/images/I/711x0rt1tZL._AC_SY500_.jpg'
  },
  {
    id: 'fs4',
    title: 'Magnanni Santiago',
    description: 'Handcrafted double monk strap with a modern look',
    price: 3250.00,
    image: 'https://m.media-amazon.com/images/I/61SOYxP+jdL._AC_SY500_.jpg'
  },
  {
    id: 'fs5',
    title: 'Florsheim Kenmoor',
    description: 'Classic wingtip oxford with brogue detailing',
    price: 2000.50,
    image: 'https://m.media-amazon.com/images/I/81uqVH3VtPL._AC_SX500_.jpg'
  },
  {
    id: 'fs6',
    title: 'Stacy Adams Dickinson',
    description: 'Elegant cap-toe oxford with a polished finish',
    price: 8500.00,
    image: 'https://m.media-amazon.com/images/I/81osCUGO2cL._AC_SX500_.jpg'
  },
  {
    id: 'fs7',
    title: 'Bruno Magli Maioco',
    description: 'Luxurious leather oxford with a sleek design',
    price: 4500.00,
    image: 'https://m.media-amazon.com/images/I/610bI5AfQ5L._AC_SY500_.jpg'
  },
  {
    id: 'fs8',
    title: 'To Boot New York Felix',
    description: 'Modern and stylish loafer with a comfortable fit',
    price: 3000.90,
    image: 'https://m.media-amazon.com/images/I/71gJaFbYx3S._AC_SY500_.jpg'
  },
  {
    id: 'fs9',
    title: 'Santoni Carter',
    description: 'Handcrafted leather oxford with a classic design',
    price: 4950,
    image: 'https://m.media-amazon.com/images/I/81g4dLbLIBL._AC_SX500_.jpg'
  },
  {
    id: 'fs10',
    title: 'Mezlan Torino',
    description: 'Elegant monk strap with a modern look',
    price: 3700.00,
    image: 'https://m.media-amazon.com/images/I/713bhZ8KCzL._AC_SX500_.jpg'
  },
  {
    id: 'fs11',
    title: 'Salvatore Ferragamo Cap-Toe Oxford',
    description: 'Luxurious leather oxford with a sleek design',
    price: 6950.00,
    image: 'https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'fs12',
    title: 'Gucci Horsebit Loafer',
    description: 'Iconic loafer with a classic design',
    price: 7300.00,
    image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'fs13',
    title: 'Church\'s Shannon',
    description: 'Handcrafted leather derby with a timeless look',
    price: 6500.00,
    image: 'https://m.media-amazon.com/images/I/51NhLHEbW-L._AC_SY500_.jpg'
  },
  {
    id: 'fs14',
    title: 'Bally Straton',
    description: 'Elegant leather oxford with a modern design',
    price: 4950.00,
    image: 'https://m.media-amazon.com/images/I/61MkJMKrLnL._AC_SY695_.jpg'
  },
  {
    id: 'fs15',
    title: 'Hugo Boss Kensington',
    description: 'Stylish and comfortable leather oxford',
    price: 2950.00,
    image: 'https://m.media-amazon.com/images/I/61a007G-bTL._AC_SX500_.jpg'
  },
  {
    id: 'fs16',
    title: 'Ted Baker Camroon',
    description: 'Modern and stylish leather oxford',
    price: 1950.66,
    image: 'https://m.media-amazon.com/images/I/5185E89kYuL._AC_SY500_.jpg'
  },
  {
    id: 'fs17',
    title: 'Paul Smith Berty',
    description: 'Elegant leather oxford with a sleek design',
    price: 3950,
    image: 'https://m.media-amazon.com/images/I/71UXzp8bnzL._AC_SY500_.jpg'
  },
  {
    id: 'fs18',
    title: 'Tom Ford Austin',
    description: 'Luxurious leather oxford with a modern look',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/81V9sQh9zWL._AC_SX500_.jpg'
  },
  {
    id: 'fs19',
    title: 'Prada Cap-Toe Oxford',
    description: 'Elegant leather oxford with a classic design',
    price: 2300,
    image: 'https://m.media-amazon.com/images/I/618OKBz5ZoL._AC_SX500_.jpg'
  },
  {
    id: 'fs20',
    title: 'Versace Medusa Loafer',
    description: 'Iconic loafer with a luxurious design',
    price: 8950,
    image: 'https://images.pexels.com/photos/29868311/pexels-photo-29868311/free-photo-of-blue-loafer-with-orange-laces-on-reflective-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const sportsShoes = [
  {
    id: 'ss1',
    title: 'Nike Air Zoom Pegasus',
    description: 'High-performance running shoes with responsive cushioning',
    price: 1190,
    image: 'https://m.media-amazon.com/images/I/715CB+-nHZL._AC_SY500_.jpg'
  },
  {
    id: 'ss2',
    title: 'Adidas Ultraboost',
    description: 'Comfortable and stylish running shoes with superior cushioning',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/71ljZ6ZzfxL._AC_SX500_.jpg'
  },
  {
    id: 'ss3',
    title: 'Asics Gel-Nimbus',
    description: 'Premium running shoes with advanced support and cushioning',
    price: 1490.99,
    image: 'https://m.media-amazon.com/images/I/81ddYKf0i+L._AC_SY500_.jpg'
  },
  {
    id: 'ss4',
    title: 'Brooks Ghost',
    description: 'Cushioned running shoes for a smooth ride',
    price: 1399.99,
    image: 'https://m.media-amazon.com/images/I/71PEqzpHuiL._AC_SY500_.jpg'
  },
  {
    id: 'ss5',
    title: 'New Balance Fresh Foam',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1290.89,
    image: 'https://m.media-amazon.com/images/I/71LskQt7fcS._AC_SY500_.jpg'
  },
  {
    id: 'ss6',
    title: 'Saucony Triumph',
    description: 'High-performance running shoes with superior comfort',
    price: 1300,
    image: 'https://m.media-amazon.com/images/I/81z8jUEyxzL._AC_SX500_.jpg'
  },
  {
    id: 'ss7',
    title: 'Hoka One One Clifton',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1260.90,
    image: 'https://m.media-amazon.com/images/I/611FNCoJBkL._AC_SX500_.jpg'
  },
  {
    id: 'ss8',
    title: 'Mizuno Wave Rider',
    description: 'Responsive running shoes with a smooth ride',
    price: 1377.00,
    image: 'https://m.media-amazon.com/images/I/51U8aiiciAL._AC_SX500_.jpg'
  },
  {
    id: 'ss9',
    title: 'Under Armour HOVR',
    description: 'Innovative running shoes with energy return technology',
    price: 1700.99,
    image: 'https://m.media-amazon.com/images/I/51NLpo6mebL._AC_SY500_.jpg'
  },
  {
    id: 'ss10',
    title: 'Salomon Speedcross 5',
    description: 'Trail running shoes with excellent grip and durability',
    price: 1490.99,
    image: 'https://m.media-amazon.com/images/I/51BJqVzfXEL._AC_SY500_.jpg'
  },
  {
    id: 'ss11',
    title: 'Puma Ignite',
    description: 'Comfortable and stylish running shoes with superior cushioning',
    price: 1900.99,
    image: 'https://m.media-amazon.com/images/I/71F5Jdi76GL._AC_SX500_.jpg'
  },
  {
    id: 'ss12',
    title: 'Reebok Floatride',
    description: 'Lightweight running shoes with responsive cushioning',
    price: 1300,
    image: 'https://m.media-amazon.com/images/I/71GEeN660+L._AC_SY500_.jpg'
  },
  {
    id: 'ss13',
    title: 'Nike Metcon',
    description: 'High-performance training shoes with superior stability',
    price: 1280,
    image: 'https://m.media-amazon.com/images/I/61x5TyxcEML._AC_SY500_.jpg'
  },
  {
    id: 'ss14',
    title: 'Adidas Adizero',
    description: 'Lightweight running shoes with maximum speed',
    price: 1400,
    image: 'https://m.media-amazon.com/images/I/71e0LcRgvKL._AC_SX500_.jpg'
  },
  {
    id: 'ss15',
    title: 'Asics Gel-Kayano',
    description: 'Stability running shoes with advanced support',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/61BSnL7TQWL._AC_SY500_.jpg'
  },
  {
    id: 'ss16',
    title: 'Brooks Adrenaline',
    description: 'Cushioned running shoes with superior stability',
    price: 1290,
    image: 'https://m.media-amazon.com/images/I/8137IeVv7oL._AC_SX500_.jpg'
  },
  {
    id: 'ss17',
    title: 'New Balance 1080',
    description: 'Lightweight running shoes with maximum cushioning',
    price: 1490,
    image: 'https://m.media-amazon.com/images/I/81QpazsoxLL._AC_SY500_.jpg'
  },
  {
    id: 'ss18',
    title: 'Saucony Kinvara',
    description: 'Lightweight running shoes with a responsive ride',
    price: 1100,
    image: 'https://m.media-amazon.com/images/I/81kItCdZzpL._AC_SX500_.jpg'
  },
  {
    id: 'ss19',
    title: 'Hoka One One Bondi',
    description: 'Maximum cushioning running shoes for a smooth ride',
    price: 1400,
    image: 'https://m.media-amazon.com/images/I/51Gq5BEyaRL._AC_SX500_.jpg'
  },
  {
    id: 'ss20',
    title: 'Mizuno Wave Inspire',
    description: 'Stability running shoes with a smooth ride',
    price: 1300,
    image: 'https://m.media-amazon.com/images/I/61tB94EW9sL._AC_SX500_.jpg'
  }
];

const customShoes = [
  {
    id: 'cs1',
    title: 'Custom Nike Air Force 1',
    description: 'Personalized Nike Air Force 1 with unique designs',
    price: 1999,
    image: 'https://m.media-amazon.com/images/I/61CvkMbMvUL._AC_SX500_.jpg'
  },
  {
    id: 'cs2',
    title: 'Custom Adidas Superstar',
    description: 'Personalized Adidas Superstar with custom colors',
    price: 1690.90,
    image: 'https://m.media-amazon.com/images/I/51i7PijBpsL._AC_SY500_.jpg'
  },
  {
    id: 'cs3',
    title: 'Custom Converse Chuck Taylor',
    description: 'Personalized Converse Chuck Taylor with unique patterns',
    price: 1490,
    image: 'https://m.media-amazon.com/images/I/71PZufzlWUL._AC_SY500_.jpg'
  },
  {
    id: 'cs4',
    title: 'Custom Vans Old Skool',
    description: 'Personalized Vans Old Skool with custom designs',
    price: 1390,
    image: 'https://m.media-amazon.com/images/I/71qOGzXG4ZL._AC_SY500_.jpg'
  },
  {
    id: 'cs5',
    title: 'Custom Samba shoes',
    description: 'Personalized Samba Suede with unique colorways',
    price: 1590,
    image: 'https://m.media-amazon.com/images/I/51zl3wjdxXL._AC_SY500_.jpg'
  },
  {
    id: 'cs6',
    title: 'Reebok Classic',
    description: 'Personalized Reebok Classic with custom graphics',
    price: 1499.60,
    image: 'https://m.media-amazon.com/images/I/71pgtafNCYL._AC_SX500_.jpg'
  },
  {
    id: 'cs7',
    title: 'New Balance 574',
    description: 'Personalized New Balance 574 with unique designs',
    price: 1699.90,
    image: 'https://m.media-amazon.com/images/I/61ppi6+55HL._AC_SY500_.jpg'
  },
  {
    id: 'cs8',
    title: 'Custom Asics Gel-Lyte',
    description: 'Personalized Asics Gel-Lyte with custom colors',
    price: 1590.99,
    image: 'https://m.media-amazon.com/images/I/61xtNlSGBTL._AC_SY500_.jpg'
  },
  {
    id: 'cs9',
    title: 'Custom Under Armour HOVR',
    description: 'Personalized Under Armour HOVR with unique patterns',
    price: 1790.99,
    image: 'https://m.media-amazon.com/images/I/71px1HywCML._AC_SY500_.jpg'
  },
  {
    id: 'cs10',
    title: 'Loafers',
    description: 'Personalized Loafers',
    price: 1300.99,
    image: 'https://m.media-amazon.com/images/I/91Lh38a3zVL._AC_SX500_.jpg'
  },
  {
    id: 'cs11',
    title: 'Custom Nike Blazer',
    description: 'Nike Blazer with custom designs',
    price: 1460.00,
    image: 'https://m.media-amazon.com/images/I/71-jPCZa7yL._AC_SY500_.jpg'
  },
  {
    id: 'cs12',
    title: 'Custom Salomon Speedcross',
    description: 'Personalized Salomon Speedcross with unique colorways',
    price: 1250,
    image: 'https://m.media-amazon.com/images/I/712NXPEhJnL._AC_SX500_.jpg'
  },
  {
    id: 'cs13',
    title: 'Custom Merrell Moab',
    description: 'Personalized Merrell Moab with custom graphics',
    price: 1700,
    image: 'https://m.media-amazon.com/images/I/71+bYd627OL._AC_SX500_.jpg'
  },
  {
    id: 'cs14',
    title: 'Custom On Cloud',
    description: 'Personalized On Cloud with unique designs',
    price: 2200,
    image: 'https://m.media-amazon.com/images/I/71-WU2V8NiL._AC_SY500_.jpg'
  },
  {
    id: 'cs15',
    title: 'Custom Balenciaga Triple S',
    description: 'Personalized Balenciaga Triple S with custom textures',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/51Rf5OR8FXL._AC_SY575_.jpg'
  },
  {
    id: 'cs16',
    title: 'Custom Yeezy Boost 350',
    description: 'Personalized Yeezy Boost 350 with unique patterns',
    price: 1000,
    image: 'https://m.media-amazon.com/images/I/516PaKynEWL._AC_SY500_.jpg'
  },
  {
    id: 'cs17',
    title: 'Custom Gucci Ace Sneakers',
    description: 'Personalized Gucci Ace Sneakers with embroidered designs',
    price: 4060,
    image: 'https://m.media-amazon.com/images/I/61yLuuHGJpL._AC_SX500_.jpg'
  },
  {
    id: 'cs18',
    title: 'Custom Off-White x Nike',
    description: 'Personalized Off-White x Nike with custom deconstruction',
    price: 3400,
    image: 'https://m.media-amazon.com/images/I/61xb0id8vEL._AC_SY500_.jpg'
  },
  {
    id: 'cs19',
    title: 'Custom Vans Slip-On',
    description: 'Personalized Vans Slip-On with unique patterns',
    price: 1300,
    image: 'https://m.media-amazon.com/images/I/51epcuSkaQL._AC_SX500_.jpg'
  },
  {
    id: 'cs20',
    title: 'Custom Prada Cloudbust Thunder',
    description: 'Personalized Prada Cloudbust Thunder with futuristic design',
    price: 4990,
    image: 'https://m.media-amazon.com/images/I/61aofYn-XAL._AC_SY500_.jpg'
  }
];

function ServiceDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Function to get the service items based on the service ID
  const getServiceItems = (serviceId) => {
    switch (serviceId) {
      case '1': return mensShoes;
      case '2': return womensHeels;
      case '3': return kidsShoes;
      case '4': return runningShoes;
      case '5': return boots;
      case '6': return sandals;
      case '7': return slippers;
      case '8': return formalShoes;
      case '9': return sportsShoes;
      case '10': return customShoes;
      default: return [];
    }
  };

  const serviceItems = getServiceItems(id);

  // Function to handle adding an item to the cart with selected size, color, and rating
  const handleAddToCart = (item, selectedSize, selectedColor, rating) => {
    const itemWithDetails = {
      ...item,
      size: selectedSize,
      color: selectedColor,
      rating: rating,
    };
    addToCart(itemWithDetails);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Available Products</h1>
        <img
          src="https://i.postimg.cc/pLhvc3cR/saf.jpg"
          alt="Promotional Banner"
          className="w-full h-8 object-fit mb-8"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => {
            const [selectedSize, setSelectedSize] = useState('');
            const [selectedColor, setSelectedColor] = useState('');
            const [rating, setRating] = useState(0);

            const ratingChanged = (newRating) => {
              setRating(newRating);
            };

            return (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
                <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                  {/* Size Selection */}
                  <div className="mb-2">
                    <label htmlFor={`size-${item.id}`} className="block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <select
                      id={`size-${item.id}`}
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
                    <label htmlFor={`color-${item.id}`} className="block text-sm font-medium text-gray-700">
                      Color
                    </label>
                    <select
                      id={`color-${item.id}`}
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select color</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
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
                    <span className="text-blue-600 font-bold text-lg">KSH {item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item, selectedSize, selectedColor, rating)}
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

export default ServiceDetails;