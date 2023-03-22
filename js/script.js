// DICHIARAZIONE VARIABILI
let userName = '';
let tripKM = 0;
let userAge = '';

const priceFull = 0.21;
const priceUnderAge = priceFull * (1 - (20 / 100));
const priceOverAge = priceFull * (1 - (40 / 100));
let ticketPrice = 0;

let wagon = 0;
let CPcode = 0;

let result = '';

const btnCalc = document.getElementById('calc');
const btnCanc = document.getElementById('canc');

// IMPLEMENTO FUNZIONE RANDOM CHE UTILIZZERO' PER GENERARE CODICI RANDOM NEL BIGLIETTO
function random(min, max){
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// IMPLEMENTO FUNZIONE GENERATE CHE MEMORIZZA LE INFO INSERITE DALL'UTENTE E CALCOLA IL PREZZO DEL BIGLIETTO
function generate(){

  document.querySelector('.ms-result').classList.remove('d-none');

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

  CPcode = random(1, 99999); // assegno un valore random come codice CP 

  CPcode = String(CPcode).padStart(5, '0'); // aggiungo zeri prima del numero casuale per generare sempre un numero di 5 cifre
  
  wagon = random(1, 15); // assegno un valore random per la carrozza

  if ((userName != '') && (tripKM != '') && (userAge != '')){

    if (document.querySelector('.ms-ticket').classList.contains('d-none')){
      document.querySelector('.ms-ticket').classList.remove('d-none');
      document.querySelector('.ms-error').classList.add('d-none');
    } // CONTROLLO CHE LA VISUALIZZAZIONE DEL RISULTATO NON SIA NASCOSTA
    
    document.querySelector('.ms-print-name').innerHTML = userName;
    document.querySelector('.ms-print-offer').innerHTML = userAge + ' Offer';
    document.querySelector('.ms-print-wagon').innerHTML = wagon;
    document.querySelector('.ms-print-cpcode').innerHTML = CPcode;
    document.querySelector('.ms-print-price').innerHTML = '&euro; ' + ticketPrice;

    userName = document.getElementById('name').value = '';
    tripKM = document.getElementById('km').value = '';
    userAge = document.getElementById('age').value = '';

  } else{
    
    if (document.querySelector('.ms-error').classList.contains('d-none')){
      document.querySelector('.ms-result').classList.remove('d-none');
      document.querySelector('.ms-error').classList.remove('d-none');
      document.querySelector('.ms-ticket').classList.add('d-none');
    } // CONTROLLO CHE LA VISUALIZZAZIONE DEL RISULTATO NON SIA NASCOSTA

    result = `Per favore inserisci tutti i dati richiesti prima di procedere`;

    document.querySelector('.ms-error').innerHTML = result;

  }

}

// IMPLEMENTO FUNZIONE CANCEL CHE RESETTA I DATI E ELIMINA L'EVENTUALE VISUALIZZAZIONE DI BIGLIETTI PRECEDENTEMENTE GENERATI
function cancel(){
  userName = document.getElementById('name').value = '';
  tripKM = document.getElementById('km').value = '';
  userAge = document.getElementById('age').value = '';

  document.querySelector('.ms-result').classList.add('d-none');
}

btnCalc.addEventListener('click', generate); //RICHIAMO FUNZIONE GENRATE AL CLICK

btnCanc.addEventListener('click', cancel); //RICHIAMO FUNZIONE CANCEL AL CLICK

// console.log(`
// nome utente: ${userName}
// lunghezza viaggio: ${tripKM}
// età passeggero: ${userAge}
// prezzo intero: ${priceFull}
// prezzo under 18: €${priceUnderAge}
// prezzo over 65: €${priceOverAge}
// `);