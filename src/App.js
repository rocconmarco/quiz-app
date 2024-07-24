import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import InstructionsPage from "./pages/InstructionsPage";
import QuizPage from "./pages/QuizPage.tsx";
import useStore from "./store/store.ts";
import ProtectedSummaryRoute from "./components/routing/ProtectedSummaryRoute.jsx";
import ProtectedAnswersRoute from "./components/routing/ProtectedAnswersRoute.jsx";
import InfoPage from "./pages/InfoPage.jsx";

function App() {
  const userAnswers = useStore((state) => state.userAnswers);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/summary" element={<ProtectedSummaryRoute />} />
      <Route path="/answers" element={<ProtectedAnswersRoute />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
