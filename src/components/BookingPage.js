import BookingForm from './BookingForm';

function BookingPage(props) {
  return (
    <main>
      <BookingForm availableTimes={props.availableTimes} reduceAvailableTimes={props.reduceAvailableTimes} submitForm={props.submitForm} />
    </main>
  );
}

export default BookingPage;