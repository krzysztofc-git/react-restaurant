import './About.css';
import personA from '../images/personA.png';
import personB from '../images/personB.png';

function About() {
  return (
    <section id="about">
        <span id="about-text">
            <h2>Restaurant</h2>
            <h3>Location</h3>
            <p>Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant. Restaurant.</p>
        </span>
        <span id="about-photos">
            <img src={personA} alt="Person 1"/>
            <img src={personB} alt="Person 2"/>
        </span>
    </section>
  );
}

export default About;