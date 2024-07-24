import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import InfoButton from "../components/InfoButton";

const InstructionsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <InfoButton />
      <img src={logo} className="h-32 animate-ruotaLentamente mb-8" />
      <div className="h-auto mx-4 md:mx-0 md:w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col gap-6 rounded-2xl items-center justify-center">
        <p>
          Hai mai sentito parlare di economia circolare? Un nuovo paradigma si
          sta affermando in Europa e nel mondo, dove una migliore gestione dei
          rifiuti può portare a un miglioramento delle condizioni ambientali e
          ridurre gli sprechi.
        </p>
        <p className="font-bold">
          Metti alla prova le tue conoscenze su economia circolare e riciclo con
          questo Quiz!
        </p>
        <p>
          Il Quiz è composto da 10 domande. Fai del tuo meglio per raggiungere
          il livello Maestro, ma non scoraggiarti se non le indovini tutte al
          primo colpo. Il Quiz è un'occasione per ampliare le tue conoscenze e
          approfondire alcuni concetti.
        </p>
        <button
          onClick={() => navigate("/quiz")}
          className="h-14 w-44 rounded-3xl bg-gradient-to-br from-secondaryLight to-primaryLight text-white text-lg font-bold active:shadow-inner"
        >
          Inizia il quiz
        </button>
      </div>
    </div>
  );
};

export default InstructionsPage;
