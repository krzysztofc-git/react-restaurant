import './BookingForm.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

function BookingForm(props) {
  const [step, setStep] = useState(1);
  const info = ["Please input details related to the table reservation.", "Now input contact details."];
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const availableTimes = props.availableTimes;
  const reduceAvailableTimes = props.reduceAvailableTimes;
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  const dateRef = useRef(null), guestsRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let isDateValid;
    if (dateRef.current) {
      isDateValid = dateRef.current.checkValidity();
    } else {
      isDateValid = false;
    }
    let isGuestsValid;
    if (guestsRef.current) {
      isGuestsValid = guestsRef.current.checkValidity();
    } else {
      isGuestsValid = false;
    }
    setIsFormValid(isDateValid && isGuestsValid);
  }, [resDate, guests]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(step !== 2) {
      setStep(step + 1);
    } else {
      reduceAvailableTimes({ type: 'removeTime', timeToRemove: resTime });
      props.submitForm({ resDate, resTime, guests, occasion }, navigate);
    }
  }

  return (
    <section id="booking-section">
      <section id="booking-info">
        <span id="booking-text">
          <h1>Reserve a table</h1>
          <h2>Step {step} of 2</h2>
          <p>{info[step-1]}</p>
        </span>
      </section>
      <section id="booking">
        <form id="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={resDate} required ref={dateRef} onChange={(e) => setResDate(e.target.value)} />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} ref={guestsRef} onChange={(e) => setGuests(e.target.value)} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="On Click" />
        </form>
      </section>
    </section>
  );
}

export default BookingForm;