import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { LecturersPage } from "./pages/LecturersPage";
import { LecturerDetailPage } from "./pages/LecturerDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lecturers" element={<LecturersPage />} />
        <Route path="/lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;