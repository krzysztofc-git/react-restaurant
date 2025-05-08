import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

const mockUseNavigate = jest.fn();
jest.mock('react-router', () => ({
  useNavigate: () => mockUseNavigate
}));

test('Renders the BookingForm heading', () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const mockReduceAvailableTimes = jest.fn();
  render(<BookingForm availableTimes={mockAvailableTimes} reduceAvailableTimes={mockReduceAvailableTimes} />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test('Submit button disabled when date is empty', () => {
  render(<BookingForm availableTimes={["17:00"]} reduceAvailableTimes={() => { }} submitForm={() => { }} />);
  const btn = screen.getByRole("button", { value: /Make Your reservation/i });
  expect(btn).toBeDisabled();
});

test('Submit button disabled when guests are less than 1', () => {
  render(<BookingForm availableTimes={["17:00"]} reduceAvailableTimes={() => { }} submitForm={() => { }} />);
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2020-02-20" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "0" } });
  const btn = screen.getByRole("button", { value: /Make Your reservation/i });
  expect(btn).toBeDisabled();
});

test('Submit button enabled when valid date and guests between 1 and 10', () => {
  render(<BookingForm availableTimes={["17:00"]} reduceAvailableTimes={() => { }} submitForm={() => { }} />);
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2020-02-20" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "5" } });
  const btn = screen.getByRole("button", { value: /Make Your reservation/i });
  expect(btn).toBeEnabled();
});