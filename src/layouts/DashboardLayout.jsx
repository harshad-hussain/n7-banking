import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaChartBar, 
  FaFileAlt, 
  FaTasks, 
  FaUsers, 
  FaCog, 
  FaQuestionCircle, 
  FaCreditCard, 
  FaFileInvoiceDollar, 
  FaTrophy,
  FaSearch,
  FaBell,
  FaGlobe
} from 'react-icons/fa';
function DashboardLayout({ logo = "N7", children }) {
  const location = useLocation();
  const isWeekly = location.pathname.includes('weekly');
  const links = [
    { to: "/dashboard/aml", label: "AML Dashboard", icon: FaChartBar },
    { to: "/dashboard/ckyc", label: "CKYC Dashboard", icon: FaFileAlt },
    { to: "/dashboard/weekly", label: "Weekly Summary", icon: FaTrophy },
  ];
  const dummyLinks = isWeekly 
    ? [
        { label: "Transactions", icon: FaTasks },
        { label: "Cards", icon: FaCreditCard },
        { label: "Invoices", icon: FaFileInvoiceDollar },
        { label: "Goals", icon: FaTrophy },
        { label: "Settings", icon: FaCog },
      ]
    : [
        { label: "Documents", icon: FaFileAlt },
        { label: "Tasks", icon: FaTasks },
        { label: "Users", icon: FaUsers },
        { label: "Settings", icon: FaCog },
        { label: "Help Center", icon: FaQuestionCircle }
      ];
  return (
    <div className="min-h-screen bg-[#0b0f19] flex text-slate-100 font-sans">
      <aside className="w-64 bg-[#0e1726] border-r border-slate-800 flex flex-col shrink-0">
        <div className="h-20 px-6 flex items-center border-b border-slate-800">
          <span className="text-3xl font-extrabold text-blue-500 tracking-wider font-display">
            {logo}
          </span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Dashboards
            </p>
            <ul className="space-y-1.5">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-500/10'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                        }`
                      }
                    >
                      <Icon className="text-lg shrink-0" />
                      <span>{link.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              System Modules
            </p>
            <ul className="space-y-1">
              {dummyLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <li key={idx}>
                    <button
                      disabled
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-500 cursor-not-allowed hover:bg-slate-800/30 transition-colors"
                    >
                      <Icon className="text-base shrink-0" />
                      <span>{link.label}</span>
                      <span className="ml-auto text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 scale-90">
                        Lock
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        {isWeekly && (
          <div className="p-4 mx-4 mb-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <FaCreditCard className="text-blue-400" />
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Give your money awesome space in cloud
            </p>
          </div>
        )}
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-[#0e1726] border-b border-slate-800 px-8 flex justify-between items-center shrink-0">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400 text-sm" />
            </span>
            <input
              type="text"
              placeholder="Search menus or cases..."
              className="w-full bg-slate-800 border border-slate-750 text-slate-200 placeholder-slate-400 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-colors"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col text-right text-xs border-r border-slate-800 pr-4">
              <span className="text-slate-400">Maruti Chowk Branch</span>
              <span className="font-semibold text-slate-300">ID: 003 • Bank 2.0</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button className="flex items-center gap-1 hover:text-slate-200 text-xs">
                <FaGlobe />
                <span>EN</span>
              </button>
              <button className="relative hover:text-slate-200">
                <FaBell />
                <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
              </button>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="text-right hidden md:block">
                <p className="text-xs font-semibold text-slate-200">Andrew K.</p>
                <p className="text-[10px] text-slate-400">Admin Account</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Admin Avatar"
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8 bg-[#0b0f19]">
          {children}
        </main>
      </div>
    </div>
  );
}
export default DashboardLayout;
