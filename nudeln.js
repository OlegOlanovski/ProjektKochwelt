const BASE_PORTIONS = 1;

const ingredients = {
  nudeln:           { amount: 250, unit: "g"     },
  sojasprossen:     { amount: 200, unit: "g"     },
  lauchzwiebel:     { amount:   1, unit: "Stück" },
  oel:              { amount:  36, unit: "ml"    },
  sojasauce:        { amount:  78, unit: "g"     },
  sambal:           { amount: 100, unit: "g"     },
  paprikapulver:    { amount: 20, unit: "g"     },
  currypulver:      { amount: 20, unit: "g"     },
  chilipulver:      { amount:  10, unit: "g"     },
  gefluegelfleisch: { amount: 200, unit: "g"     },
};

const form = document.getElementById("portionDiv");
const input = document.getElementById("portions");

form.addEventListener("submit", event => {
  event.preventDefault();

  const portions = parseFloat(input.value);
  if (isNaN(portions) || portions <= 0) {
    alert("gültige Zahl von Portionen eingeben.");
    return;
  }

  Object.entries(ingredients).forEach(([key, { amount, unit }]) => {
    const result = (amount / BASE_PORTIONS) * portions;
    document.getElementById(key).textContent = `${result.toFixed(2)} ${unit}`;

  });
});