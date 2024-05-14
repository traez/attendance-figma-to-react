"use client";
import { useState } from "react";

export default function Explore() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly'); 

  const handlePlanChange = (plan: 'monthly' | 'yearly') => {
    setSelectedPlan(plan);
  };

  return (
    <nav className="flex flex-col items-center justify-around h-full w-full text-center">
      <article className="w-[345px] xs:w-[380px] sm:w-[510px] text-3xl xs:text-4xl sm:text-5xl font-black tracking-tighter">
        Explore our pricing plans
      </article>
      <article className="text-xs leading-5 w-[345px] xs:w-[380px] sm:w-[510px]">
        Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam
        nulla purus, facilisis vitae odio ac, tempus aliquet dolor.
      </article>
      <article className="flex justify-between gap-5 p-3 text-base font-semibold tracking-normal bg-white rounded-[1000px]">
        <div
          className={`justify-center px-8 py-3 rounded-[170px] cursor-pointer ${
            selectedPlan === 'monthly' ? 'bg-amber-300 text-slate-900' : 'text-gray-400'
          }`}
          onClick={() => handlePlanChange('monthly')}
        >
          Monthly
        </div>
        <div
          className={`justify-center px-8 py-3 rounded-[170px] cursor-pointer ${
            selectedPlan === 'yearly' ? 'bg-amber-300 text-slate-900' : 'text-gray-400'
          }`}
          onClick={() => handlePlanChange('yearly')}
        >
          Yearly
        </div>
      </article>
    </nav>
  );
}
