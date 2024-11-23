const petalContainer = document.querySelector('.petal-container');

// Genera i petali dinamicamente
for (let i = 0; i < 50; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Posizione casuale per ogni petalo
  petal.style.left = Math.random() * 100 + 'vw'; // Larghezza casuale
  petal.style.animationDuration = Math.random() * 3 + 4 + 's'; // Durata casuale 4-7 secondi
  petal.style.animationDelay = Math.random() * 5 + 's'; // Ritardo casuale

  petalContainer.appendChild(petal);
}
