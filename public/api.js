const seededRandom = (seed) => {
  const m = 2 ** 16;
  const a = 75;
  let s = seed % m;

  return () => {
    s = (s * a) % m;
    return s / m;
  };
};

const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let hour = 17; hour <= 23; hour++) {
    if (random() < 0.5) result.push(`${hour}:00`);
    if (random() < 0.5) result.push(`${hour}:30`);
  }

  return result;
};

const submitAPI = (formData) => true;