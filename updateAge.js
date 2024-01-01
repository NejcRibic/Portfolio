const birthDate = new Date('2002-05-08'); // Your birthday in YYYY-MM-DD format
const currentDate = new Date();
const age = currentDate.getFullYear() - birthDate.getFullYear();

const updateAge = () => {
  document.getElementById('age-span').textContent = age;
};

document.addEventListener('DOMContentLoaded', updateAge);