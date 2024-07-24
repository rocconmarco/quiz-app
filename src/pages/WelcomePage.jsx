import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import titleLogo from "../title-logo.png";
import InfoButton from "../components/InfoButton";

const WelcomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="h-[100%] w-screen bg-slate-100 flex flex-col items-center justify-center overflow-hidden fixed inset-0">
      <InfoButton />
      
      <img src={titleLogo} alt="Quiz App" className="max-w-full"></img>
      <img
        src={logo}
        className="h-32 sm:h-40 animate-ruotaLentamente -mt-12 mb-8 max-w-full"
      />
      <button onClick={() => navigate("/instructions")} className="h-14 w-44 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold active:shadow-inner">
        Inizia
      </button>
    </div>
  );
};

export default WelcomePage;
