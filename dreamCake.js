function aktualisiereZutaten() {
    const portionenInput = document.getElementById('portionen');
    const zutatenList = document.querySelectorAll('#zutaten li');

    let portionen = parseInt(portionenInput.value);
    if (isNaN(portionen) || portionen < 1) {
      portionen = 1;
    }

    portionenInput.value = portionen;


    zutatenList.forEach(item => {
      const basis = parseFloat(item.getAttribute('data-basis'));
      const einheit = item.getAttribute('data-einheit');
      let menge = basis * portionen;
      let formatiert = Number.isInteger(menge) ? menge : menge.toFixed(2).replace('.', ',');
      item.textContent = `${formatiert} ${einheit}`;
    });
  }


  
  // Optional: Enter-Taste aktivieren
  document.getElementById('portionen').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      aktualisiereZutaten();
    }
  });