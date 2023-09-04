// Questo è un componente JavaScript scritto utilizzando Preact, una libreria JavaScript simile a React che offre funzionalità per la creazione di interfacce utente reattive. Il componente Greeting sembra essere un componente di saluto che cambia casualmente il messaggio di benvenuto quando si fa clic su un pulsante. Ecco una spiegazione dettagliata del codice:

// Importazione delle dipendenze: Il codice inizia importando le dipendenze necessarie da Preact. In particolare, h è una funzione per la creazione di elementi virtuali (analoghi agli elementi React) e useState è un hook di Preact per gestire lo stato nei componenti funzionali.

// Definizione del componente Greeting: Il componente Greeting è definito come una funzione JavaScript che accetta un oggetto messages come argomento. Questo oggetto dovrebbe contenere una serie di messaggi di saluto.

// Funzione randomMessage: Questa funzione viene definita per selezionare casualmente un messaggio dalla serie di messaggi di saluto. Utilizza Math.random() per generare un numero casuale tra 0 e 1, quindi lo moltiplica per la lunghezza dell'array messages per ottenere un indice casuale. Il messaggio corrispondente a quell'indice viene restituito.

// Stato locale con useState: Il componente utilizza lo hook useState per gestire uno stato locale chiamato greeting. Inizialmente, greeting è impostato con il primo messaggio dall'array messages[0].

// Rendering del componente: Nel blocco di rendering, il componente restituisce un elemento <div> che contiene un titolo <h3> e un pulsante <button>. Il titolo mostra il messaggio di benvenuto corrente estratto dalla variabile greeting.

// Pulsante "New Greeting": Quando il pulsante viene cliccato (onClick), viene chiamata la funzione randomMessage(), che seleziona casualmente un nuovo messaggio di benvenuto. Questo nuovo messaggio viene quindi impostato come nuovo valore per la variabile greeting utilizzando setGreeting. Di conseguenza, il titolo nel componente viene aggiornato con il nuovo messaggio di benvenuto casuale.

// In sintesi, il componente Greeting è un semplice componente Preact che mostra un messaggio di benvenuto e permette agli utenti di generare casualmente nuovi messaggi di benvenuto facendo clic su un pulsante.

import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}