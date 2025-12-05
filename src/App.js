import React, { useState } from 'react';

// --- INLINE ICONS ---
const IconTruck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="1" y="5" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);
const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconFuel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42l-5.24-3.42"/></svg>
);
const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconRefresh = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
);
const IconPercent = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>
);
const IconTrending = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);

// --- HELPER COMPONENTS ---

const InputSlider = ({ label, val, set, min, max, step, fmt, suffix }) => (
  <div>
    <div className="flex justify-between mb-1">
      <label className="text-xs font-medium text-slate-500">{label}</label>
      <span className="text-xs font-bold text-slate-800">
        {fmt ? fmt(val) : val}
        {suffix && <span className="text-[10px] font-normal text-slate-400 ml-0.5">{suffix}</span>}
      </span>
    </div>
    <input 
      type="range" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))}
      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
    />
  </div>
);

const InputField = ({ label, val, set, step=1, compact }) => (
  <div>
    <label className={`block text-xs text-slate-500 ${compact ? 'mb-0.5' : 'mb-1'}`}>{label}</label>
    <input 
      type="number" step={step} value={val} onChange={e => set(Number(e.target.value))}
      className={`w-full border border-slate-200 rounded px-2 text-right text-slate-700 focus:outline-none focus:border-indigo-400 ${compact ? 'py-1 text-xs' : 'py-1.5 text-sm'}`}
    />
  </div>
);

const ReadOnlyField = ({ label, val }) => (
  <div>
    <label className="block text-xs text-slate-400 mb-0.5">{label}</label>
    <div className="w-full bg-slate-100 border border-slate-200 rounded py-1 px-2 text-right text-xs text-slate-500 font-medium">
      {val}
    </div>
  </div>
);

