import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<AddTeam />} />
        <Route path="/view" element={<ViewTeam />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;