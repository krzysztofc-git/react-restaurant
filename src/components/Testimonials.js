import './Testimonials.css';
import profileIconA from '../images/profile-iconA.png';
import profileIconB from '../images/profile-iconB.png';

function Testimonials() {
  function RatingCard(props) {
    return (
      <div className="rating-card">
        <p className="rating">{"★".repeat(props.rating)}</p>
        <span>
          <img src={props.photo} alt={props.name}/>
          <h3>{props.name}</h3>
        </span>
        <p>{props.review}</p>
      </div>
    )
  }

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div id="rating-cards">
        <RatingCard rating="5" name="John" photo={profileIconB} review="I love it."/>
        <RatingCard rating="4" name="Amy" photo={profileIconA} review="The best in town and is still improving."/>
        <RatingCard rating="5" name="Tom" photo={profileIconB} review="I visit them every day."/>
        <RatingCard rating="5" name="Ron" photo={profileIconB} review="Nice restaurant."/>
      </div>
    </section>
  );
}

export default Testimonials;