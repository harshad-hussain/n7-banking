import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { ckycData } from '../data/mockData';
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaExclamationCircle, FaChevronDown, FaChevronUp, FaTimes, FaInbox } from 'react-icons/fa';

function CKYCDashboard() {
  const { summary, branchesTable, periodicChart, failedRecords } = ckycData;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedRecordId, setExpandedRecordId] = useState("0076541"); // expanded by default

  const toggleAccordion = (id) => {
    if (expandedRecordId === id) {
      setExpandedRecordId(null);
    } else {
      setExpandedRecordId(id);
    }
  };

  return (
    <DashboardLayout logo="CB7">
      <div className="space-y-6 relative">
        
        {/* Title Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-display">CKYC Dashboard</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Central KYC Records Registry</p>
          </div>
          <button className="text-xs px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-350 border border-slate-700 rounded-lg flex items-center gap-2 select-none shadow">
            <FaInbox />
            <span>File Upload Record</span>
          </button>
        </div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Total Customer */}
          <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-blue-500 shadow-md">
            <p className="text-2xl font-black font-display text-white">{summary.totalCustomer}</p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase mt-1">Total Customer</p>
          </div>

          {/* Card 2: In Progress */}
          <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-amber-500 shadow-md">
            <p className="text-2xl font-black font-display text-white">{summary.inProgress}</p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase mt-1">In Progress</p>
          </div>

          {/* Card 3: KYC Completed */}
          <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-emerald-500 shadow-md">
            <p className="text-2xl font-black font-display text-white">{summary.kycCompleted}</p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase mt-1">KYC Completed</p>
          </div>

          {/* Card 4: Failed Records (Interactive trigger) */}
          <div 
            onClick={() => setDrawerOpen(true)}
            className="glass-panel rounded-2xl p-5 border-l-4 border-l-rose-500 shadow-md cursor-pointer hover:bg-rose-950/20 transition-all group hover:scale-[1.02] active:scale-[0.99] flex justify-between items-center"
          >
            <div>
              <p className="text-2xl font-black font-display text-rose-500 group-hover:text-rose-450 transition-colors">
                {summary.failedRecords}
              </p>
              <p className="text-[11px] text-slate-400 font-semibold uppercase mt-1">Failed Records</p>
            </div>
            <span className="text-[9px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full group-hover:bg-rose-500/20 select-none">
              View Info
            </span>
          </div>

        </div>

        {/* Middle Columns: Branch Table & Composed Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Branch Table (3/5 columns) */}
          <div className="lg:col-span-3 glass-panel rounded-2xl p-6 shadow-md">
            <h3 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 mb-4">Branch Performance (All Branches)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-semibold bg-slate-800/20">
                    <th className="p-3">Branch ID</th>
                    <th className="p-3 text-center">Total Customer</th>
                    <th className="p-3 text-center">In Progress</th>
                    <th className="p-3 text-center">Completed</th>
                    <th className="p-3 text-center">Pending Review</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {branchesTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/15 text-slate-300 transition-colors">
                      <td className="p-3 font-semibold text-slate-200">{row.branch}</td>
                      <td className="p-3 text-center font-mono font-medium">{row.total}</td>
                      <td className="p-3 text-center font-mono text-amber-400">{row.inProgress}</td>
                      <td className="p-3 text-center font-mono text-emerald-400">{row.completed}</td>
                      <td className="p-3 text-center font-mono text-slate-400">{row.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Composed Chart (2/5 columns) */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 mb-4">Periodic Response | All Branches</h3>
            
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={periodicChart} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar name="Total Customer" dataKey="total" fill="#10b981" barSize={16} radius={[3, 3, 0, 0]} />
                  <Line name="Pass KYC" type="monotone" dataKey="pass" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="flex gap-4 justify-end mt-4 pt-3 border-t border-slate-800/60">
              <button className="text-[11px] px-3.5 py-1.5 rounded-lg border border-slate-700 text-slate-350 hover:bg-slate-800 hover:text-white transition-colors">
                Go to File Generate
              </button>
            </div>
          </div>

        </div>

        {/* Slide-out Failed Records Drawer Overlay (using Framer Motion) */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Dark backdrop blur */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
              />

              {/* Sidebar Drawer container */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 24, stiffness: 180 }}
                className="fixed top-0 right-0 h-full w-[380px] bg-slate-900 border-l border-slate-800 shadow-2xl p-6 overflow-y-auto z-50 flex flex-col text-slate-100"
              >
                {/* Header of Drawer */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center font-bold text-xs">
                      {summary.failedRecords}
                    </span>
                    <h3 className="font-extrabold text-sm text-slate-200">Failed Records</h3>
                  </div>
                  <button 
                    onClick={() => setDrawerOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Subtitle location context */}
                <div className="mb-4 text-xs font-semibold bg-slate-800/40 border border-slate-800 rounded-lg p-3">
                  <p className="text-slate-400">Branch No. 02</p>
                  <p className="text-slate-200 mt-0.5">Branch Name: Chandini Chowk</p>
                </div>

                {/* Expandable Accordion List */}
                <div className="space-y-3 flex-1">
                  {failedRecords.map((record) => {
                    const isExpanded = expandedRecordId === record.id;
                    return (
                      <div 
                        key={record.id} 
                        className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/20 shadow-sm"
                      >
                        {/* Header trigger */}
                        <div 
                          onClick={() => toggleAccordion(record.id)}
                          className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <FaUserCircle className="text-slate-500 text-lg" />
                            <div>
                              <p className="text-[10px] text-slate-500 font-mono">ID: {record.id}</p>
                              <p className="text-xs font-bold text-slate-200 mt-0.5">{record.name}</p>
                            </div>
                          </div>
                          {isExpanded ? <FaChevronUp size={10} className="text-slate-400" /> : <FaChevronDown size={10} className="text-slate-400" />}
                        </div>

                        {/* Content dropdown */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-slate-800/20 border-t border-slate-800"
                            >
                              <div className="p-4 space-y-4">
                                {/* Error reasons list */}
                                <div className="space-y-2">
                                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
                                    <FaExclamationCircle />
                                    <span>Failed Reasons</span>
                                  </p>
                                  <ul className="space-y-1.5 pl-3 list-decimal text-[11px] text-slate-350 font-medium">
                                    {record.reasons.map((reason, rIdx) => (
                                      <li key={rIdx} className="leading-relaxed">
                                        {reason}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Update Button */}
                                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow transition-colors">
                                  Update Information
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </DashboardLayout>
  );
}

export default CKYCDashboard;
