//   function aktualisiereZutaten() {
//     const portionenInput = document.getElementById('portionen');
//     const zutatenList = document.getElementById('zutaten').getElementsByTagName('li');
//     const portionen = Math.max(1, parseInt(portionenInput.value)); // Mindestwert 1
//     portionenInput.value = portionen;

//     for (let item of zutatenList) {
//       const basis = parseFloat(item.getAttribute('data-basis'));
//       const einheit = item.textContent.replace(/^[\d.,]+/, '').trim();
//       const neueMenge = (basis * portionen).toFixed(2).replace(/\.00$/, '');
//       item.textContent = `${neueMenge} ${einheit}`;
//     }
//   } Chat-GBPT seine antwort

function aktualisiereZutaten() {
    const portionenInput = document.getElementById('portionen');
    const zutatenList = document.querySelectorAll('#zutaten li');

    let portionen = parseInt(portionenInput.value);
    if (isNaN(portionen) || portionen < 1) {
        portionen = 1;
    } else if (portionen > 10) {
        portionen = 10;
    }
    portionenInput.value = portionen;

    for (let i = 0; i < zutatenList.length; i++) {
        const item = zutatenList[i];
        const basis = +item.getAttribute('data-basis');
        const einheit = item.getAttribute('data-einheit');
        const menge = basis * portionen;

        // zutatenList.forEach(item => {
        //     const basis = +item.getAttribute('data-basis');
        //     const einheit = item.getAttribute('data-einheit');
        //     const menge = basis * portionen; Vereinfachte version laut mit forEach schleife

        item.textContent = menge + " " + einheit;

        // let formatiert;
        // if (Number.isInteger(menge)) {
        //     formatiert = menge.toString();
        // } else {
        //     formatiert = menge.toFixed(2);
        // }.replace('.', ','); Komma statt Punkt

        // item.textContent = formatiert + " " + einheit; Wenn man mehr als 2 kommastellen hat

    };//  bei forEach braucht man noch ein ) nach der }: })
} // fertig umprogrammierte eigene lösung