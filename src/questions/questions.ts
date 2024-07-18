interface Question {
    readonly id: number;
    readonly question: string;
    readonly possibleAnswers: [string, string, string, string];
    readonly correctAnswer: string
}

const questionsList: Question[] = [
    {
        id: 1,
        question: "Quante materie prime consuma in media un cittadino europeo in un anno?",
        possibleAnswers: ["2 tonnellate", "8 tonnellate", "14 tonnellate", "20 tonnellate"],
        correctAnswer: "14 tonnellate"
    },
    {
        id: 2,
        question: "Qual è l'obiettivo principale dell'economia circolare?",
        possibleAnswers: ["Minimizzare i rifiuti e sfruttare al massimo le risorse", "Massimizzare la produzione indipendentemente dai rifiuti", "Promuovere prodotti monouso", "Aumentare il consumo di risorse naturali"],
        correctAnswer: "Minimizzare i rifiuti e sfruttare al massimo le risorse"
    },
    {
        id: 3,
        question: "Quale dei seguenti NON è un principio dell'economia circolare?",
        possibleAnswers: ["Progettare per eliminare i rifiuti e l'inquinamento", "Mantenere i prodotti e i materiali in uso", "Rigenerare i sistemi naturali", "Aumentare l'uso della plastica monouso"],
        correctAnswer: "Aumentare l'uso della plastica monouso"
    },
    {
        id: 4,
        question: `Cosa si intende per "chiudere il ciclo" nell'economia circolare?`,
        possibleAnswers: ["Ripetere lo stesso processo all'infinito", "Creare un sistema chiuso in cui i rifiuti diventano input per nuovi prodotti", "Terminare tutti i processi di riciclaggio", "Utilizzare le discariche per conservare i rifiuti"],
        correctAnswer: "Creare un sistema chiuso in cui i rifiuti diventano input per nuovi prodotti"
    },
    {
        id: 5,
        question: "Quale dei seguenti materiali è comunemente riciclato in un'economia circolare?",
        possibleAnswers: ["Plastica", "Metallo", "Vetro", "Tutti i precedenti"],
        correctAnswer: "Tutti i precedenti"
    },
    {
        id: 6,
        question: `Cosa si intende per "upcycling"?`,
        possibleAnswers: ["Trasformare materiali di scarto in nuovi materiali o prodotti di qualità inferiore", "Convertire materiali di scarto in nuovi materiali o prodotti di migliore qualità", "Bruciare rifiuti per generare energia", "Seppellire i rifiuti nelle discariche"],
        correctAnswer: "Convertire materiali di scarto in nuovi materiali o prodotti di migliore qualità"
    },
    {
        id: 7,
        question: "Quale dei seguenti è un esempio di downcycling?",
        possibleAnswers: ["Trasformare bottiglie di plastica in giacche di pile", "Creare nuove bottiglie di vetro da quelle vecchie", "Usare carta triturata come lettiera per animali", "Creare arte da vecchie parti di auto"],
        correctAnswer: "Usare carta triturata come lettiera per animali"
    },
    {
        id: 8,
        question: `Cosa si intende per rifiuto "biodegradabile"?`,
        possibleAnswers: ["Rifiuto che non può essere decomposto da processi naturali", "Creare nuove bottiglie di vetro da quelle vecchie", "Usare carta triturata come lettiera per animali", "Creare arte da vecchie parti di auto"],
        correctAnswer: "Usare carta triturata come lettiera per animali"
    },
    {
        id: 9,
        question: "Quale dei seguenti è un esempio di downcycling?",
        possibleAnswers: ["Trasformare bottiglie di plastica in giacche di pile", "Creare nuove bottiglie di vetro da quelle vecchie", "Usare carta triturata come lettiera per animali", "Creare arte da vecchie parti di auto"],
        correctAnswer: "Usare carta triturata come lettiera per animali"
    },
    {
        id: 10,
        question: "Cosa si intende per rifiuto \"biodegradabile\"?",
        possibleAnswers: ["Rifiuto che non può essere decomposto da processi naturali", "Rifiuto che può essere decomposto da microrganismi in elementi naturali", "Rifiuto che può essere riciclato indefinitamente", "Rifiuto che deve essere incenerito"],
        correctAnswer: "Rifiuto che può essere decomposto da microrganismi in elementi naturali"
    },
    {
        id: 11,
        question: "Quale dei seguenti NON è un beneficio del riciclaggio?",
        possibleAnswers: ["Riduce la quantità di rifiuti inviati alle discariche", "Conserva le risorse naturali", "Aumenta l'inquinamento", "Risparmia energia"],
        correctAnswer: "Aumenta l'inquinamento"
    },
    {
        id: 12,
        question: "Cosa si intende per \"e-waste\"?",
        possibleAnswers: ["Rifiuti elettronici da dispositivi come computer e smartphone", "Rifiuti ambientali da fonti naturali", "Rifiuti d'acqua in eccesso", "Rifiuti commestibili dalla produzione alimentare"],
        correctAnswer: "Rifiuti elettronici da dispositivi come computer e smartphone"
    },
    {
        id: 13,
        question: "Quale dei seguenti è un metodo comune di smaltimento dei rifiuti organici in un'economia circolare?",
        possibleAnswers: ["Conferimento in discarica", "Incenerimento", "Compostaggio", "Trattamento chimico"],
        correctAnswer: "Compostaggio"
    },
    {
        id: 14,
        question: "Qual è lo scopo di un programma di \"take-back\"?",
        possibleAnswers: ["Incoraggiare i clienti a restituire i prodotti per un corretto riciclaggio o smaltimento", "Aumentare le vendite di nuovi prodotti", "Ridurre i costi di produzione", "Promuovere l'uso di prodotti monouso"],
        correctAnswer: "Incoraggiare i clienti a restituire i prodotti per un corretto riciclaggio o smaltimento"
    },
    {
        id: 15,
        question: "Quale dei seguenti descrive meglio \"zero waste\"?",
        possibleAnswers: ["Un approccio alla gestione dei rifiuti che mira a non inviare rifiuti alle discariche o agli inceneritori", "Un metodo di produzione di beni con il massimo dei rifiuti", "Un sistema in cui i rifiuti vengono raccolti e conservati senza riciclaggio", "Una politica che vieta tutta la produzione di rifiuti"],
        correctAnswer: "Un approccio alla gestione dei rifiuti che mira a non inviare rifiuti alle discariche o agli inceneritori"
    },
    {
        id: 16,
        question: "Quale dei seguenti materiali è il più difficile da riciclare?",
        possibleAnswers: ["Alluminio", "Carta", "Plastica", "Vetro"],
        correctAnswer: "Plastica"
    },
    {
        id: 17,
        question: "Cosa si intende per \"remanufacturing\"?",
        possibleAnswers: ["Creare nuovi prodotti da materie prime", "Ricostruire un prodotto secondo le specifiche originali utilizzando parti riutilizzate, riparate e nuove", "Smaltire vecchi prodotti nelle discariche", "Bruciare rifiuti per generare energia"],
        correctAnswer: "Ricostruire un prodotto secondo le specifiche originali utilizzando parti riutilizzate, riparate e nuove"
    },
    {
        id: 18,
        question: "Quale dei seguenti è un esempio di prodotto progettato per un'economia circolare?",
        possibleAnswers: ["Una borsa di plastica monouso", "Uno smartphone facilmente riparabile e aggiornabile", "Una tazza di caffè non riciclabile", "Batterie monouso"],
        correctAnswer: "Uno smartphone facilmente riparabile e aggiornabile"
    },
    {
        id: 19,
        question: "Cos'è la \"simbiosi industriale\"?",
        possibleAnswers: ["Un tipo di riciclaggio in cui i materiali di scarto vengono bruciati per ottenere energia", "Un sistema in cui i rifiuti di un'industria diventano input per un'altra", "Il processo di separazione dei materiali di scarto", "Un metodo per aumentare i rifiuti industriali"],
        correctAnswer: "Un sistema in cui i rifiuti di un'industria diventano input per un'altra"
    },
    {
        id: 20,
        question: "Quale dei seguenti NON è un tipo di rifiuto riciclabile?",
        possibleAnswers: ["Carta", "Vetro", "Avanzi di cibo", "Elettronica"],
        correctAnswer: "Avanzi di cibo"
    },
    {
        id: 21,
        question: "Cosa si intende per \"valutazione del ciclo di vita\" (LCA)?",
        possibleAnswers: ["Analizzare l'impatto ambientale di un prodotto durante l'intero ciclo di vita", "Misurare la durata di vita di un prodotto", "Determinare i costi di produzione", "Valutare la qualità di un prodotto"],
        correctAnswer: "Analizzare l'impatto ambientale di un prodotto durante l'intero ciclo di vita"
    },
    {
        id: 22,
        question: "Cos'è la \"responsabilità estesa del produttore\" (EPR)?",
        possibleAnswers: ["Un approccio politico in cui i produttori sono responsabili dell'intero ciclo di vita dei loro prodotti, compreso lo smaltimento", "Un metodo per ridurre i costi di produzione", "Una strategia per aumentare le vendite di prodotti", "Un sistema in cui i consumatori sono responsabili del riciclaggio"],
        correctAnswer: "Un approccio politico in cui i produttori sono responsabili dell'intero ciclo di vita dei loro prodotti, compreso lo smaltimento"
    },
]
