import { useState } from 'react';
import './Productscards.css';

function Productscards() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "Organic Wheat",
      category: "grains",
      price: "₹120/kg",
      image: "🌾",
      description: "100% organic wheat grains, rich in fiber",
      rating: 4.8
    },
    {
      id: 2,
      name: "Fresh Milk",
      category: "dairy",
      price: "₹60/liter",
      image: "🥛",
      description: "Fresh dairy milk from grass-fed cows",
      rating: 4.9
    },
    {
      id: 3,
      name: "Basmati Rice",
      category: "grains",
      price: "₹150/kg",
      image: "🍚",
      description: "Premium quality basmati rice",
      rating: 4.7
    },
    {
      id: 4,
      name: "Almonds",
      category: "dryfruits",
      price: "₹800/kg",
      image: "🌰",
      description: "California almonds, rich in nutrients",
      rating: 4.6
    },
    {
      id: 5,
      name: "Organic Ghee",
      category: "dairy",
      price: "₹600/kg",
      image: "🫕",
      description: "Pure desi ghee from cow milk",
      rating: 4.9
    },
    {
      id: 6,
      name: "Mixed Masala",
      category: "spices",
      price: "₹250/pack",
      image: "🧂",
      description: "Freshly ground spices mixture",
      rating: 4.5
    },
    {
      id: 7,
      name: "Cold Pressed Oil",
      category: "oil",
      price: "₹300/liter",
      image: "🫒",
      description: "Organic cold pressed coconut oil",
      rating: 4.7
    },
    {
      id: 8,
      name: "Fresh Curd",
      category: "dairy",
      price: "₹80/kg",
      image: "🍶",
      description: "Homemade fresh curd",
      rating: 4.8
    },
    {
      id: 9,
      name: "Organic Seeds",
      category: "seeds",
      price: "₹200/pack",
      image: "🌱",
      description: "Assorted organic farming seeds",
      rating: 4.4
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'grains', name: 'Grains' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'dryfruits', name: 'Dry Fruits' },
    { id: 'spices', name: 'Spices' },
    { id: 'oil', name: 'Oil' },
    { id: 'seeds', name: 'Seeds' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="section-title">Our Farm Products</h1>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.image}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  {'⭐'.repeat(Math.floor(product.rating))}
                  <span>({product.rating})</span>
                </div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-btn">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productscards;