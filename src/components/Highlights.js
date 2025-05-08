import './Highlights.css';
import dishA from '../images/dishA.png';
import dishB from '../images/dishB.png';
import dishC from '../images/dishC.png';
import { Link } from 'react-router';

function Highlights() {
  function Card(props) {
    return (
      <div className="card">
        <img src={props.image} alt={props.title}/>
        <span className="card-header">
          <h3>{props.title}</h3>
          <strong>{props.price}</strong>
        </span>
        <p>{props.description}</p>
        <Link to="/">Order a delivery 🚴</Link>
      </div>
    )
  }

  return (
    <section id="highlights">
      <span id="highlights-header">
        <h2>Highlights</h2>
        <button>Check Menu</button>
      </span>
      <div id="cards">
        <Card
          image={dishA}
          title="Dish 1"
          price="$10.99"
          description="Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1. Dish 1."
        />
        <Card
          image={dishB}
          title="Dish 2"
          price="$4.99"
          description="Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2. Dish 2."
        />
        <Card
          image={dishC}
          title="Dish 3"
          price="$7.99"
          description="Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3. Dish 3."
        />
      </div>
    </section>
  );
}

export default Highlights;