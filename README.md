<br />
<div id="readme-top" align="center">
  <a href="https://quizapp-recycle.netlify.app">
    <img src="src/logo.png" alt="Logo" width="130" height="130">
  </a>

<h3 align="center">Quiz App</h3>

  <p align="center">
    Quiz App su economia circolare e riciclo.
    <br />
    <a href="https://github.com/rocconmarco/quiz-app"><strong>Repository GitHub »</strong></a>
    <br />
  </p>
</div>

## About The Project

Quiz App è un progetto di educazione alla sostenibilità creato in
collaborazione con start2impact University nell'ambito del corso
"Typescript e React".

<br>

L'obiettivo del progetto era quello di creare un'app tramite la quale
l'utente potesse imparare diversi concetti sull'economia circolare e sul
riciclo. Il Quiz ha proprio questo scopo, e per stimolare l'utente a
fare sempre meglio sono stati creati vari livelli di risultato in base
alle risposte corrette.

<br>

Per qualsiasi approfondimento o proposta di collaborazione potete
contattarmi tramite i canali qui sotto.

<br>

## Specs for nerds

L'app è stata sviluppata tramite React e Typescript. I componenti sono
stati creati in file .jsx tranne nel caso di QuizPage.tsx, dove si è optato
per una tipizzazione più stringente nella generazione di domande casuali.

<br>

Nello specifico, ho utilizzato un type literal di "10" assegnato all'argomento
della funzione generateRandomQuestions, in modo tale da imporre un limite di 10
alle domande generate dalla funzione.

<br>

Typescript è stato usato nella definizione di array di oggetti per la 
raccolta di domande (questions.ts) e trofei (trophies.ts). È stata utilizzata,
in entrambi i casi, un'interfaccia che definiva con precisione tutte
le proprietà e i relativi tipi di ogni oggetto nell'array.

<br>

Per quanto riguarda il routing in App.js, si è deciso di inserire un controllo
per evitare che l'utente cerchi di navigare verso la Summary page e la Answers page
prima di aver completato il quiz. A questo scopo, sono stati creati due ulteriori
componenti, ProtectedSummaryRoute.jsx e ProtectedAnswersRoute.jsx, dove è stato inserito
un controllo che utilizza la variabile di stato globale "userAnswers" e verifica
se quest'ultima è vuota o ha una lunghezza inferiore a 10 (numero di risposte
necessarie per accedere alla Summary e Answers page).

<br>

Per lo styling ho utilizzato Tailwind CSS v.3.4.6, applicando lo stile
direttamente in fase di scrittura del jsx sotto forma di classi.

<br>

A causa di problemi di compatibilità tra Typescript v.5.5.4 e react-scripts,
in fase di build del progetto ho dovuto aggiungere un override nel file
package.json. Nello specifico:

<br>

"overrides": {
    "react-scripts": {
      "typescript": "^5.5.4"
    }
  }

  <br>

  Questa modifica mi ha permesso di forzare l'utilizzo della versione più
  aggiornata di Typescript e di fare il deploy del progetto su Netlify.

  <br>

## Contact

<b>Marco Roccon - Digital Innovation & Development</b><br>
Portfolio website: https://rocconmarco.github.io/<br>
Linkedin: https://www.linkedin.com/in/marcoroccon/<br>
GitHub: https://github.com/rocconmarco

Project Link: https://quizapp-recycle.netlify.app

<br>

## Copyright

© 2024 Marco Roccon. Tutti i diritti riservati.
