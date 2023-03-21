let userName = '';
let tripKM = 0;
let userAge = '';

const priceFull = 0.21;
const priceUnderAge = priceFull * (1 - (20 / 100));
const priceOverAge = priceFull * (1 - (40 / 100));
let ticketPrice = 0;

let result = '';

const btnCalc = document.getElementById('calc');
const btnCanc = document.getElementById('canc');

function generate(){
  userName = document.getElementById('name').value;
  tripKM = document.getElementById('km').value;
  userAge = document.getElementById('age').value;

  console.log(`
  nome utente: ${userName}
  lunghezza viaggio: ${tripKM}
  età passeggero: ${userAge}
  prezzo intero: ${priceFull}
  prezzo under 18: €${priceUnderAge}
  prezzo over 65: €${priceOverAge}
  `);

  if (userAge === 'underAge'){
    ticketPrice = tripKM * priceUnderAge;
  } else if (userAge === 'overAge'){
    ticketPrice = tripKM * priceOverAge;
  } else{
    ticketPrice = tripKM * priceFull;
  } 

  console.log(`prezzo biglietto: ${ticketPrice}`);

  result = `
    il prezzo è ${ticketPrice}
    nome utente: ${userName}
    lunghezza viaggio: ${tripKM}
    età passeggero: ${userAge}
    prezzo intero: ${priceFull}
    prezzo under 18: €${priceUnderAge}
    prezzo over 65: €${priceOverAge}
  `;
  document.getElementById('result').innerHTML = result;

  userName = document.getElementById('name').value = '';
  tripKM = document.getElementById('km').value = '';
  userAge = document.getElementById('age').value = '';

}

btnCalc.addEventListener('click', generate);

console.log(`
nome utente: ${userName}
lunghezza viaggio: ${tripKM}
età passeggero: ${userAge}
prezzo intero: ${priceFull}
prezzo under 18: €${priceUnderAge}
prezzo over 65: €${priceOverAge}
`);















// let ticketPrice = 0;

// //console.log(typeof(ticketPrice));

// if (userAge < 18){
//   ticketPrice = tripKM * priceUnderAge;
// } else if (userAge > 64){
//   ticketPrice = tripKM * priceOverAge;
// } else{
//   ticketPrice = tripKM * priceFull;
// } // stabilisce il prezzo del biglietto in base all'età fornita dall'utente

// ticketPrice = Math.round((ticketPrice + Number.EPSILON)*100) / 100; // arrotonda il prezzo finale al centesimo

// console.log(`prezzo del biglietto: ${ticketPrice}`);

// document.body.style.background = "black url(../img/treno.jpeg) no-repeat center";

// document.getElementById('result').outerHTML = `
//   <div class="container text-center my-5 p-5 bg-black bg-opacity-75 rounded-5 text-white">

//     <h1 class="mb-5">CALCOLA IL PREZZO DEL TUO BIGLIETTO</h1>

//     <p class="fs-4 fst-italic">
//       Ciao <span class="fw-bold">${userName}</span> in base alla tua età (<span class="fw-bold">${userAge} anni</span>) e ai km da percorrere (<span class="fw-bold">${tripKM} km</span>) il prezzo del tuo biglietto sarà di:
//     </p>

//     <p class="fs-3 fw-bold mb-5">€ ${ticketPrice}*</p>

//     <div class="small fst-italic">

//       <p>
//         *Il prezzo del biglietto viene calcolato arrotondando alla seconda cifra decimale.
//         <ul class="list-unstyled">
//           <li>Il prezzo unitario per km è di &euro; ${priceFull}</li>
//           <li>Il prezzo per i minori di 18 anni è di &euro; ${priceUnderAge}, calcolato applicando uno sconto del 20% sul prezzo unitario</li>
//           <li>Il prezzo per coloro che hanno più di 65 anni è di &euro; ${priceOverAge}, calcolato applicando uno sconto del 40% sul prezzo unitario</li>
//         </ul>        
//       </p>
      
//     </div>
//   </div>
// `;