import LandingPage from "./pages/LandingPage";
import Library from "./pages/Library";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="font-Poppins text-textPrimary bg-backgroundPrimary">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}
