import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaExchangeAlt, FaCreditCard, FaUser, FaChevronRight, FaCog, FaHeadphones, FaSignOutAlt } from 'react-icons/fa';
import MobileShell from '../components/mobile/MobileShell';
import { mobileData } from '../data/mockData';
function MobileProfile() {
  const navigate = useNavigate();
  const { user } = mobileData;
  const menuItems = [
    { label: "Profile setting", icon: FaUser, color: "text-slate-600 bg-slate-100" },
    { label: "Setting", icon: FaCog, color: "text-slate-600 bg-slate-100" },
    { label: "Support", icon: FaHeadphones, color: "text-slate-600 bg-slate-100" },
    { label: "Sign out", icon: FaSignOutAlt, color: "text-rose-500 bg-rose-50" }
  ];
  return (
    <MobileShell>
      <div className="flex-1 flex flex-col h-full bg-slate-50 text-slate-900 pb-20 overflow-y-auto no-scrollbar">
        <div className="bg-white px-6 pt-10 pb-8 flex flex-col items-center border-b border-slate-100 text-center select-none">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-lg font-bold text-slate-800 tracking-tight mt-4 font-display">{user.name}</h2>
          <p className="text-xs text-slate-400 font-medium">{user.email}</p>
        </div>
        <div className="px-6 mt-6 space-y-3 flex-1 select-none">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button 
                key={idx}
                className="w-full bg-white rounded-2xl p-4 flex items-center justify-between border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{item.label}</span>
                </div>
                <FaChevronRight size={10} className="text-slate-300" />
              </button>
            );
          })}
        </div>
        <div className="absolute bottom-0 w-full h-[64px] bg-white border-t border-slate-100 flex justify-around items-center px-4">
          <button 
            onClick={() => navigate('/mobile')}
            className="flex flex-col items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <FaHome size={16} />
            <span className="text-[9px] mt-0.5">Home</span>
          </button>
          <button 
            onClick={() => navigate('/mobile/transaction')}
            className="flex flex-col items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <FaExchangeAlt size={16} />
            <span className="text-[9px] mt-0.5">Stats</span>
          </button>
          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-slate-600">
            <FaCreditCard size={16} />
            <span className="text-[9px] mt-0.5">Card</span>
          </button>
          <button className="flex flex-col items-center justify-center text-blue-600">
            <FaUser size={18} />
            <span className="text-[9px] font-semibold mt-0.5">Profile</span>
          </button>
        </div>
      </div>
    </MobileShell>
  );
}
export default MobileProfile;
