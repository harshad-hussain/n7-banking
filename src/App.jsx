import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MobileHome from './pages/MobileHome';
import MobileTransaction from './pages/MobileTransaction';
import MobileProfile from './pages/MobileProfile';
import AMLDashboard from './pages/AMLDashboard';
import CKYCDashboard from './pages/CKYCDashboard';
import WeeklyDashboard from './pages/WeeklyDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobileHome />} />
        <Route path="/mobile/transaction" element={<MobileTransaction />} />
        <Route path="/mobile/profile" element={<MobileProfile />} />
        <Route path="/dashboard/aml" element={<AMLDashboard />} />
        <Route path="/dashboard/ckyc" element={<CKYCDashboard />} />
        <Route path="/dashboard/weekly" element={<WeeklyDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;