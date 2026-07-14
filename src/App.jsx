import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTeam />} />
        <Route path="/view" element={<ViewTeam />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;