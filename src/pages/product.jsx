import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styling/product.css';

// Register the components needed for the Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductPage = () => {
  // Sample data for items
  const items = [
    {
      id: 1,
      name: '    Mushrooms',
      description: 'Rich in flavor and nutrients.',
      image: 'https://media.istockphoto.com/id/157444120/photo/close-up-of-white-colored-oyster-mushroom.jpg?s=612x612&w=0&k=20&c=X2QgogPDfoxc9vUh5jJGtIWKE1OUQhje1oIHjO9OTzs=',
      price: '$15.99',
    },
    {
      id: 2,
      name: 'Fresh Snails',
      description: 'A gourmet delight for your table.',
      image: 'https://media.istockphoto.com/id/1569807729/photo/a-snails-journey-in-the-garden.jpg?s=612x612&w=0&k=20&c=b6cbVTsuvA73yr3xo_6Ypu1rfFIZIbe8SvMFf8ZPmV8=',
      price: '$24.99',
    },
    {
      id: 3,
      name: 'Snail slime',
      description: 'Has a number of health benefits.',
      image: '/assets/slime.webp',
      price: '$12.99',
    },
    {
      id: 4,
      name: 'Tallow',
      description: 'Hearty and satisfying.',
      image: '/assets/Tallow.webp',
      price: '$18.99',
    },
    {
      id: 5,
      name: 'Escargot',
      description: 'Exquisite and tender.',
      image: '/assets/escaragot.webp',
      price: '$29.99',
    },
    {
      id: 6,
      name: 'Dried Mushrooms',
      description: 'Earthy and aromatic.',
      image: 'https://media.istockphoto.com/id/1082526308/photo/close-up-of-dry-mushrooms-in-jar.jpg?s=612x612&w=0&k=20&c=z2fVV74-24EdSg_8u_Qt0Jezu__PtK2KQ8k_oIkzH58=',
      price: '$34.99',
    },
  ];

  // Data for the graph
  const data = {
    labels: items.map(item => item.name),
    datasets: [
      {
        label: 'Item Popularity',
        data: [95, 80, 85, 70, 65, 90], // Sample popularity data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="item-page">
        <header className="communities-header">
        <h1>Our Products</h1>
        <p>At Eco Eats, we offer a diverse range of high-quality products. Each product is sourced with care and commitment to sustainability, ensuring that you receive only the best nature has to offer. Explore our selection to discover the unique flavors and benefits of our eco-friendly offerings.</p>
      </header>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            
          </div>
        ))}
      </div>

      <section className="item-graph">
        <h2>Item Popularity</h2>
        <Bar data={data} />
      </section>
    </div>
  );
};

export default ProductPage;
