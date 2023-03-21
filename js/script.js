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

// IMPLEMENTO FUNZIONE RANDOM CHE UTILIZZERO' PER GENERARE CODICI RANDOM NEL BIGLIETTO
function random(min, max){
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// let randomN = random(0, 1000);

// console.log('numero random ', randomN);


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