import { initializeTimes, updateTimes } from "./Main";

test('initializeTimes function returns the correct expected value', () => {
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  global.fetchAPI = jest.fn((date) => expected);
  const result = initializeTimes();
  expect(result).toEqual(expected);
});

test('updateTimes function returns the same value that is provided in the state', () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: 'removeTime', timeToRemove: "19:00" };
  const expected = ["17:00", "18:00", "20:00", "21:00", "22:00"];
  const result = updateTimes(state, action);
  expect(result).toEqual(expected);
});