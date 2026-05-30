import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaHome, FaExchangeAlt, FaCreditCard, FaUser, FaDropbox, FaSpotify, FaYoutube, FaBriefcase, FaEllipsisH } from 'react-icons/fa';
import MobileShell from '../components/mobile/MobileShell';
import { mobileData } from '../data/mockData';

function MobileHome() {
  const navigate = useNavigate();
  const { user, transactions } = mobileData;

  const getTxIcon = (type) => {
    switch (type) {
      case 'dropbox': return <FaDropbox className="text-blue-500 text-lg" />;
      case 'spotify': return <FaSpotify className="text-emerald-500 text-lg" />;
      case 'youtube': return <FaYoutube className="text-rose-500 text-lg" />;
      default: return <FaBriefcase className="text-violet-500 text-lg" />;
    }
  };

  return (
    <MobileShell>
      <div className="flex-1 flex flex-col h-full bg-slate-50 text-slate-900 pb-20 overflow-y-auto no-scrollbar">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center bg-white border-b border-slate-100">
          <div>
            <p className="text-xs text-slate-400 font-medium">Welcome Back,</p>
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">{user.name}</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-1 text-slate-500 hover:text-slate-700">
              <FaBell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
            </button>
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover border border-slate-200" 
            />
          </div>
        </div>

        {/* Card Slider */}
        <div className="px-6 mt-6 select-none">
          <div className="flex overflow-x-auto gap-4 py-2 no-scrollbar snap-x snap-mandatory">
            {user.cards.map((card, idx) => (
              <div 
                key={idx}
                className={`snap-center shrink-0 w-[290px] h-[175px] bg-gradient-to-tr ${card.gradient} rounded-[24px] p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden`}
              >
                {/* Wave highlights inside credit card */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-indigo-200 to-indigo-900 pointer-events-none"></div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] text-sky-200/80 font-medium tracking-wider">BALANCE</p>
                    <p className="text-2xl font-bold font-display">${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <FaEllipsisH className="text-sky-200/70" />
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="text-[9px] text-sky-200/60 uppercase">CARD HOLDER</p>
                    <p className="text-xs font-semibold tracking-wider font-display uppercase">{user.name}</p>
                  </div>
                  <span className="text-sm font-bold tracking-widest font-display italic text-slate-100">{card.provider}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Header */}
        <div className="px-6 mt-6 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-800">Recent Transactions</h3>
          <button 
            onClick={() => navigate('/mobile/transaction')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            See all
          </button>
        </div>

        {/* Transactions List */}
        <div className="px-6 mt-3 space-y-3 flex-1">
          {transactions.map((tx) => (
            <div key={tx.id} className="bg-white rounded-2xl p-4 flex items-center justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                  {getTxIcon(tx.iconType)}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">{tx.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{tx.type} • {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs font-bold font-display ${tx.amount < 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                  {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Nav Bar (Absolute positioned in Shell) */}
        <div className="absolute bottom-0 w-full h-[64px] bg-white border-t border-slate-100 flex justify-around items-center px-4">
          <button className="flex flex-col items-center justify-center text-blue-600">
            <FaHome size={18} />
            <span className="text-[9px] font-semibold mt-0.5">Home</span>
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

          <button 
            onClick={() => navigate('/mobile/profile')}
            className="flex flex-col items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <FaUser size={16} />
            <span className="text-[9px] mt-0.5">Profile</span>
          </button>
        </div>

      </div>
    </MobileShell>
  );
}

export default MobileHome;