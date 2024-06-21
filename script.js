const iyaButton = document.getElementById('iya-btn');
const tidakButton = document.getElementById('tidak-btn');

iyaButton.addEventListener('click', function() {
  window.location.href = 'selamat.html';
});

tidakButton.addEventListener('click', function() {
  
  tidakButton.style.position = 'absolute';
  const randomX = Math.random() * (window.innerWidth - tidakButton.clientWidth);
  const randomY = Math.random() * (window.innerHeight - tidakButton.clientHeight);
  tidakButton.style.left = randomX + 'px';
  tidakButton.style.top = randomY + 'px';
});
