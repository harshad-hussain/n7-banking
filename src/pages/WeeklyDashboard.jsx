import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { weeklyData } from '../data/mockData';
import { 
  FaMountain, 
  FaPaintBrush, 
  FaGamepad, 
  FaPlus, 
  FaShoppingCart, 
  FaPlug, 
  FaPlane, 
  FaEllipsisV,
  FaArrowRight,
  FaCheck,
  FaLock
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
function WeeklyDashboard() {
  const { account, goals, outcomeStats, history, quickContacts } = weeklyData;
  const [cardActive, setCardActive] = useState(true);
  const [selectedContact, setSelectedContact] = useState("John");
  const [toastMessage, setToastMessage] = useState("");
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };
  const getGoalIcon = (icon) => {
    switch (icon) {
      case 'mountain': return <FaMountain className="text-blue-500 text-base" />;
      case 'brush': return <FaPaintBrush className="text-amber-500 text-base" />;
      default: return <FaGamepad className="text-emerald-500 text-base" />;
    }
  };
  const handleSendTransaction = () => {
    if (!cardActive) {
      triggerToast("Cannot complete transaction: Your card is currently deactivated!");
      return;
    }
    triggerToast(`Sent $50.00 to ${selectedContact} successfully!`);
  };
  return (
    <DashboardLayout logo="CB7">
      <div className="space-y-6 relative">
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -20, x: '-50%' }}
              className="fixed top-24 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-lg text-xs font-bold shadow-lg z-50 flex items-center gap-2"
            >
              <FaCheck className="text-emerald-450" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-display">Weekly sumup</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Get summary of your weekly online transactions here</p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <div className="glass-panel rounded-2xl p-6 shadow-md">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-6">
                <h3 className="text-sm font-bold text-slate-200">Cards</h3>
                <button className="text-slate-500 hover:text-slate-350">
                  <FaEllipsisV />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative w-full h-[180px] rounded-2xl shadow-lg overflow-hidden border border-sky-400/20 select-none">
                  <div className={`w-full h-full bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-800 p-6 text-white flex flex-col justify-between transition-all duration-300 ${
                    !cardActive ? 'opacity-35 grayscale blur-[0.8px]' : ''
                  }`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-300 via-red-200 to-indigo-900 pointer-events-none"></div>
                    <div className="flex justify-between items-start z-10">
                      <div>
                        <p className="text-[10px] text-sky-200 tracking-widest font-mono">PLATINUM ACCOUNT</p>
                        <p className="text-xs font-semibold text-sky-100 font-display">cloudc ash</p>
                      </div>
                      <span className="text-sm font-bold tracking-widest font-display italic text-slate-100 font-sans">CB7</span>
                    </div>
                    <div className="text-lg font-bold font-mono tracking-widest my-2 text-center z-10">
                      {account.cardNumber}
                    </div>
                    <div className="flex justify-between items-end z-10">
                      <div>
                        <p className="text-[8px] text-sky-200/60 uppercase">CARD HOLDER</p>
                        <p className="text-[10px] font-semibold tracking-wider font-display uppercase">{account.cardHolder}</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-sky-200/60 uppercase">EXPIRES</p>
                        <p className="text-[10px] font-semibold font-mono">{account.expiry}</p>
                      </div>
                    </div>
                  </div>
                  {!cardActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 z-20">
                      <FaLock className="text-white text-3xl animate-pulse" />
                      <span className="text-white text-xs font-bold uppercase tracking-widest mt-2">Card Locked</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Current Balance</p>
                    <p className="text-3xl font-extrabold text-white mt-1 font-display">
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Income</p>
                      <p className="text-sm font-bold text-emerald-400 font-display">+${account.income.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Outcome</p>
                      <p className="text-sm font-bold text-rose-400 font-display">-${account.outcome.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] text-slate-400 font-semibold mb-1">
                      <span>Weekly payment limit</span>
                      <span className="text-slate-350">${account.outcome.toFixed(2)} / ${account.limit}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${(account.outcome / account.limit) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 select-none">
                    <span className="text-xs font-semibold text-slate-350">Deactivate card</span>
                    <button 
                      onClick={() => {
                        setCardActive(!cardActive);
                        triggerToast(cardActive ? "Card deactivated successfully!" : "Card activated successfully!");
                      }}
                      className={`w-9 h-5 rounded-full transition-colors flex items-center p-0.5 ${
                        !cardActive ? 'bg-blue-600' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        !cardActive ? 'translate-x-4' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 shadow-md">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                <h3 className="text-sm font-bold text-slate-200">Transaction history</h3>
                <button className="text-slate-500 hover:text-slate-350">
                  <FaEllipsisV />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-450 font-semibold bg-slate-800/15">
                      <th className="p-3">Receiver</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {history.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/15 text-slate-300 transition-colors">
                        <td className="p-3 font-semibold text-slate-200">{row.receiver}</td>
                        <td className="p-3 text-slate-400">{row.type}</td>
                        <td className="p-3 text-slate-450">{row.date}</td>
                        <td className={`p-3 text-right font-bold font-display ${row.amount > 100 ? 'text-rose-500' : 'text-slate-200'}`}>
                          -${row.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 space-y-6">
            <div className="glass-panel rounded-2xl p-6 shadow-md">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                <h3 className="text-sm font-bold text-slate-200">Goals</h3>
                <button 
                  onClick={() => triggerToast("Add new goal dialog requested.")}
                  className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                >
                  <FaPlus size={10} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {goals.map((goal) => (
                  <div 
                    key={goal.id}
                    className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex flex-col justify-between items-center text-center shadow-sm hover:scale-[1.03] transition-all cursor-pointer"
                    onClick={() => triggerToast(`Goal Details: ${goal.title} ($${goal.target})`)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-700/50 border border-slate-650 flex items-center justify-center mb-2">
                      {getGoalIcon(goal.icon)}
                    </div>
                    <p className="text-[13px] font-bold text-white font-display">${goal.target}</p>
                    <p className="text-[9px] text-slate-400 font-semibold uppercase mt-0.5">{goal.title}</p>
                    <p className="text-[8px] text-slate-500 mt-2 font-mono">{goal.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 mb-2">Outcome Statistics</h3>
              <div className="space-y-1.5 select-none">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                      <FaShoppingCart size={11} />
                    </div>
                    <span>Shopping</span>
                  </div>
                  <span className="font-bold text-slate-200 font-display">{outcomeStats.shopping}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: `${outcomeStats.shopping}%` }}></div>
                </div>
              </div>
              <div className="space-y-1.5 select-none">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <FaPlug size={11} />
                    </div>
                    <span>Electronics</span>
                  </div>
                  <span className="font-bold text-slate-200 font-display">{outcomeStats.electronics}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${outcomeStats.electronics}%` }}></div>
                </div>
              </div>
              <div className="space-y-1.5 select-none">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <FaPlane size={11} />
                    </div>
                    <span>Travels</span>
                  </div>
                  <span className="font-bold text-slate-200 font-display">{outcomeStats.travels}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${outcomeStats.travels}%` }}></div>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 mb-4">New transaction</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 flex gap-3 overflow-x-auto py-1 no-scrollbar select-none">
                  {quickContacts.map((contact, idx) => {
                    const isSelected = selectedContact === contact.name;
                    return (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedContact(contact.name)}
                        className={`flex flex-col items-center shrink-0 cursor-pointer p-1 rounded-xl transition-all ${
                          isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-full ${contact.avatarColor} text-white flex items-center justify-center font-bold text-[11px] border border-slate-700/50 transition-all ${
                          isSelected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900' : ''
                        }`}>
                          {contact.initials}
                        </div>
                        <span className={`text-[10px] font-semibold mt-1 uppercase tracking-tight ${
                          isSelected ? 'text-blue-400 font-bold' : 'text-slate-400'
                        }`}>{contact.name}</span>
                      </div>
                    );
                  })}
                </div>
                <button 
                  onClick={handleSendTransaction}
                  className="w-10 h-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shrink-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-blue-500/15 active:scale-[0.97] transition-all"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
export default WeeklyDashboard;
