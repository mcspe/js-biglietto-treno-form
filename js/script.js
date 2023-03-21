// DICHIARAZIONE VARIABILI
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


// IMPLEMENTO FUNZIONE GENERATE CHE MEMORIZZA LE INFO INSERITE DALL'UTENTE E CALCOLA IL PREZZO DEL BIGLIETTO
function generate(){

  if (document.getElementById('result').classList.contains('d-none')){
    document.getElementById('result').classList.remove('d-none');
  } // CONTROLLO CHE LA VISUALIZZAZIONE DEL RISULTATO NON SIA NASCOSTA

  userName = document.getElementById('name').value; // OTTENGO IL NOME INSERITO DALL'UTENTE

  tripKM = document.getElementById('km').value; // OTTENGO I KM INSERITI DALL'UTENTE

  userAge = document.getElementById('age').value; // OTTENGO LA FASCIA D'ETA' INSERITA DALL'UTENTE

  console.log(`
  nome utente: ${userName}
  lunghezza viaggio: ${tripKM}
  età passeggero: ${userAge}
  prezzo intero: ${priceFull}
  prezzo under 18: €${priceUnderAge}
  prezzo over 65: €${priceOverAge}
  `); // CONTROLLO LA CORRETTA RICEZIONE DEI DATI

  if (userAge === 'underAge'){
    ticketPrice = (tripKM * priceUnderAge).toFixed(2);
  } else if (userAge === 'overAge'){
    ticketPrice = (tripKM * priceOverAge).toFixed(2);
  } else{
    ticketPrice = (tripKM * priceFull).toFixed(2);
  } // ATTRAVERSO IL CONTROLLO DELLA FASCIA D'ETA' INSERITA CALCOLO IL PREZZO TOTALE

  console.log(`prezzo biglietto: ${ticketPrice}`); // CONTROLLO CHE IL PREZZO VENGA CALCOLATO CORRETTAMENTE


  if ((userName != '') && (tripKM != '') && (userAge != '')){
    
    result = `
      il prezzo è ${ticketPrice}
      nome utente: ${userName}
      lunghezza viaggio: ${tripKM}
      età passeggero: ${userAge}
      prezzo intero: ${priceFull}
      prezzo under 18: €${priceUnderAge}
      prezzo over 65: €${priceOverAge}
    `;

    userName = document.getElementById('name').value = '';
    tripKM = document.getElementById('km').value = '';
    userAge = document.getElementById('age').value = '';

  } else{

    result = `Per favore inserisci tutti i dati richiesti prima di procedere`;

  }

  
  document.getElementById('result').innerHTML = result;

}

// IMPLEMENTO FUNZIONE CANCEL CHE RESETTA I DATI E ELIMINA L'EVENTUALE VISUALIZZAZIONE DI BIGLIETTI PRECEDENTEMENTE GENERATI
function cancel(){
  userName = document.getElementById('name').value = '';
  tripKM = document.getElementById('km').value = '';
  userAge = document.getElementById('age').value = '';

  document.getElementById('result').classList.add('d-none');
}

btnCalc.addEventListener('click', generate); //RICHIAMO FUNZIONE GENRATE AL CLICK

btnCanc.addEventListener('click', cancel); //RICHIAMO FUNZIONE CANCEL AL CLICK

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