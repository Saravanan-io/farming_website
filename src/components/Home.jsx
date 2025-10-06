import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to FarmFresh</h1>
          <p>Fresh, Organic, and Sustainable Farming Products Delivered to Your Doorstep</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card1">🌱 Organic</div>
          <div className="floating-card card2">🚜 Sustainable</div>
          <div className="floating-card card3">💚 Fresh</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose FarmFresh?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>100% Organic</h3>
              <p>Chemical-free farming practices for healthier products</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Fresh products delivered within 24 hours</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Direct from farm to your table, no middlemen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Support Farmers</h3>
              <p>Your purchase directly supports local farming communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Freshness?</h2>
          <p>Join our community of health-conscious customers</p>
          <Link to="/join" className="btn btn-large">Join Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;