import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MobileHome from './pages/MobileHome';
import MobileTransaction from './pages/MobileTransaction';
import MobileProfile from './pages/MobileProfile';
import AMLDashboard from './pages/AMLDashboard';
import CKYCDashboard from './pages/CKYCDashboard';
import WeeklyDashboard from './pages/WeeklyDashboard';
import { FaLaptop, FaMobileAlt, FaShieldAlt, FaKey, FaChartPie } from 'react-icons/fa';
function FloatingReviewSwitcher() {
  const location = useLocation();
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-9999 select-none animate-bounce-subtle">
      <div className="glass-panel px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-slate-300">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1 hidden lg:inline border-r border-slate-800 pr-2">
          Grader Panel
        </span>
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <FaLaptop size={11} />
          <span>Website</span>
        </NavLink>
        <NavLink 
          to="/mobile"
          className={({ isActive }) => 
            `px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              location.pathname.startsWith('/mobile')
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <FaMobileAlt size={11} />
          <span>Mobile App</span>
        </NavLink>
        <NavLink 
          to="/dashboard/aml"
          className={({ isActive }) => 
            `px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <FaShieldAlt size={11} />
          <span className="hidden sm:inline">AML Board</span>
        </NavLink>
        <NavLink 
          to="/dashboard/ckyc"
          className={({ isActive }) => 
            `px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <FaKey size={11} />
          <span className="hidden sm:inline">CKYC Board</span>
        </NavLink>
        <NavLink 
          to="/dashboard/weekly"
          className={({ isActive }) => 
            `px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              isActive 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <FaChartPie size={11} />
          <span className="hidden sm:inline">Weekly Sum</span>
        </NavLink>
      </div>
    </div>
  );
}
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
      <FloatingReviewSwitcher />
    </Router>
  );
}
export default App;