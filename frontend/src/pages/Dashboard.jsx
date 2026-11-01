import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/scans/dashboard');
        if (response.data.success) {
          setStats(response.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard stats', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <main className="flex-grow pt-24 pb-3xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full flex justify-center items-center">
        <p className="font-headline-sm text-primary animate-pulse">Loading Dashboard Statistics...</p>
      </main>
    );
  }

  // Fallback if stats fail to load
  const data = stats || {
    totalScanned: 0,
    safeReports: 0,
    warningReports: 0,
    criticalReports: 0,
    recentActivity: [],
    topMedicines: [],
    frequentInteractions: []
  };

  const total = Math.max(1, data.totalScanned);
  const safePercent = Math.round((data.safeReports / total) * 100) || 0;
  const warningPercent = Math.round((data.warningReports / total) * 100) || 0;
  const criticalPercent = Math.round((data.criticalReports / total) * 100) || 0;

  return (
    <>
      <main className="flex-grow pt-24 pb-3xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <header className="mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Analytics Dashboard</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time prescription verification and risk intelligence overview.</p>
        </header>
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
          {/* Total Scanned */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <div className="flex justify-between items-start mb-sm">
              <span className="p-xs bg-surface-container-high rounded text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </span>
            </div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Scanned</h3>
            <div className="font-headline-md text-headline-md text-on-surface">{data.totalScanned.toLocaleString()}</div>
          </div>
          {/* Safe Reports */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <div className="flex justify-between items-start mb-sm">
              <span className="p-xs bg-secondary-container/30 rounded text-secondary">
                <span className="material-symbols-outlined">check_circle</span>
              </span>
            </div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Safe Reports</h3>
            <div className="font-headline-md text-headline-md text-on-surface">{data.safeReports.toLocaleString()}</div>
          </div>
          {/* Warning Reports */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <div className="flex justify-between items-start mb-sm">
              <span className="p-xs bg-tertiary-container/10 rounded text-tertiary">
                <span className="material-symbols-outlined">warning</span>
              </span>
            </div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Warning Reports</h3>
            <div className="font-headline-md text-headline-md text-on-surface">{data.warningReports.toLocaleString()}</div>
          </div>
          {/* Critical Reports */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <div className="flex justify-between items-start mb-sm">
              <span className="p-xs bg-error-container/30 rounded text-error">
                <span className="material-symbols-outlined">dangerous</span>
              </span>
            </div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Critical Reports</h3>
            <div className="font-headline-md text-headline-md text-on-surface">{data.criticalReports.toLocaleString()}</div>
          </div>
        </div>
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg mb-xl">
          {/* Pie Chart: Risk Distribution */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm mb-xl">Risk Distribution</h2>
            <div className="relative w-48 h-48 mx-auto mb-xl">
              {/* Minimal CSS Donut Chart */}
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#E2E8F0" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#006c49" strokeDasharray={`${safePercent} ${100 - safePercent}`} strokeDashoffset="0" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#784b00" strokeDasharray={`${warningPercent} ${100 - warningPercent}`} strokeDashoffset={`-${safePercent}`} strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#ba1a1a" strokeDasharray={`${criticalPercent} ${100 - criticalPercent}`} strokeDashoffset={`-${safePercent + warningPercent}`} strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-headline-md font-bold">{data.totalScanned > 0 ? 100 : 0}%</span>
                <span className="text-label-sm text-on-surface-variant">Validated</span>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-sm">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="text-body-sm">Safe ({safePercent}%)</span>
                </div>
                <span className="text-label-md font-bold">{data.safeReports.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-sm">
                  <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                  <span className="text-body-sm">Warning ({warningPercent}%)</span>
                </div>
                <span className="text-label-md font-bold">{data.warningReports.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-sm">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <span className="text-body-sm">Critical ({criticalPercent}%)</span>
                </div>
                <span className="text-label-md font-bold">{data.criticalReports.toLocaleString()}</span>
              </div>
            </div>
          </div>
          {/* Bar Chart: Most Common Medicines */}
          <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm mb-xl">Most Common Medicines</h2>
            <div className="space-y-lg">
              {data.topMedicines.map((med, index) => {
                const maxCount = data.topMedicines[0]?.count || 1;
                const widthPercent = Math.max(5, (med.count / maxCount) * 100);
                return (
                  <div key={index}>
                    <div className="flex justify-between text-body-sm mb-xs">
                      <span className="capitalize">{med.name}</span>
                      <span className="font-bold">{med.count.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${widthPercent}%` }}></div>
                    </div>
                  </div>
                );
              })}
              {data.topMedicines.length === 0 && <p className="text-on-surface-variant font-body-sm">No medicines data available.</p>}
            </div>
          </div>
        </div>
        
        {/* Horizontal Bar Chart: Frequent Interactions */}
        {data.frequentInteractions.length > 0 && (
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm mb-xl">
            <h2 className="font-headline-sm text-headline-sm mb-xl">Frequent Interactions</h2>
            <div className="flex flex-col gap-lg">
              {data.frequentInteractions.map((interaction, index) => {
                const maxCount = data.frequentInteractions[0]?.count || 1;
                const widthPercent = Math.max(10, (interaction.count / maxCount) * 100);
                const isCritical = interaction.severity === 'CRITICAL';
                
                return (
                  <div key={index} className="flex items-center gap-md">
                    <div className="flex-grow">
                      <div className="text-body-sm mb-1">{interaction.title}</div>
                      <div className="h-6 flex items-center">
                        <div 
                          className={`h-full rounded-r-md flex items-center px-sm transition-all duration-1000 ${isCritical ? 'bg-error-container/50 border border-error/20' : 'bg-tertiary-container/30 border border-tertiary/20'}`} 
                          style={{ width: `${widthPercent}%` }}
                        >
                          <span className={`text-[10px] font-bold ${isCritical ? 'text-error' : 'text-tertiary'}`}>{interaction.severity}</span>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-headline-sm">{interaction.count.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recent Activity Table */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
          <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm">Recent Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">ID</th>
                  <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Patient ID</th>
                  <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Risk Badge</th>
                  <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {data.recentActivity.map((scan, index) => {
                  const risk = scan.riskAssessment?.riskLevel || 'UNKNOWN';
                  return (
                    <tr key={index} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-lg py-md font-label-md">#{scan.id}</td>
                      <td className="px-lg py-md text-body-sm">{new Date(scan.timestamp).toLocaleString()}</td>
                      <td className="px-lg py-md text-body-sm">{scan.patientId}</td>
                      <td className="px-lg py-md">
                        <span className={`px-sm py-1 text-[10px] font-bold rounded-full border ${risk === 'CRITICAL' ? 'bg-error-container/30 text-error border-error/20' : risk === 'WARNING' ? 'bg-tertiary-container/10 text-tertiary border-tertiary/20' : 'bg-secondary-container/20 text-on-secondary-container border-secondary/20'}`}>
                          {risk}
                        </span>
                      </td>
                      <td className="px-lg py-md text-body-sm">{scan.status}</td>
                    </tr>
                  );
                })}
                {data.recentActivity.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-lg py-xl text-center text-on-surface-variant">No recent scans.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
