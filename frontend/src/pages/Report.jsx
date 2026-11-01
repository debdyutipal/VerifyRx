import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import mockReport from "../data/mockReport";

const Report = () => {
  const location = useLocation();

  const image = location.state?.image;
  const uploadResult = location.state?.uploadResult;
  const scanData = uploadResult?.scan || mockReport;
  const riskData = scanData.riskAssessment || mockReport;
  
  const analysisId = scanData.id || `VRX-${Math.floor(Math.random() * 100000)}`;
  const generatedOn = scanData.generatedOn || new Date().toLocaleString();


  if (!image) {
    return <Navigate to="/upload" replace />;
  }
  return (
    <>
      <main className="flex-grow pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        {/* Header Section */}
        <header className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider mb-xs block">Analysis ID: #{analysisId}</span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Prescription Analysis Complete</h1>
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-label-md text-label-md">Generated on {generatedOn}</span>
          </div>
        </header>
        {/* Summary Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant">{riskData.riskLevel || 'UNKNOWN'}</span>
              <span className={`material-symbols-outlined ${riskData.riskLevel === 'CRITICAL' ? 'text-error' : riskData.riskLevel === 'WARNING' ? 'text-tertiary' : 'text-secondary'}`}>{riskData.riskLevel === 'SAFE' ? 'verified' : 'warning'}</span>
            </div>
            <div className={`text-headline-md font-headline-md ${riskData.riskLevel === 'CRITICAL' ? 'text-error' : riskData.riskLevel === 'WARNING' ? 'text-tertiary' : 'text-secondary'}`}>{riskData.riskLevel || 'UNKNOWN'}</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Medicines Detected</span>
              <span className="material-symbols-outlined text-primary">pill</span>
            </div>
            <div className="text-headline-md font-headline-md text-on-surface">{(scanData.medicines || []).length} Items</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Processing Time</span>
              <span className="material-symbols-outlined text-primary">timer</span>
            </div>
            <div className="text-headline-md font-headline-md text-on-surface">{scanData.processingTime || '7.1s'}</div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant">AI Confidence</span>
              <span className="material-symbols-outlined text-secondary">verified</span>
            </div>
            <div className="text-headline-md font-headline-md text-secondary">{riskData.confidence || '98%'}</div>
          </div>
        </div>
        {/* Main Layout Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Left Column (Wide) */}
          <div className="lg:col-span-8 space-y-lg">
            {/* Uploaded Image Preview */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-lg py-md border-b border-outline-variant flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Original Prescription Source</h2>
                <button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:underline">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span> View Full Screen
                </button>
              </div>
              <div className="aspect-video w-full bg-surface-container relative group cursor-pointer overflow-hidden">
                <img
                  src={image.preview}
                  alt="Uploaded Prescription"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-surface/90 px-lg py-sm rounded-full shadow-lg font-label-md flex items-center gap-sm">
                    <span className="material-symbols-outlined">zoom_in</span> Inspect Detected Regions
                  </div>
                </div>
              </div>
            </section>
            {/* Detected Medicines Table */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
              <div className="px-lg py-md border-b border-outline-variant">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Detected Medications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                      <th className="px-lg py-sm font-label-sm text-label-sm text-on-surface-variant uppercase">Medicine Name</th>
                      <th className="px-lg py-sm font-label-sm text-label-sm text-on-surface-variant uppercase">Dosage</th>
                      <th className="px-lg py-sm font-label-sm text-label-sm text-on-surface-variant uppercase">Frequency</th>
                      <th className="px-lg py-sm font-label-sm text-label-sm text-on-surface-variant uppercase w-48">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {(scanData.medicines || []).map((medicine, index) => (
                      <tr
                        key={index}
                        className="hover:bg-surface-container transition-colors"
                      >
                        <td className="px-lg py-md font-semibold">
                          {medicine.name || medicine.drugName || 'Unknown'}
                        </td>

                        <td className="px-lg py-md">
                          {medicine.dosage || '-'}
                        </td>

                        <td className="px-lg py-md">
                          {medicine.frequency || '-'}
                        </td>

                        <td className="px-lg py-md">
                          <div className="flex items-center gap-sm">
                            <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden">
                              <div
                                className="h-full bg-secondary"
                                style={{
                                  width: `${medicine.confidence || 95}%`,
                                }}
                              ></div>
                            </div>

                            <span>
                              {medicine.confidence || 95}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          {/* Right Column (Sidebar) */}
          <aside className="lg:col-span-4 space-y-lg">
            {/* AI Risk Assessment Card */}
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
              <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-md">AI Risk Assessment</h3>
              <div className="flex flex-col items-center py-md text-center">
                <div className={`w-24 h-24 rounded-full border-4 ${riskData.riskLevel === 'CRITICAL' ? 'border-error' : riskData.riskLevel === 'WARNING' ? 'border-tertiary' : 'border-secondary'} flex items-center justify-center mb-md relative`}>
                  <span className={`material-symbols-outlined ${riskData.riskLevel === 'CRITICAL' ? 'text-error' : riskData.riskLevel === 'WARNING' ? 'text-tertiary' : 'text-secondary'} text-[48px]`} style={{ fontVariationSettings: '"FILL" 1' }}>{riskData.riskLevel === 'SAFE' ? 'check_circle' : 'warning'}</span>
                  {riskData.riskLevel !== 'SAFE' && <div className={`absolute inset-0 rounded-full ${riskData.riskLevel === 'CRITICAL' ? 'bg-error/5' : 'bg-tertiary/5'} animate-pulse`}></div>}
                </div>
                <span className={`px-lg py-sm rounded-full ${riskData.riskLevel === 'CRITICAL' ? 'bg-error text-on-error' : riskData.riskLevel === 'WARNING' ? 'bg-tertiary text-on-tertiary' : 'bg-secondary text-on-secondary'} font-headline-sm text-headline-sm mb-sm`}>{riskData.riskLevel || 'UNKNOWN'}</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{riskData.riskLevel === 'SAFE' ? 'No significant interactions detected.' : 'Please review the warnings below.'}</p>
              </div>
            </div>
            {/* Drug Interaction Alerts */}
            {riskData.warnings && riskData.warnings.length > 0 && (
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-md">Interaction Alerts</h3>
                <div className="space-y-md">
                  {riskData.warnings.map((warning, idx) => (
                    <div key={idx} className={`p-md ${warning.severity === 'CRITICAL' ? 'bg-error-container/30 border border-error/20' : 'bg-tertiary-container/10 border border-tertiary/20'} rounded-lg`}>
                      <div className="flex items-start gap-sm mb-sm">
                        <span className={`material-symbols-outlined ${warning.severity === 'CRITICAL' ? 'text-error' : 'text-tertiary'} font-variation-settings: 'FILL' 1;`}>{warning.severity === 'CRITICAL' ? 'dangerous' : 'info'}</span>
                        <span className={`font-label-md text-label-md ${warning.severity === 'CRITICAL' ? 'text-on-error-container' : 'text-tertiary'} font-bold`}>{warning.severity}</span>
                      </div>
                      <h4 className="font-body-md text-body-md font-bold text-on-surface mb-xs">{warning.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{warning.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Medical Recommendation */}
            <div className="bg-primary/5 border border-primary/10 p-lg rounded-xl">
              <h3 className="font-label-sm text-label-sm text-primary uppercase mb-sm">AI Recommendation</h3>
              <div className="bg-white p-md rounded-lg border border-primary/20">
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  "{riskData.advice}"
                </p>
              </div>
              <p className="mt-md font-body-sm text-body-sm text-on-surface-variant italic opacity-70">
                * VerifyRx Disclaimer: This analysis is for informational purposes and does not replace professional medical advice. Always consult a licensed healthcare provider before taking or changing medication.
              </p>
            </div>
          </aside>
        </div>
        {/* Action Footer (Floating/Sticky Style) */}
        <div className="fixed bottom-0 left-0 w-full glass-panel border-t border-outline-variant z-40">
          <div className="max-w-[1440px] mx-auto px-margin-desktop py-md flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex items-center gap-md">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white">AI</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] text-white">MD</div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Validated by Clinical AI v4.2 &amp; Rx-Database v2.0</span>
            </div>
            <div className="flex items-center gap-md w-full md:w-auto">
              <button className="flex-1 md:flex-none px-xl py-md border border-outline text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container-low transition-colors active:scale-95">
                Analyze Another
              </button>
              <button className="flex-1 md:flex-none px-xl py-md bg-primary text-white font-label-md text-label-md rounded-xl shadow-lg hover:bg-primary-container transition-colors active:scale-95 flex items-center justify-center gap-sm">
                <span className="material-symbols-outlined text-[20px]">download</span> Download PDF Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
