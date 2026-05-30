import React from 'react';
import { FaWifi, FaSignal, FaBatteryFull } from 'react-icons/fa';
function MobileShell({ children }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-[375px] h-[812px] bg-[#08060d] rounded-[52px] p-3.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 flex flex-col overflow-hidden">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-[22px] bg-black rounded-full z-50 flex items-center justify-between px-4">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-850"></div>
          <div className="w-4 h-1.5 rounded-full bg-slate-900"></div>
        </div>
        <div className="h-6 px-6 pt-1 flex justify-between items-center text-[11px] font-semibold text-black z-40 select-none bg-transparent">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <FaSignal size={10} />
            <FaWifi size={10} />
            <FaBatteryFull size={12} />
          </div>
        </div>
        <div className="flex-1 w-full bg-slate-50 rounded-[38px] overflow-hidden flex flex-col relative select-none">
          {children}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full z-50"></div>
      </div>
    </div>
  );
}
export default MobileShell;
