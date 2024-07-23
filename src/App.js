import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import InstructionsPage from "./pages/InstructionsPage";
import QuizPage from "./pages/QuizPage.tsx";
import SummaryPage from "./pages/SummaryPage.jsx";
import AnswersPage from "./pages/AnswersPage.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/answers" element={<AnswersPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
