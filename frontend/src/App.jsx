import { Route, Routes } from "react-router";
import HomePage from "./views/HomePage";
import CreatePage from "./views/CreatePage";
import NoteDetailPage from "./views/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
