import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-3xl px-margin-desktop max-w-[1440px] mx-auto min-h-[819px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center z-10">
            <div className="space-y-xl">
              <div className="inline-flex items-center gap-sm px-md py-xs bg-secondary-container/30 text-secondary rounded-full border border-secondary/20">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-label-sm font-label-sm">FDA-Database Synchronized</span>
              </div>
              <h1 className="font-display text-display text-on-surface leading-tight">
                Verify Prescriptions with AI <span className="text-primary">Before</span> Medication Errors Happen
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px]">
                Upload handwritten or printed prescriptions and instantly detect medicines, dosages, possible drug interactions, and safety risks using trusted medical databases and AI.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link to="/upload">
                  <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 active:scale-95">
                    <span className="material-symbols-outlined text-2xl">
                      document_scanner
                    </span>
                    <span>Scan Prescription</span>
                  </button>
                </Link>
                <button className="px-2xl py-md border border-outline-variant text-on-surface rounded-xl font-label-md text-lg flex items-center gap-sm hover:bg-surface-container transition-all active:scale-95">
                  <span className="material-symbols-outlined">play_circle</span>
                  View Demo
                </button>
              </div>
              <div className="flex items-center gap-md pt-md">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-cover" data-alt="Close-up portrait of a professional female doctor in a white lab coat, smiling confidently in a modern bright clinical setting. High-key lighting, professional healthcare photography style." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTCmOuVBQMdNSBtFrKDzbnfXV5xiIBKdlDXF_KvXQBDJP9gRFSwIWQ7LJqysSm1CIRFBGhbRAArj5_l5Dp3twU21Lb1jsRLmrdQGvnHmyR5G0gN-RZkwlDFtGpkaS7vYYDYvgQGPrUOCtvr5U0wn74NEAWOku42fIJ8efnYp5eVYERWjlvUUpAt94HrzDSuz58kl-DPK2xBs9lHehKtQm8HwsxgtfYNmnY5oyjW12InXti28flSAv-")' }}></div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-cover" data-alt="Close-up portrait of a senior pharmacist with glasses, looking helpful and knowledgeable, professional lighting, medical background. Soft blue and white tones." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKq7PZk2ytTvxiG0a7tS_e4cvh8dCFPg2D9yKsTnC3SV-fKuKMrQkRc6kAfCZcBgOSK0UXhE-BSwwGU7Y0ltwcnww8C17xH7TzmGcc5yYK4oc9vkUcUwBxRs0DTEchfkSxw7MaDnNpiTUAywVVXNiB6Rfw1Q67ATv_LkZXB10GMGHkumPFyM6fkU4ZmM-HHc8WwntQiN__xRT-K4gkZiAOfeaPWnlaDq40zeuKPFuyboTAPwAscu8o")' }}></div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-cover" data-alt="Portrait of a young male medical technician in blue scrubs, neutral background, sharp focus, professional medical aesthetic." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKkCCR8HOqFIYk91K_A1G-EueFbM-kUY_gi-N6FWNTUSAskRKVJQ8O3gPHmnfgB8AxCJjbguz1FN71krkR-B9Be6lrouZBna3dPuVioH5KIyLKI7i7eaF62t9--RqV4eDqTmDAN7_Gy4_9sI3NjsyDAWIHn_4fKcMcZ1BGAT8nn14EMaJEbTCcVIqMQAxS4YU0UnpkOszDrwodBR3ABNT0DSC5gOZ6VUPAeMib-No4Cqa8LUzU91X1")' }}></div>
                </div>
                <p className="text-label-sm text-on-surface-variant">Trusted by <span className="font-bold text-on-surface">2,500+</span> Healthcare Professionals</p>
              </div>
            </div>
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-125"></div>
              <div className="relative w-full max-w-[448px] aspect-[3/4] glass-card rounded-[32px] shadow-2xl p-md overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[24px] bg-cover bg-center shadow-inner" data-alt="A high-quality, professional studio shot of a hand holding a modern smartphone scanning a physical prescription paper. The screen shows a sophisticated UI highlighting text in green. The background is a clean, minimalist medical office with soft natural lighting and blue accents." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCgQGewv0huVb0v9S7ay-hJmMM9bHJZWqXPNsMhKVHfy67zvheU49Wfv-L6XyuQEeVUoeDuFChLU7_ePQDDJNJAl4sE3lqzcDGJOnbRQgzJ9h7FLQFzC2kbeiL_WeJaEl_pQENa5MHkQPEPHLjWNdWgiRYZcV_jbV9rxLyENuzl1KYuLzB-pz115Frsd2OBKcbAnzvr4tJMmcmTFBuj-LDk4vVhr71ZsvhsB3Ls5g2iBKqE6DAhNWT")' }}></div>
                {/* Floating UI Elements */}
                <div className="absolute top-1/4 -right-10 glass-card p-sm rounded-xl shadow-lg flex items-center gap-sm animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-8 h-8 bg-on-secondary-container text-white rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-bold">Amoxicillin</p>
                    <p className="text-[10px] text-on-surface-variant">Dosage Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Bento Grid */}
        <section className="py-3xl px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-md">Advanced AI Diagnostics</h2>
            <p className="text-body-md text-on-surface-variant max-w-[672px] mx-auto">Precision engineering meets healthcare safety. Our platform combines multiple neural networks to ensure every prescription is interpreted with surgical accuracy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* Card 1 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">document_scanner</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">OCR Prescription Scanner</h3>
              <p className="text-body-sm text-on-surface-variant">Proprietary high-accuracy text extraction technology designed specifically for handwriting and medical terminology.</p>
            </div>
            {/* Card 2 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">pill</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">AI Drug Detection</h3>
              <p className="text-body-sm text-on-surface-variant">Instantly identifies over 10,000+ FDA-approved drugs, including generics and specialized biologicals.</p>
            </div>
            {/* Card 3 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">monitoring</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Dosage Verification</h3>
              <p className="text-body-sm text-on-surface-variant">Automated cross-referencing against standard medical guidelines to flag potential over or under-dosing.</p>
            </div>
            {/* Card 4 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-error/10 text-error rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">warning</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Drug Interaction Checker</h3>
              <p className="text-body-sm text-on-surface-variant">Deep scanning for harmful drug-to-drug and drug-to-allergy combinations using live medical databases.</p>
            </div>
            {/* Card 5 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">description</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Explainable AI Reports</h3>
              <p className="text-body-sm text-on-surface-variant">Get simple, non-technical risk summaries that patients can actually understand, improving adherence.</p>
            </div>
            {/* Card 6 */}
            <div className="p-xl glass-card rounded-xl hover:shadow-md transition-all group border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-md">dashboard</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Analytics Dashboard</h3>
              <p className="text-body-sm text-on-surface-variant">Comprehensive history tracking and trend analysis to help medical offices improve prescription accuracy over time.</p>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-3xl bg-surface-container-low px-margin-desktop">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-2xl">
              <h2 className="font-headline-lg text-headline-lg">Verification Workflow</h2>
              <p className="text-body-md text-on-surface-variant">From paper to certainty in under 30 seconds.</p>
            </div>
            <div className="relative">
              {/* Steps for Desktop */}
              <div className="hidden md:flex justify-between relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center w-48">
                  <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-md shadow-lg">
                    <span className="material-symbols-outlined">upload_file</span>
                  </div>
                  <h4 className="font-label-md text-on-surface mb-xs">Upload</h4>
                  <p className="text-[12px] text-on-surface-variant">Snap or upload prescription image</p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center w-48">
                  <div className="w-16 h-16 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center mb-md shadow-sm">
                    <span className="material-symbols-outlined">text_fields</span>
                  </div>
                  <h4 className="font-label-md text-on-surface mb-xs">OCR Extraction</h4>
                  <p className="text-[12px] text-on-surface-variant">AI reads the handwritten text</p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center w-48">
                  <div className="w-16 h-16 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center mb-md shadow-sm">
                    <span className="material-symbols-outlined">search_check</span>
                  </div>
                  <h4 className="font-label-md text-on-surface mb-xs">Detection</h4>
                  <p className="text-[12px] text-on-surface-variant">Identify specific medicines</p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center w-48">
                  <div className="w-16 h-16 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center mb-md shadow-sm">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <h4 className="font-label-md text-on-surface mb-xs">Cross-Check</h4>
                  <p className="text-[12px] text-on-surface-variant">Scan for interactions</p>
                </div>
                {/* Step 5 */}
                <div className="flex flex-col items-center text-center w-48">
                  <div className="w-16 h-16 rounded-full bg-secondary text-on-primary flex items-center justify-center mb-md shadow-lg">
                    <span className="material-symbols-outlined">fact_check</span>
                  </div>
                  <h4 className="font-label-md text-on-surface mb-xs">Risk Report</h4>
                  <p className="text-[12px] text-on-surface-variant">Final safety verification</p>
                </div>
              </div>
              {/* Connector Line Desktop */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] step-connector z-0"></div>
              {/* Mobile Steps */}
              <div className="md:hidden flex flex-col gap-lg items-center">
                <div className="flex gap-md items-center w-full max-w-[320px]">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">1</div>
                  <div className="p-md glass-card rounded-xl flex-grow">
                    <p className="font-bold">Upload Prescription</p>
                  </div>
                </div>
                <div className="flex gap-md items-center w-full max-w-[320px]">
                  <div className="w-12 h-12 shrink-0 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">2</div>
                  <div className="p-md glass-card rounded-xl flex-grow">
                    <p className="font-bold">OCR Extraction</p>
                  </div>
                </div>
                <div className="flex gap-md items-center w-full max-w-[320px]">
                  <div className="w-12 h-12 shrink-0 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">3</div>
                  <div className="p-md glass-card rounded-xl flex-grow">
                    <p className="font-bold">Medicine Detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-3xl px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-md">
              <div className="aspect-square rounded-2xl bg-primary-container/10 flex flex-col items-center justify-center p-xl text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md" style={{ fontVariationSettings: '"FILL" 1' }}>speed</span>
                <h5 className="font-headline-sm mb-xs">Fast Processing</h5>
                <p className="text-body-sm text-on-surface-variant">Under 3s per scan</p>
              </div>
              <div className="aspect-square rounded-2xl bg-secondary-container/10 flex flex-col items-center justify-center p-xl text-center mt-xl">
                <span className="material-symbols-outlined text-secondary text-[48px] mb-md" style={{ fontVariationSettings: '"FILL" 1' }}>target</span>
                <h5 className="font-headline-sm mb-xs">99.9% Accuracy</h5>
                <p className="text-body-sm text-on-surface-variant">Validated clinical AI</p>
              </div>
              <div className="aspect-square rounded-2xl bg-surface-container-high flex flex-col items-center justify-center p-xl text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md" style={{ fontVariationSettings: '"FILL" 1' }}>touch_app</span>
                <h5 className="font-headline-sm mb-xs">Easy to Use</h5>
                <p className="text-body-sm text-on-surface-variant">No training required</p>
              </div>
              <div className="aspect-square rounded-2xl bg-tertiary-container/10 flex flex-col items-center justify-center p-xl text-center mt-xl">
                <span className="material-symbols-outlined text-tertiary text-[48px] mb-md" style={{ fontVariationSettings: '"FILL" 1' }}>database</span>
                <h5 className="font-headline-sm mb-xs">Trusted Data</h5>
                <p className="text-body-sm text-on-surface-variant">FDA &amp; PubMed sync</p>
              </div>
            </div>
          </div>
          <div className="space-y-lg order-1 lg:order-2">
            <h2 className="font-headline-lg text-headline-lg">Why Medical Teams Choose VerifyRx</h2>
            <p className="text-body-lg text-on-surface-variant">We bridge the gap between traditional medicine and modern AI technology to create a safety net for every patient encounter.</p>
            <ul className="space-y-md">
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-[14px]">check</span>
                </div>
                <div>
                  <p className="font-bold">HIPAA Compliant Security</p>
                  <p className="text-body-sm text-on-surface-variant">Your data is encrypted end-to-end with enterprise-grade standards.</p>
                </div>
              </li>
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-[14px]">check</span>
                </div>
                <div>
                  <p className="font-bold">Seamless Integration</p>
                  <p className="text-body-sm text-on-surface-variant">API-first architecture that plugs directly into existing EHR systems.</p>
                </div>
              </li>
            </ul>
            <div className="pt-md">
              <button className="px-xl py-md bg-on-surface text-surface rounded-xl font-label-md hover:bg-on-surface-variant transition-colors">Learn More About Safety</button>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-3xl px-margin-desktop">
          <div className="max-w-[1200px] mx-auto bg-primary rounded-[32px] p-2xl text-center text-on-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)' }}></div>
            <h2 className="font-display text-headline-lg mb-md relative z-10">Ready to reduce medication errors?</h2>
            <p className="text-body-lg mb-2xl opacity-90 max-w-[576px] mx-auto relative z-10">Join thousands of pharmacies and clinics already using VerifyRx to protect their patients.</p>
            <div className="flex flex-wrap justify-center gap-md relative z-10">
              <button className="px-2xl py-md bg-white text-primary rounded-xl font-bold shadow-xl hover:scale-105 transition-transform">Get Started Free</button>
              <button className="px-2xl py-md border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-colors">Talk to Sales</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
