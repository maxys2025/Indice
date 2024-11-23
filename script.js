// Seleziona il contenitore dei petali
const petalContainer = document.querySelector('.petal-container');

// Funzione per creare i petali
for (let i = 0; i < 50; i++) {
  const petal = document.createElement('div'); // Crea un elemento <div> per ogni petalo
  petal.classList.add('petal'); // Aggiunge la classe 'petal'

  // Posizionamento casuale orizzontale
  petal.style.left = Math.random() * 100 + 'vw'; // Randomizza la posizione lungo l'asse X

  // Imposta durate casuali per l'animazione
  petal.style.animationDuration = Math.random() * 3 + 4 + 's'; // Durata tra 4 e 7 secondi
  petal.style.animationDelay = Math.random() * 5 + 's'; // Ritardo casuale fino a 5 secondi

  // Aggiunge il petalo al contenitore
  petalContainer.appendChild(petal);
}
