import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import AvailableProjects from "./routes/AvailableProjects";
import ProjectDetails from "./routes/ProjectDetails";
import DeliveredProjects from "./routes/DeliveredProjects";
import DevProfile from "./routes/DevProfile";
import Footer from "./components/Footer";
import AdminPage from "./components/admin/AdminPanel";
import Ranking from "./components/Ranking";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Ranking />} />
        <Route path="/projetos" element={<AvailableProjects />} />
        <Route path="/projetos/:id" element={<ProjectDetails />} />
        <Route path="/entregas" element={<DeliveredProjects />} />
        <Route path="/dev/:id" element={<DevProfile />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