const EMICard = ({ title, amount, loan, roi, color, icon, type }) => {
  const getColors = (c) => {
    switch(c) {
      case 'emerald': return { bg: 'bg-emerald-500', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-100' };
      case 'slate': return { bg: 'bg-slate-500', iconBg: 'bg-slate-100', iconText: 'text-slate-600', border: 'border-slate-200' };
      case 'orange': return { bg: 'bg-orange-500', iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'border-orange-200' };
      default: return { bg: 'bg-slate-500', iconBg: 'bg-slate-100', iconText: 'text-slate-600', border: 'border-slate-200' };
    }
  };
  const theme = getColors(color);

  return (
    <div className={`p-4 rounded-xl border relative overflow-hidden bg-white ${theme.border}`}>
      <div className={`absolute top-0 left-0 w-1 h-full ${theme.bg}`}></div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{title}</h3>
          <div className="text-xl font-bold text-slate-800">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)}
          </div>
          <div className="text-[9px] text-slate-400 mt-1 flex items-center gap-1">
            Loan: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(loan)} @ {roi}%
            <span className="bg-slate-100 px-1 rounded text-[8px] uppercase">{type}</span>
          </div>
        </div>
        <div className={`p-1.5 rounded-full ${theme.iconBg} ${theme.iconText}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, v1, v2, v3, isCost, isHeader }) => {
  const toINR = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);
   
  if (isHeader) {
     return (
      <tr className="bg-slate-50 border-t border-slate-200 text-xs">
        <td className="py-2 px-3 font-bold text-slate-700">{label}</td>
        <td className="py-2 px-3 text-right font-bold text-emerald-600">Electric</td>
        <td className="py-2 px-3 text-right font-bold text-slate-600">Diesel</td>
        <td className="py-2 px-3 text-right font-bold text-orange-600">CNG</td>
      </tr>
     )
  }

  return (
    <tr className="text-sm border-b border-slate-50 last:border-0">
      <td className="py-2.5 px-3 text-slate-600 font-medium">{label}</td>
      <td className={`py-2.5 px-3 text-right ${isCost ? 'text-red-500' : 'text-slate-800 font-medium'}`}>
        {isCost && '-'}{toINR(v1)}
      </td>
      <td className={`py-2.5 px-3 text-right ${isCost ? 'text-red-500' : 'text-slate-800 font-medium'}`}>
        {isCost && '-'}{toINR(v2)}
      </td>
      <td className={`py-2.5 px-3 text-right ${isCost ? 'text-red-500' : 'text-slate-800 font-medium'}`}>
        {isCost && '-'}{toINR(v3)}
      </td>
    </tr>
  );
};

const ProfitBar = ({ label, val, color, max }) => {
  const height = max > 0 ? Math.max((val / max) * 100, 0) : 0;
  const annualProfit = val * 12;
   
  return (
    <div className="flex flex-col items-center justify-end h-full w-24 group">
      <div 
        className={`w-full rounded-t-lg transition-all duration-500 relative ${color}`} 
        style={{ height: `${height}%` }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
          Monthly: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)}
        </div>
      </div>
      <div className="mt-2 font-bold text-slate-700 text-xs">{label}</div>
      <div className="text-xs font-bold text-slate-800 mt-0.5">
        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(annualProfit)}
      </div>
      <div className="text-[10px] text-slate-400">per year</div>
    </div>
  );
};

// --- MAIN APPLICATION ---

const App = () => {
  // Global Settings
  const [interestMethod, setInterestMethod] = useState('reducing'); // 'reducing' | 'flat'

  // 1. EV Loan Inputs
  const [evPrice, setEvPrice] = useState(1500000);
  const [evLtv, setEvLtv] = useState(85);
  const [evRoi, setEvRoi] = useState(10.5);
  const [evTenure, setEvTenure] = useState(60);
  const [evResalePerc, setEvResalePerc] = useState(40); // % of vehicle price

  // 2. Diesel Loan Inputs
  const [dslPrice, setDslPrice] = useState(1100000);
  const [dslLtv, setDslLtv] = useState(80);
  const [dslRoi, setDslRoi] = useState(11.5);
  const [dslTenure, setDslTenure] = useState(60);
  const [dslResalePerc, setDslResalePerc] = useState(35); // % of vehicle price

  // 3. CNG Loan Inputs
  const [cngPrice, setCngPrice] = useState(1050000);
  const [cngLtv, setCngLtv] = useState(80);
  const [cngRoi, setCngRoi] = useState(11.5);
  const [cngTenure, setCngTenure] = useState(60);
  const [cngResalePerc, setCngResalePerc] = useState(30); // % of vehicle price

  // 4. Operational Inputs
  const [evGrossIncome, setEvGrossIncome] = useState(120000);
  const [dslGrossIncome, setDslGrossIncome] = useState(120000);
  const [cngGrossIncome, setCngGrossIncome] = useState(120000);
   
  const [dailyKm, setDailyKm] = useState(180);
  const [daysPerMonth, setDaysPerMonth] = useState(26);
  const [driverCost, setDriverCost] = useState(18000);
   
  const [evMaintPerKm, setEvMaintPerKm] = useState(0.5);
  const [dslMaintPerKm, setDslMaintPerKm] = useState(1.5);
  const [cngMaintPerKm, setCngMaintPerKm] = useState(1.2);

  // 5. Fuel & Efficiency Inputs
  const [fuelMode, setFuelMode] = useState('efficiency'); 
   
  const [dslCostPerL, setDslCostPerL] = useState(96);
  const [dslMileage, setDslMileage] = useState(14); // km/L
   
  const [evCostPerUnit, setEvCostPerUnit] = useState(9);
  const [evRangePerUnit, setEvRangePerUnit] = useState(7); // km/kWh

  const [cngCostPerKg, setCngCostPerKg] = useState(85);
  const [cngMileage, setCngMileage] = useState(20); // km/kg

  // Calculations
  const calculateEMI = (principal, rate, months, type) => {
    if (rate === 0 || months === 0) return 0;
    
    if (type === 'flat') {
      const years = months / 12;
      const totalInterest = principal * (rate / 100) * years;
      return (principal + totalInterest) / months;
    } else {
      const r = rate / 12 / 100;
      const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      return emi;
    }
  };

  const totalMonthlyKm = dailyKm * daysPerMonth;

  // Fuel Calculations
  const dslMonthlyFuelCost = (totalMonthlyKm / dslMileage) * dslCostPerL;
  const evMonthlyFuelCost = (totalMonthlyKm / evRangePerUnit) * evCostPerUnit;
  const cngMonthlyFuelCost = (totalMonthlyKm / cngMileage) * cngCostPerKg;

  const handleDslCostInput = (cost) => {
    if (cost > 0 && totalMonthlyKm > 0) {
      const impliedMileage = (totalMonthlyKm * dslCostPerL) / cost;
      setDslMileage(impliedMileage);
    }
  };

  const handleEvCostInput = (cost) => {
    if (cost > 0 && totalMonthlyKm > 0) {
      const impliedEfficiency = (totalMonthlyKm * evCostPerUnit) / cost;
      setEvRangePerUnit(impliedEfficiency);
    }
  };

  const handleCngCostInput = (cost) => {
    if (cost > 0 && totalMonthlyKm > 0) {
      const impliedMileage = (totalMonthlyKm * cngCostPerKg) / cost;
      setCngMileage(impliedMileage);
    }
  };

  // Monthly Profit/Loss
  // EV
  const evLoanAmt = evPrice * (evLtv / 100);
  const evEMI = calculateEMI(evLoanAmt, evRoi, evTenure, interestMethod);
  const evMaintCost = totalMonthlyKm * evMaintPerKm;
  const evTotalOpEx = evMonthlyFuelCost + evMaintCost + driverCost;
  const evNetProfit = evGrossIncome - evTotalOpEx - evEMI;

  // Diesel
  const dslLoanAmt = dslPrice * (dslLtv / 100);
  const dslEMI = calculateEMI(dslLoanAmt, dslRoi, dslTenure, interestMethod);
  const dslMaintCost = totalMonthlyKm * dslMaintPerKm;
  const dslTotalOpEx = dslMonthlyFuelCost + dslMaintCost + driverCost;
  const dslNetProfit = dslGrossIncome - dslTotalOpEx - dslEMI;

  // CNG
  const cngLoanAmt = cngPrice * (cngLtv / 100);
  const cngEMI = calculateEMI(cngLoanAmt, cngRoi, cngTenure, interestMethod);
  const cngMaintCost = totalMonthlyKm * cngMaintPerKm;
  const cngTotalOpEx = cngMonthlyFuelCost + cngMaintCost + driverCost;
  const cngNetProfit = cngGrossIncome - cngTotalOpEx - cngEMI;

  // 60-Month Projections
  // Calculate Resale Value based on %
  const evResale = evPrice * (evResalePerc / 100);
  const dslResale = dslPrice * (dslResalePerc / 100);
  const cngResale = cngPrice * (cngResalePerc / 100);

  const evTotalProfit60 = evNetProfit * 60;
  const dslTotalProfit60 = dslNetProfit * 60;
  const cngTotalProfit60 = cngNetProfit * 60;
   
  const evLifecycleValue = evTotalProfit60 + evResale;
  const dslLifecycleValue = dslTotalProfit60 + dslResale;
  const cngLifecycleValue = cngTotalProfit60 + cngResale;

  const toINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  const toNum = (val) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(val);

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-slate-800 overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 p-1.5 rounded-lg text-slate-900">
            <IconTruck />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">EV vs Diesel vs CNG Modeler</h1>
            <p className="text-xs text-slate-400">Total Cost of Ownership Analysis</p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs text-slate-400">Monthly Run</div>
          <div className="text-sm font-bold text-emerald-400">{totalMonthlyKm.toLocaleString()} km</div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* --- LEFT SIDEBAR: INPUTS --- */}
        <div className="w-full md:w-[360px] bg-white border-r border-slate-200 overflow-y-auto">
          <div className="p-5 space-y-8">
            
            {/* Interest Method Toggle */}
            <div className="flex items-center justify-between bg-indigo-50 p-2 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-2 text-indigo-800 text-sm font-semibold">
                <IconPercent /> <span>Interest Type</span>
              </div>
              <div className="flex bg-white rounded-md border border-indigo-200 p-0.5">
                <button 
                  onClick={() => setInterestMethod('reducing')}
                  className={`px-2 py-1 text-[10px] rounded font-medium transition-colors ${interestMethod === 'reducing' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  Reducing
                </button>
                <button 
                  onClick={() => setInterestMethod('flat')}
                  className={`px-2 py-1 text-[10px] rounded font-medium transition-colors ${interestMethod === 'flat' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  Flat Rate
                </button>
              </div>
            </div>

            {/* 1. EV LOAN */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-emerald-700 font-bold border-b border-emerald-100 pb-2">
                <IconZap /> <span>EV Loan Specs</span>
              </div>
              <div className="space-y-4">
                <InputSlider label="Vehicle Price" val={evPrice} set={setEvPrice} min={800000} max={3000000} step={50000} fmt={toINR} />
                <InputSlider label="LTV (%)" val={evLtv} set={setEvLtv} min={50} max={100} step={1} suffix="%" />
                <InputSlider label="ROI (%)" val={evRoi} set={setEvRoi} min={5} max={25} step={0.1} suffix="%" />
                <InputSlider label="Tenure (Months)" val={evTenure} set={setEvTenure} min={12} max={84} step={6} suffix="mo" />
              </div>
            </section>

            {/* 2. DIESEL LOAN */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold border-b border-slate-100 pb-2">
                <IconFuel /> <span>Diesel Loan Specs</span>
              </div>
              <div className="space-y-4">
                <InputSlider label="Vehicle Price" val={dslPrice} set={setDslPrice} min={500000} max={2500000} step={50000} fmt={toINR} />
                <InputSlider label="LTV (%)" val={dslLtv} set={setDslLtv} min={50} max={100} step={1} suffix="%" />
                <InputSlider label="ROI (%)" val={dslRoi} set={setDslRoi} min={5} max={25} step={0.1} suffix="%" />
                <InputSlider label="Tenure (Months)" val={dslTenure} set={setDslTenure} min={12} max={84} step={6} suffix="mo" />
              </div>
            </section>

            {/* 3. CNG LOAN */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold border-b border-orange-100 pb-2">
                <IconFlame /> <span>CNG Loan Specs</span>
              </div>
              <div className="space-y-4">
                <InputSlider label="Vehicle Price" val={cngPrice} set={setCngPrice} min={500000} max={2500000} step={50000} fmt={toINR} />
                <InputSlider label="LTV (%)" val={cngLtv} set={setCngLtv} min={50} max={100} step={1} suffix="%" />
                <InputSlider label="ROI (%)" val={cngRoi} set={setCngRoi} min={5} max={25} step={0.1} suffix="%" />
                <InputSlider label="Tenure (Months)" val={cngTenure} set={setCngTenure} min={12} max={84} step={6} suffix="mo" />
              </div>
            </section>

             {/* 5. RESALE ASSUMPTIONS (MODIFIED) */}
             <section>
              <div className="flex items-center gap-2 mb-4 text-indigo-600 font-bold border-b border-indigo-100 pb-2">
                <IconTrending /> <span>Resale % (of Price)</span>
              </div>
              <div className="space-y-4">
                 <InputSlider label="EV Resale %" val={evResalePerc} set={setEvResalePerc} min={0} max={100} step={1} suffix="%" />
                 <InputSlider label="Diesel Resale %" val={dslResalePerc} set={setDslResalePerc} min={0} max={100} step={1} suffix="%" />
                 <InputSlider label="CNG Resale %" val={cngResalePerc} set={setCngResalePerc} min={0} max={100} step={1} suffix="%" />
              </div>
            </section>

            {/* 3. OPERATIONS */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-indigo-700 font-bold border-b border-indigo-100 pb-2">
                <IconSettings /> <span>Market Assumptions</span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  <InputField label="EV Income" val={evGrossIncome} set={setEvGrossIncome} />
                  <InputField label="Diesel Income" val={dslGrossIncome} set={setDslGrossIncome} />
                  <InputField label="CNG Income" val={cngGrossIncome} set={setCngGrossIncome} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="Daily Km" val={dailyKm} set={setDailyKm} />
                  <InputField label="Days/Month" val={daysPerMonth} set={setDaysPerMonth} />
                </div>
                <InputField label="Driver & Labor Cost (Mo)" val={driverCost} set={setDriverCost} />
                <div className="grid grid-cols-3 gap-2">
                  <InputField label="EV Maint (₹/km)" val={evMaintPerKm} set={setEvMaintPerKm} step={0.1} compact/>
                  <InputField label="Diesel Maint" val={dslMaintPerKm} set={setDslMaintPerKm} step={0.1} compact/>
                  <InputField label="CNG Maint" val={cngMaintPerKm} set={setCngMaintPerKm} step={0.1} compact/>
                </div>
              </div>
            </section>

            {/* 4. FUEL & REVERSE CALC */}
            <section className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase">Fuel Calculation</span>
                <button 
                  onClick={() => setFuelMode(prev => prev === 'efficiency' ? 'cost' : 'efficiency')}
                  className="flex items-center gap-1 text-[10px] bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-100 transition"
                >
                  <IconRefresh />
                  {fuelMode === 'efficiency' ? 'Cost Input' : 'Efficiency'}
                </button>
              </div>

              {/* Diesel Fuel Inputs */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-slate-600 mb-1">Diesel Specs</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <InputField label="Price/L" val={dslCostPerL} set={setDslCostPerL} compact />
                  {fuelMode === 'efficiency' ? (
                     <InputField label="Mileage (km/L)" val={dslMileage} set={setDslMileage} step={0.5} compact />
                  ) : (
                     <ReadOnlyField label="Implied Mileage" val={toNum(dslMileage)} />
                  )}
                </div>
                {fuelMode === 'cost' && (
                  <div className="bg-white p-2 rounded border border-indigo-200">
                    <label className="block text-[10px] text-slate-500">Total Monthly Cost</label>
                    <input 
                      type="number" 
                      className="w-full font-bold text-slate-800 text-right outline-none border-b border-indigo-300 focus:border-indigo-500"
                      value={Math.round(dslMonthlyFuelCost)}
                      onChange={(e) => handleDslCostInput(Number(e.target.value))}
                    />
                  </div>
                )}
              </div>

              {/* CNG Fuel Inputs */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-orange-600 mb-1">CNG Specs</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <InputField label="Price/Kg" val={cngCostPerKg} set={setCngCostPerKg} compact />
                  {fuelMode === 'efficiency' ? (
                     <InputField label="Mileage (km/kg)" val={cngMileage} set={setCngMileage} step={0.5} compact />
                  ) : (
                     <ReadOnlyField label="Implied Mileage" val={toNum(cngMileage)} />
                  )}
                </div>
                {fuelMode === 'cost' && (
                  <div className="bg-white p-2 rounded border border-orange-200">
                    <label className="block text-[10px] text-orange-600">Total Monthly Cost</label>
                    <input 
                      type="number" 
                      className="w-full font-bold text-orange-800 text-right outline-none border-b border-orange-300 focus:border-orange-500"
                      value={Math.round(cngMonthlyFuelCost)}
                      onChange={(e) => handleCngCostInput(Number(e.target.value))}
                    />
                  </div>
                )}
              </div>

              {/* EV Fuel Inputs */}
              <div>
                <div className="text-xs font-semibold text-emerald-700 mb-1">EV Specs</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <InputField label="Cost/Unit" val={evCostPerUnit} set={setEvCostPerUnit} compact />
                  {fuelMode === 'efficiency' ? (
                     <InputField label="Range (km/kWh)" val={evRangePerUnit} set={setEvRangePerUnit} step={0.5} compact />
                  ) : (
                     <ReadOnlyField label="Implied Range" val={toNum(evRangePerUnit)} />
                  )}
                </div>
                {fuelMode === 'cost' && (
                  <div className="bg-white p-2 rounded border border-emerald-200">
                    <label className="block text-[10px] text-emerald-600">Total Monthly Cost</label>
                    <input 
                      type="number" 
                      className="w-full font-bold text-emerald-800 text-right outline-none border-b border-emerald-300 focus:border-emerald-500"
                      value={Math.round(evMonthlyFuelCost)}
                      onChange={(e) => handleEvCostInput(Number(e.target.value))}
                    />
                  </div>
                )}
              </div>
            </section>

          </div>
        </div>

        {/* --- RIGHT PANEL: DASHBOARD --- */}
        <div className="flex-1 bg-slate-50 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto space-y-6">

            {/* 1. EMI Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <EMICard 
                title="EV EMI" 
                amount={evEMI} 
                loan={evLoanAmt} 
                roi={evRoi} 
                color="emerald" 
                icon={<IconZap />}
                type={interestMethod}
              />
              <EMICard 
                title="Diesel EMI" 
                amount={dslEMI} 
                loan={dslLoanAmt} 
                roi={dslRoi} 
                color="slate" 
                icon={<IconFuel />}
                type={interestMethod}
              />
              <EMICard 
                title="CNG EMI" 
                amount={cngEMI} 
                loan={cngLoanAmt} 
                roi={cngRoi} 
                color="orange" 
                icon={<IconFlame />}
                type={interestMethod}
              />
            </div>

            {/* 2. Detailed P&L Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-slate-700">Monthly P&L Comparison</h3>
                <span className="text-xs bg-white border px-2 py-1 rounded text-slate-500">Based on {totalMonthlyKm.toLocaleString()} km</span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <Row label="Metric" isHeader />
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <Row label="Gross Revenue" v1={evGrossIncome} v2={dslGrossIncome} v3={cngGrossIncome} />
                  <Row label="Fuel / Energy" v1={evMonthlyFuelCost} v2={dslMonthlyFuelCost} v3={cngMonthlyFuelCost} isCost />
                  <Row label="Maintenance" v1={evMaintCost} v2={dslMaintCost} v3={cngMaintCost} isCost />
                  <Row label="Driver & Labor" v1={driverCost} v2={driverCost} v3={driverCost} isCost />
                  <tr className="bg-slate-50 font-semibold">
                    <td className="py-3 px-3 text-slate-700">Operating Profit (EBITDA)</td>
                    <td className="py-3 px-3 text-right text-emerald-700">{toINR(evGrossIncome - evTotalOpEx)}</td>
                    <td className="py-3 px-3 text-right text-slate-700">{toINR(dslGrossIncome - dslTotalOpEx)}</td>
                    <td className="py-3 px-3 text-right text-orange-700">{toINR(cngGrossIncome - cngTotalOpEx)}</td>
                  </tr>
                  <Row label="EMI (Loan)" v1={evEMI} v2={dslEMI} v3={cngEMI} isCost />
                  
                  {/* Final Net Profit */}
                  <tr className="bg-indigo-50 border-t-2 border-indigo-100 text-base">
                    <td className="py-4 px-3 font-bold text-indigo-900">Net Profit</td>
                    <td className="py-4 px-3 text-right font-bold text-emerald-600">{toINR(evNetProfit)}</td>
                    <td className="py-4 px-3 text-right font-bold text-slate-600">{toINR(dslNetProfit)}</td>
                    <td className="py-4 px-3 text-right font-bold text-orange-600">{toINR(cngNetProfit)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3. Visual Analysis */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-6">Annual Profit Projection</h4>
              <div className="flex items-end justify-center gap-8 h-48">
                <ProfitBar label="EV" val={evNetProfit} color="bg-emerald-500" max={Math.max(evNetProfit, dslNetProfit, cngNetProfit)} />
                <ProfitBar label="Diesel" val={dslNetProfit} color="bg-slate-500" max={Math.max(evNetProfit, dslNetProfit, cngNetProfit)} />
                <ProfitBar label="CNG" val={cngNetProfit} color="bg-orange-500" max={Math.max(evNetProfit, dslNetProfit, cngNetProfit)} />
              </div>
            </div>

             {/* 4. 60-Month Projection Card (REPOSITIONED) */}
             <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl shadow-lg text-white overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6 border-b border-indigo-700 pb-3">
                   <IconTrending />
                   <h3 className="font-bold text-lg">60-Month Lifecycle Comparison</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 relative">
                   {/* Center Divider Lines (Visual trickery if needed, but flex gap handles it) */}

                   {/* EV Projection */}
                   <div className="text-center">
                      <div className="text-emerald-400 font-bold mb-2 uppercase tracking-wider text-xs border-b border-indigo-700 pb-1">Electric</div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-indigo-300 text-[10px]">Profit (60mo)</div>
                          <div className="text-lg font-bold">{toINR(evTotalProfit60)}</div>
                        </div>
                        <div>
                          <div className="text-indigo-300 text-[10px]">Resale ({evResalePerc}%)</div>
                          <div className="text-base font-semibold">{toINR(evResale)}</div>
                        </div>
                        <div className="pt-2 border-t border-indigo-700 mt-1">
                           <div className="text-[10px] text-indigo-300 uppercase">Total Value</div>
                           <div className="text-xl font-bold text-emerald-300">{toINR(evLifecycleValue)}</div>
                        </div>
                      </div>
                   </div>

                   {/* Diesel Projection */}
                   <div className="text-center border-l border-r border-indigo-700 px-2">
                      <div className="text-slate-300 font-bold mb-2 uppercase tracking-wider text-xs border-b border-indigo-700 pb-1">Diesel</div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-indigo-300 text-[10px]">Profit (60mo)</div>
                          <div className="text-lg font-bold">{toINR(dslTotalProfit60)}</div>
                        </div>
                         <div>
                          <div className="text-indigo-300 text-[10px]">Resale ({dslResalePerc}%)</div>
                          <div className="text-base font-semibold">{toINR(dslResale)}</div>
                        </div>
                        <div className="pt-2 border-t border-indigo-700 mt-1">
                           <div className="text-[10px] text-indigo-300 uppercase">Total Value</div>
                           <div className="text-xl font-bold text-white">{toINR(dslLifecycleValue)}</div>
                        </div>
                      </div>
                   </div>

                   {/* CNG Projection */}
                   <div className="text-center">
                      <div className="text-orange-400 font-bold mb-2 uppercase tracking-wider text-xs border-b border-indigo-700 pb-1">CNG</div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-indigo-300 text-[10px]">Profit (60mo)</div>
                          <div className="text-lg font-bold">{toINR(cngTotalProfit60)}</div>
                        </div>
                         <div>
                          <div className="text-indigo-300 text-[10px]">Resale ({cngResalePerc}%)</div>
                          <div className="text-base font-semibold">{toINR(cngResale)}</div>
                        </div>
                        <div className="pt-2 border-t border-indigo-700 mt-1">
                           <div className="text-[10px] text-indigo-300 uppercase">Total Value</div>
                           <div className="text-xl font-bold text-orange-300">{toINR(cngLifecycleValue)}</div>
                        </div>
                      </div>
                   </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;