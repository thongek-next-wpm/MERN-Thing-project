import { Route, Routes } from "react-router";
import HomePage from "./views/HomePage";
import CreatePage from "./views/CreatePage";
import NoteDetailPage from "./views/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/Note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
