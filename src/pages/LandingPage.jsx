import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaChevronRight, 
  FaChevronLeft,
  FaCheckCircle, 
  FaLaptop, 
  FaAngleRight, 
  FaDropbox,
  FaSpotify,
  FaArrowUp,
  FaHeart
} from 'react-icons/fa';
import { websiteData, mobileData } from '../data/mockData';
function LandingPage() {
  const navigate = useNavigate();
  const { solutions, brands, insights, caseStudies } = websiteData;
  const [activeCaseStudyIdx, setActiveCaseStudyIdx] = useState(0);
  const currentCaseStudy = caseStudies[activeCaseStudyIdx];
  const handleNextCaseStudy = () => {
    setActiveCaseStudyIdx((prev) => (prev + 1) % caseStudies.length);
  };
  const handlePrevCaseStudy = () => {
    setActiveCaseStudyIdx((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <nav className="sticky top-0 z-50 glass-panel border-x-0 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <span className="text-3xl font-black font-display text-blue-500 tracking-wider">
              N7
            </span>
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-350 select-none">
              <div className="group relative py-2">
                <button className="hover:text-white flex items-center gap-1">
                  Solutions <span className="text-[10px]">▼</span>
                </button>
              </div>
              <div className="group relative py-2">
                <button className="hover:text-white flex items-center gap-1">
                  Resources <span className="text-[10px]">▼</span>
                </button>
              </div>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs px-5 py-2.5 rounded-full border border-slate-700 font-bold hover:bg-slate-800 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </nav>
      <header className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display text-white">
              The new foundation <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                of modern banking
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              We drive innovation and growth, provide seamless customer experience and operational excellence across cloud core module interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all select-none">
                Request Demo
              </button>
              <button className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 font-bold text-sm transition-colors text-slate-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-[340px] md:w-[420px] h-[280px] md:h-[350px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10 animate-float bg-slate-850">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=450" 
                alt="Fintech user interface design" 
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>
            <div className="absolute top-[-20px] right-[-10px] md:right-[20px] glass-panel rounded-2xl p-4 shadow-xl z-20 w-[200px] select-none hover:scale-105 transition-transform text-left">
              <div className="flex items-center gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40&h=40" 
                  alt="Toni Kross User" 
                  className="w-8 h-8 rounded-full border border-slate-700" 
                />
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none">Toni Kross</p>
                  <p className="text-[8px] text-slate-500 font-mono mt-0.5">Good Morning</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[8px] text-slate-450 font-bold uppercase">Total Balance</p>
                <p className="text-base font-extrabold text-blue-400 font-display mt-0.5">$42,295.00 USD</p>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5 text-[8px] text-center font-bold font-mono">
                <div className="bg-slate-800/80 border border-slate-700 rounded py-1">Transfer</div>
                <div className="bg-slate-800/80 border border-slate-700 rounded py-1">Add</div>
                <div className="bg-slate-800/80 border border-slate-700 rounded py-1">More</div>
              </div>
            </div>
            <div className="absolute bottom-[-30px] left-[-10px] md:left-[20px] glass-panel rounded-2xl p-4 shadow-xl z-25 w-[210px] select-none hover:scale-105 transition-transform text-left">
              <p className="text-[10px] font-extrabold text-slate-350 border-b border-slate-800 pb-1.5 mb-2">Recent activity</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[9px] bg-slate-850/50 p-1.5 rounded-lg border border-slate-800/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[8px] uppercase">TJ</div>
                    <div>
                      <p className="font-bold text-slate-200 leading-none">To Jin</p>
                      <p className="text-[7px] text-slate-500 font-mono mt-0.5">Work</p>
                    </div>
                  </div>
                  <span className="font-bold text-slate-300">-$59.00</span>
                </div>
                <div className="flex justify-between items-center text-[9px] bg-slate-850/50 p-1.5 rounded-lg border border-slate-800/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[8px] uppercase">G</div>
                    <div>
                      <p className="font-bold text-slate-200 leading-none">Google Inc</p>
                      <p className="text-[7px] text-slate-500 font-mono mt-0.5">Salary</p>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-400">+$859.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="border-y border-slate-900 bg-[#06080e]/60 py-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Trusted By:
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {brands.map((brand, idx) => (
              <span key={idx} className="text-sm font-bold text-slate-500 hover:text-slate-400 cursor-default transition-colors uppercase font-display tracking-widest">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-1 text-left space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
              All of our solutions are tailor-made to your needs
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We construct custom API-based modules and modules tailored for banking infrastructure, digital transformations, and microfinance management.
            </p>
            <button className="text-xs px-6 py-3 rounded-xl border border-slate-700 font-bold hover:bg-slate-800 transition-colors">
              Request Demo
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div 
                key={sol.id}
                className="glass-panel rounded-2xl p-6 hover:bg-slate-800/20 transition-all duration-300 hover:scale-[1.02] shadow text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full select-none">
                    {sol.category}
                  </span>
                  <h4 className="text-lg font-bold text-slate-200 font-display group-hover:text-white transition-colors">{sol.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{sol.description}</p>
                </div>
                <button className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 mt-6 pt-2 select-none">
                  <span>Learn more</span>
                  <FaAngleRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#05080f]/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] font-black text-slate-900/10 tracking-widest font-display select-none pointer-events-none">
          N7 SYSTEM
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left z-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
              A complete cloud-based <br />
              core banking.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Faster time to market with our cloud-based core banking services designed for full automated module support, transaction controls, and analytics.
            </p>
            <div className="flex items-center gap-6 select-none">
              <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors">
                Request Demo
              </button>
              <button className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                <span>Learn More</span>
                <FaArrowRight size={10} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-900">
              {[
                "Customer-On Boarding",
                "Managing deposits and withdrawals",
                "Transaction management",
                "Interest Calculation",
                "Payments processing (cash, cards)",
                "CRM Activities",
                "Configuring New Products",
                "Loan disbursal and Management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-350">
                  <FaCheckCircle className="text-blue-500 shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center z-10 select-none">
            <div className="relative w-full max-w-[500px] border border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-slate-950 p-2">
              <div className="w-full bg-slate-900 rounded-lg aspect-[16/10] overflow-hidden border border-slate-800 p-1 flex flex-col justify-between">
                <div className="h-5 px-3 bg-slate-950 rounded flex justify-between items-center text-[8px] text-slate-400">
                  <span>AML Dashboard</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    <span className="font-mono">ID: 003</span>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-2 mt-2 p-1">
                  <div className="col-span-2 bg-slate-950 rounded p-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                      <div className="h-1.5 w-1/2 bg-slate-850 rounded"></div>
                    </div>
                    <div className="h-12 w-full bg-slate-900 rounded flex items-end justify-around p-1">
                      <div className="w-2 h-6 bg-emerald-500 rounded-t"></div>
                      <div className="w-2 h-10 bg-emerald-500 rounded-t"></div>
                      <div className="w-2 h-4 bg-emerald-500 rounded-t"></div>
                    </div>
                  </div>
                  <div className="bg-slate-950 rounded p-2 flex flex-col justify-between items-center">
                    <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border border-yellow-500 border-t-transparent"></div>
                    </div>
                    <div className="h-2 w-3/4 bg-slate-800 rounded mt-2"></div>
                  </div>
                </div>
                <div className="h-10 mt-2 space-y-1.5 bg-slate-950 rounded p-1.5">
                  <div className="h-1.5 bg-slate-800 rounded w-full"></div>
                  <div className="h-1.5 bg-slate-850 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#060910] overflow-hidden select-none">
        <div className="w-full bg-[#0a0f1d] border-y border-slate-900 py-3 mb-16 overflow-hidden flex whitespace-nowrap">
          <div className="animate-[scroll_20s_linear_infinite] flex gap-12 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            {Array(5).fill(0).map((_, idx) => (
              <span key={idx}>
                ★ N7 ★ Say Hello to the new way of banking ★ CB7 ★ Say Yes
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center order-last lg:order-first">
            <div className="w-[280px] h-[550px] bg-[#0c1222] border-4 border-slate-800 rounded-[40px] shadow-2xl p-2 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30"></div>
              <div className="h-6 flex justify-between items-center px-4 text-[9px] text-slate-400 mt-1">
                <span>9:41</span>
                <span>••• LTE</span>
              </div>
              <div className="flex-1 bg-white rounded-[32px] overflow-hidden flex flex-col justify-between p-4 text-slate-900 text-left mt-2">
                <div className="flex flex-col items-center mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60&h=60" 
                    alt="Toni Kross Avatar" 
                    className="w-14 h-14 rounded-full border border-slate-200" 
                  />
                  <p className="text-sm font-bold text-slate-800 font-display mt-2">Toni Kross</p>
                  <p className="text-[9px] text-slate-400">tonikross@gmail.com</p>
                </div>
                <div className="space-y-2 mt-4">
                  {["Profile setting", "Setting", "Support", "Sign out"].map((label, lIdx) => (
                    <div key={lIdx} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex justify-between items-center text-[10px] font-bold text-slate-700">
                      <span>{label}</span>
                      <span className="text-slate-350 text-[8px]">▶</span>
                    </div>
                  ))}
                </div>
                <div className="h-8 border-t border-slate-100 mt-4 flex justify-around items-center text-slate-350 text-[10px]">
                  <span>Home</span>
                  <span>Stats</span>
                  <span>Card</span>
                  <span className="text-blue-500 font-bold">Profile</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
              Digital banking <br />
              out-of-the-box
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              N7 helps your financial institution improve the client experience, automate and optimize procedures without traditional branches.
            </p>
            <div className="flex items-center gap-6">
              <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors">
                Request Demo
              </button>
              <button className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                <span>Learn More</span>
                <FaArrowRight size={10} />
              </button>
            </div>
            <div className="space-y-3.5 pt-6 border-t border-slate-900">
              {[
                "Branchless & Paperless Banking",
                "Digital Transformation Capability",
                "Optimized, Adoptable and Scalable"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FaCheckCircle className="text-blue-500 shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-[#0c1221] border-y border-slate-900 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
              Take the full advantage of <br />
              going paper-less now.
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations, and eliminate branch load.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold text-xs transition-colors">
              Contact Us
            </button>
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-lg shadow-blue-500/10">
              Request Demo
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Read our latest engineering guides, strategic whitepapers, and reports outlining core banking compliance changes.
            </p>
            <button className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold text-xs transition-colors">
              Insights Hub
            </button>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:bg-slate-800/15 transition-all text-left group">
              <div className="w-full md:w-44 h-32 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-800 shrink-0 relative overflow-hidden flex items-center justify-center text-white">
                <div className="grid grid-cols-2 gap-2 opacity-40">
                  <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                  <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">
                    {insights[0].category}
                  </span>
                  <h4 className="text-base font-bold text-slate-200 font-display mt-1 group-hover:text-white transition-colors">
                    {insights[0].title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 font-medium">
                    {insights[0].excerpt}
                  </p>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2 border-t border-slate-800/60">
                  <span>By {insights[0].author} • {insights[0].date}</span>
                  <button className="text-cyan-400 font-bold hover:underline select-none">Read more</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.slice(1).map((item) => (
                <div 
                  key={item.id}
                  className="glass-panel rounded-2xl p-5 hover:bg-slate-800/15 transition-all text-left flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-250 font-display group-hover:text-white transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-450 leading-relaxed font-medium">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[9px] text-slate-500 mt-6 pt-3 border-t border-slate-800/60">
                    <span>By {item.author}</span>
                    <button className="text-cyan-400 font-bold hover:underline select-none">Read more</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right select-none">
              <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 ml-auto">
                <span>Read all insights</span>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#05080e]/70 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white font-display">
              Our Case Studies
            </h2>
            <p className="text-slate-400 text-xs mt-2 font-medium">
              Read how leading finance and banking entities integrate CB7 and N7 modules for growth.
            </p>
          </div>
          <div className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center text-left relative overflow-hidden group">
            <div className="w-full md:w-52 h-44 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-800 to-cyan-600 shrink-0 relative overflow-hidden flex items-center justify-center text-white">
              <div className="grid grid-cols-2 gap-3 opacity-30 select-none">
                <div className="w-8 h-8 rounded border-2 border-white"></div>
                <div className="w-8 h-8 rounded border-2 border-white"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 h-full space-y-4">
              <div className="space-y-3">
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">
                  {currentCaseStudy.category}
                </span>
                <h4 className="text-lg font-bold text-slate-200 font-display">
                  {currentCaseStudy.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {currentCaseStudy.description}
                </p>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-slate-800/80 pt-4">
                <span className="font-bold text-slate-350">Client: {currentCaseStudy.client}</span>
                <button className="text-cyan-400 font-bold hover:underline">Read full story</button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 select-none">
            <button 
              onClick={handlePrevCaseStudy}
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
            >
              <FaChevronLeft size={12} />
            </button>
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeCaseStudyIdx ? 'bg-cyan-400 scale-110' : 'bg-slate-750'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNextCaseStudy}
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-900 bg-[#04060b] pt-20 pb-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
          <div className="space-y-6">
            <div className="h-14 flex items-center">
              <span className="text-4xl font-black font-display text-blue-500 tracking-wider">
                N7
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Copyright © 2022 by Linktia Infosystems Limited - [CB7 and N7 as Commercial Brand] - [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
          <div className="space-y-4 text-xs font-medium">
            <h5 className="text-white font-bold uppercase tracking-wider font-display">London Office</h5>
            <p className="leading-relaxed">
              Linktia Infosystems Ltd - CB7, <br />
              26 Main Road Sundridge, TN14 6EP, <br />
              England, United Kingdom.
            </p>
          </div>
          <div className="space-y-4 text-xs font-medium">
            <h5 className="text-white font-bold uppercase tracking-wider font-display">Dubai Office</h5>
            <p className="leading-relaxed">
              Linktia Infosystems Ltd - CB7, <br />
              Jumeirah Business, Center 5 Cluster W, <br />
              Jumeirah Lakes Towers, Dubai, UAE.
            </p>
          </div>
          <div className="space-y-4 text-xs font-medium">
            <h5 className="text-white font-bold uppercase tracking-wider font-display">Pune Office</h5>
            <p className="leading-relaxed">
              Linktia Infosystems Ltd - CB7, <br />
              Nirmal, Anand Nagar, Suncity Road, <br />
              Pune, Maharashtra, 411041, India.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-left border-t border-slate-900/60 pt-10 text-xs font-semibold select-none">
          <div className="space-y-3">
            <h6 className="text-white font-bold uppercase tracking-wider text-[10px]">Solutions</h6>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.id}>
                  <button className="hover:text-cyan-400 text-slate-500 transition-colors inline-flex items-center gap-1">
                    <span>{item.title}</span>
                    <FaAngleRight className="opacity-0 hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h6 className="text-white font-bold uppercase tracking-wider text-[10px]">N7 Banking</h6>
            <ul className="space-y-2">
              {["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"].map((lbl, idx) => (
                <li key={idx}>
                  <button className="hover:text-cyan-400 text-slate-500 transition-colors inline-flex items-center gap-1">
                    {lbl}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h6 className="text-white font-bold uppercase tracking-wider text-[10px]">Our Socials</h6>
            <ul className="space-y-2">
              {["LinkedIn", "X (formerly Twitter)"].map((lbl, idx) => (
                <li key={idx}>
                  <button className="hover:text-cyan-400 text-slate-500 transition-colors inline-flex items-center gap-1">
                    {lbl}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-950 flex justify-between items-center text-[10px] text-slate-650">
          <span>Registered under Co. Act England & Wales.</span>
          <span className="flex items-center gap-1 font-semibold">
            Made with <FaHeart className="text-rose-500 scale-95" /> for assignment review.
          </span>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;
