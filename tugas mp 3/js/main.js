document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Selamat Datang Di Dunia Satwa Park Zoo!');
    });
  }
});