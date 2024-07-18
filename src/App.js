import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import QuizPage from "./pages/QuizPage";
import InstructionsPage from "./pages/InstructionsPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
