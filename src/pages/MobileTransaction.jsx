import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaExchangeAlt, FaCreditCard, FaUser, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import MobileShell from '../components/mobile/MobileShell';
import { mobileData } from '../data/mockData';
function MobileTransaction() {
  const navigate = useNavigate();
  const { user, statsChart, recentActivity } = mobileData;
  const [activeTab, setActiveTab] = useState('This Week');
  return (
    <MobileShell>
      <div className="flex-1 flex flex-col h-full bg-slate-50 text-slate-900 pb-20 overflow-y-auto no-scrollbar">
        <div className="px-6 pt-6 pb-2 bg-white">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">March 2022</p>
          <h2 className="text-2xl font-black text-slate-800 font-display">${user.statsBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
        </div>
        <div className="h-32 bg-white px-4 pb-2 border-b border-slate-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statsChart} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
              />
              <Bar dataKey="Spend" radius={[4, 4, 0, 0]}>
                {statsChart.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.name === 'Mar' ? '#0f172a' : '#cbd5e1'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 px-6 mt-4 select-none">
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FaArrowDown size={12} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-medium leading-none">Income</p>
              <p className="text-sm font-bold text-slate-700 mt-1 font-display">$453.00</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <FaArrowUp size={12} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-medium leading-none">Spend</p>
              <p className="text-sm font-bold text-slate-700 mt-1 font-display">$453.00</p>
            </div>
          </div>
        </div>
        <div className="px-6 mt-6">
          <div className="flex gap-2 bg-slate-100/80 p-1 rounded-xl">
            {['This Day', 'This Week', 'This Month', '6 Month'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab === '6 Month' ? '6 Month' : tab.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
        <div className="px-6 mt-4 space-y-2 flex-1">
          {(recentActivity[activeTab] || []).map((act) => (
            <div key={act.id} className="bg-white rounded-xl p-3.5 flex items-center justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
                  act.type === 'incoming' 
                    ? 'bg-blue-600 rotate-45' 
                    : 'bg-violet-500 -rotate-135'
                }`}>
                  <FaArrowUp />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">{act.name}</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">{act.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs font-bold font-display ${act.type === 'outgoing' ? 'text-slate-700' : 'text-blue-600'}`}>
                  {act.type === 'outgoing' ? '-' : '+'}${Math.abs(act.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-[64px] bg-white border-t border-slate-100 flex justify-around items-center px-4">
          <button 
            onClick={() => navigate('/mobile')}
            className="flex flex-col items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <FaHome size={16} />
            <span className="text-[9px] mt-0.5">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center text-blue-600">
            <FaExchangeAlt size={18} />
            <span className="text-[9px] font-semibold mt-0.5">Stats</span>
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
export default MobileTransaction;
