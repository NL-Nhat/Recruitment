import React from 'react';
import { Outlet } from 'react-router-dom';

const CandidateLayout = () => {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)]">
      <div className="container-custom mx-auto px-4 py-8">
        {/* Main Content Area without side nav */}
        <main className="w-full bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm min-h-[500px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CandidateLayout;
