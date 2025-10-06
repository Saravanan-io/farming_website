import { useState } from 'react';
import './Joinus.css';

function Joinus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'customer',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'customer',
      message: ''
    });
  };

  return (
    <div className="join-page">
      <div className="container">
        <div className="join-hero">
          <h1>Join Our Farming Community</h1>
          <p>Be part of something bigger. Whether you're a farmer or a customer, we have a place for you.</p>
        </div>

        <div className="join-content">
          <div className="join-options">
            <div className="option-card">
              <div className="option-icon">👨‍🌾</div>
              <h3>For Farmers</h3>
              <ul>
                <li>✓ Get fair prices for your products</li>
                <li>✓ Reach more customers</li>
                <li>✓ Technical support & training</li>
                <li>✓ Sustainable farming practices</li>
              </ul>
            </div>
            
            <div className="option-card">
              <div className="option-icon">👥</div>
              <h3>For Customers</h3>
              <ul>
                <li>✓ Fresh organic products</li>
                <li>✓ Direct from farm to table</li>
                <li>✓ Support local farmers</li>
                <li>✓ Healthier lifestyle</li>
              </ul>
            </div>
          </div>

          <form className="join-form" onSubmit={handleSubmit}>
            <h2>Get Started Today</h2>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>I want to join as:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="customer">Customer</option>
                <option value="farmer">Farmer</option>
                <option value="distributor">Distributor</option>
                <option value="volunteer">Volunteer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interests..."
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-large">
              Join Now 🌟
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Joinus;