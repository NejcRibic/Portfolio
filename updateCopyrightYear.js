const updateCopyrightYear = () => {
  const copyrightYear = document.getElementById('copyright-year');
  copyrightYear.textContent = new Date().getFullYear();
};

document.addEventListener('DOMContentLoaded', updateCopyrightYear);