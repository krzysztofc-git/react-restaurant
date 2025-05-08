/* global fetchAPI submitAPI */
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useReducer } from "react";

function updateTimes(state, action) {
  switch(action.type) {
    case 'removeTime':
      return state.filter(time => time !== action.timeToRemove);
    default:
      return state;
  }
}

function initializeTimes() {
  return fetchAPI(new Date());
}

function submitForm(formData, navigate) {
  if (submitAPI(formData)) {
    navigate('/confirmed-booking');
  }
}

function Main() {
  const [availableTimes, reduceAvailableTimes] = useReducer(updateTimes, initializeTimes());

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} reduceAvailableTimes={reduceAvailableTimes} submitForm={submitForm} />}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export { initializeTimes, updateTimes };
export default Main;