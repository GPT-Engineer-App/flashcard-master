import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateFlashcard from "./pages/CreateFlashcard.jsx";
import EditFlashcards from "./pages/EditFlashcards.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<CreateFlashcard />} />
        <Route path="/edit" element={<EditFlashcards />} />
      </Routes>
    </Router>
  );
}

export default App;
