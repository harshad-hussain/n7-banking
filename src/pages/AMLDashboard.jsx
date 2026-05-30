import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { amlData } from '../data/mockData';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { FaBullseye, FaCalendarAlt, FaEllipsisV } from 'react-icons/fa';
function AMLDashboard() {
  const { summary, pieChart, barChart, reports } = amlData;
  const COLORS = pieChart.map(item => item.fill);
  return (
    <DashboardLayout logo="N7">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-display">AML Dashboard</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">System Activity Records</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-extrabold text-rose-500 font-display">{summary.strCount}</p>
                <p className="text-sm font-semibold text-slate-350 mt-1">Total STR (Suspicious Transaction Report)</p>
              </div>
              <button className="text-slate-500 hover:text-slate-300">
                <FaEllipsisV />
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">Critical alerts verified</span>
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                <FaBullseye className="text-lg" />
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-extrabold text-amber-500 font-display">{summary.pendingDays}</p>
                <p className="text-sm font-semibold text-slate-350 mt-1">Days Pending for AML Process</p>
              </div>
              <button className="text-slate-500 hover:text-slate-300">
                <FaEllipsisV />
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">Process latency targets met</span>
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <FaCalendarAlt className="text-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h3 className="text-sm font-bold text-slate-200">Suspicious Transactions (Reason Distribution)</h3>
              <button className="text-slate-500 hover:text-slate-350">
                <FaEllipsisV />
              </button>
            </div>
            <div className="h-64 flex justify-center items-center my-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChart}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieChart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-black text-white font-display">450</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">STR Case</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs pt-4 border-t border-slate-800/60">
              {pieChart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.fill }}></div>
                  <span className="text-slate-400 truncate">{item.name} ({item.value})</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 glass-panel rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h3 className="text-sm font-bold text-slate-200">STR Summary Timeline</h3>
              <div className="flex gap-2">
                <input 
                  type="date" 
                  defaultValue="2021-11-05" 
                  className="bg-slate-800 border border-slate-700 text-xs px-2.5 py-1 rounded text-slate-300 focus:outline-none"
                />
                <input 
                  type="date" 
                  defaultValue="2021-11-09" 
                  className="bg-slate-800 border border-slate-700 text-xs px-2.5 py-1 rounded text-slate-300 focus:outline-none"
                />
              </div>
            </div>
            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChart} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                  <XAxis 
                    dataKey="date" 
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
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  />
                  <Legend 
                    verticalAlign="top"
                    height={36}
                    iconSize={10}
                    tick={{ fill: '#cbd5e1', fontSize: 11 }}
                  />
                  <Bar name="Total Cleared Case" dataKey="cleared" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar name="Total Reported Case" dataKey="reported" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6 shadow-md overflow-hidden">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-slate-200">Suspicious Transactions Audit (AML Report)</h3>
            <button className="text-slate-500 hover:text-slate-350">
              <FaEllipsisV />
            </button>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold bg-slate-800/35">
                  <th className="p-4">AML Case ID</th>
                  <th className="p-4">Branch ID</th>
                  <th className="p-4">Identified Date</th>
                  <th className="p-4">Date of Transaction</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Account Number</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {reports.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-800/20 text-slate-300 transition-colors">
                    <td className="p-4 font-mono font-bold text-rose-400">#{row.id}</td>
                    <td className="p-4 font-medium">{row.branch}</td>
                    <td className="p-4 text-slate-400">{row.identifiedDate}</td>
                    <td className="p-4 text-slate-400">{row.transactionDate}</td>
                    <td className="p-4 font-mono">{row.mode}</td>
                    <td className="p-4 font-semibold text-white font-display">${row.amount}k</td>
                    <td className="p-4 font-mono">{row.type}</td>
                    <td className="p-4 text-slate-450 font-mono">•••• {row.account}</td>
                    <td className="p-4 text-right">
                      <button className="text-xs px-2.5 py-1 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600/20 transition-colors">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3 justify-end items-center mt-6 pt-4 border-t border-slate-800">
            <button className="text-xs px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-750 hover:text-white transition-colors">
              Generate Report
            </button>
            <button className="text-xs px-4 py-2 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/10 transition-colors">
              Report AML Case
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
export default AMLDashboard;
