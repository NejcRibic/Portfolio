const birthDate = new Date('05-08-2003'); // Your birthday in YYYY-MM-DD format
const currentDate = new Date();
const age = currentDate.getFullYear() - birthDate.getFullYear();

setInterval(() => {
  // Update the age every midnight
  currentDate = new Date();
  age = currentDate.getFullYear() - birthDate.getFullYear();
}, 1000 * 60 * 60 * 24); // Update every 24 hours (1 day)