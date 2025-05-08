import './HeroSection.css';
import restaurant from '../images/restaurant.png';
import { Link } from 'react-router';

function HeroSection() {
  return (
    <section id="hero">
        <span id="hero-text">
            <h1>Restaurant</h1>
            <h2>Location</h2>
            <p>Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant.</p>
            <Link to="/booking">
              <button>Reserve Now</button>
            </Link>
        </span>
        <img src={restaurant} alt="Restaurant"/>
    </section>
  );
}

export default HeroSection;