import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About FarmFresh</h1>
          <p>Connecting Farmers Directly with Consumers</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              FarmFresh was born from a simple idea: to create a direct connection between 
              local farmers and health-conscious consumers. We believe everyone deserves 
              access to fresh, organic, and sustainably grown products.
            </p>
            <p>
              Founded in 2020, we've grown from a small local initiative to a trusted 
              platform serving thousands of customers across the region. Our commitment 
              to quality and sustainability remains unchanged.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Happy Farmers</p>
            </div>
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Organic Products</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Quality Guarantee</p>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h3>🌱 Our Mission</h3>
              <p>To make organic farming sustainable and accessible to everyone while supporting local farming communities.</p>
            </div>
            <div className="vision">
              <h3>👁️ Our Vision</h3>
              <p>A world where fresh, organic produce is available to every household, fostering healthier communities and a sustainable planet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;