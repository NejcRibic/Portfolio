const birthDate = new Date('05-08-2002'); // Your birthday in YYYY-MM-DD format
const currentDate = new Date();
const age = currentDate.getFullYear() - birthDate.getFullYear();

const updateAge = () => {
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const ageElement = document.getElementById('age-span');
  ageElement.textContent = age;

  // Check if the current year is different from the previous year
  const previousYear = currentDate.getFullYear() - 1;
  if (currentDate.getFullYear() !== previousYear) {
    age++; // Increment age by one
    ageElement.textContent = age;
  }
};

setInterval(updateAge, 1000 * 60 * 60 * 24 * 365); // Update every 365 days (1 year)