import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const InfoPage = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center inset-0 gap-3">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 cursor-pointer"
      >
        <FaArrowLeft fontSize={25} />
      </div>
      <img
        src={logo}
        alt="Logo"
        className="h-32 sm:h-36 animate-ruotaLentamente mb-8 max-w-full"
      />
      <p className="w-[80%] sm:w-[50%] lg:w-[40%]">
        Quiz App è un progetto di educazione alla sostenibilità creato in
        collaborazione con start2impact University nell'ambito del corso
        "Typescript e React".
      </p>
      <p className="w-[80%] sm:w-[50%] lg:w-[40%]">
        L'obiettivo del progetto era quello di creare un'app tramite la quale
        l'utente potesse imparare diversi concetti sull'economia circolare e sul
        riciclo. Il Quiz ha proprio questo scopo, e per stimolare l'utente a
        fare sempre meglio sono stati creati vari livelli di risultato in base
        alle risposte corrette.
      </p>
      <p className="w-[80%] sm:w-[50%] lg:w-[40%] mb-5">
        Per qualsiasi approfondimento o proposta di collaborazione potete
        contattarmi tramite i canali qui sotto.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/marcoroccon" target="_blank" rel="noreferrer">
          <button>
            <FaLinkedin fontSize={30} />
          </button>
        </a>
        <a href="https://www.instagram.com/marco_roccon/" target="_blank" rel="noreferrer">
          <button>
            <FaInstagram fontSize={30} />
          </button>
        </a>
        <a href="https://github.com/rocconmarco" target="_blank" rel="noreferrer">
          <button>
            <FaGithub fontSize={30} />
          </button>
        </a>
      </div>

      <p>© 2024 Marco Roccon. Tutti i diritti riservati.</p>
    </div>
  );
};

export default InfoPage;
