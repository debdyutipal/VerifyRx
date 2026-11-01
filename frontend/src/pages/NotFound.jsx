import React from 'react';

const NotFound = () => {
  return (
    <>
      <main className="flex-grow pt-32 pb-2xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
<div className="mb-xl text-center max-w-[672px] mx-auto">
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-sm">System States Overview</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Explore the various feedback states used across the VerifyRx platform to ensure clear communication with healthcare providers.</p>
</div>
{/* Bento Grid for States */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl">
{/* State 1: No Data */}
<div className="state-card bg-surface-container-lowest border border-outline-variant p-2xl rounded-xl shadow-sm flex flex-col items-center text-center justify-center min-h-[360px]">
<div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-xl">
<span className="material-symbols-outlined text-primary scale-150" style={{ fontVariationSettings: '"opsz" 48' }}>upload_file</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">No prescription uploaded yet</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[320px]">Start your first verification by uploading a scanned prescription or medical record.</p>
<button className="bg-primary text-on-primary font-label-md text-label-md px-xl py-md rounded-xl hover:bg-primary/90 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Upload Now
                </button>
</div>
{/* State 2: Invalid File */}
<div className="state-card bg-surface-container-lowest border border-outline-variant p-2xl rounded-xl shadow-sm flex flex-col items-center text-center justify-center min-h-[360px]">
<div className="w-20 h-20 rounded-full bg-error-container flex items-center justify-center mb-xl">
<span className="material-symbols-outlined text-error scale-150" style={{ fontVariationSettings: '"opsz" 48' }}>markdown_copy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Unsupported file type</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[320px]">We currently support PDF, JPG, and PNG files. Please check your document and try again.</p>
<div className="flex gap-md">
<button className="border border-outline text-on-surface-variant font-label-md text-label-md px-lg py-md rounded-xl hover:bg-surface-container transition-all">
                        Dismiss
                    </button>
<button className="bg-on-surface text-surface-container-lowest font-label-md text-label-md px-lg py-md rounded-xl hover:opacity-90 transition-all">
                        Check FAQ
                    </button>
</div>
</div>
{/* State 3: API Error */}
<div className="state-card bg-surface-container-lowest border border-outline-variant p-2xl rounded-xl shadow-sm flex flex-col items-center text-center justify-center min-h-[360px]">
<div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-xl">
<span className="material-symbols-outlined text-outline scale-150 animate-pulse" style={{ fontVariationSettings: '"opsz" 48' }}>wifi_off</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Connectivity Issue</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[320px]">We're having trouble connecting to our verification servers. Please check your internet connection.</p>
<button className="bg-primary text-on-primary font-label-md text-label-md px-xl py-md rounded-xl hover:bg-primary/90 transition-all flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[18px]">refresh</span>
                    Retry Connection
                </button>
</div>
{/* State 4: Success Confirmation */}
<div className="state-card bg-surface-container-lowest border border-outline-variant p-2xl rounded-xl shadow-sm flex flex-col items-center text-center justify-center min-h-[360px] relative overflow-hidden">
{/* Subtle Success Background Element */}
<div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
<div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center mb-xl shadow-inner">
<span className="material-symbols-outlined text-on-secondary-container scale-150" style={{ fontVariationSettings: '"opsz" 48, "FILL" 1' }}>check_circle</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Scan Successful</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[320px]">Your prescription has been verified against national databases and is ready for review.</p>
<button className="bg-secondary text-on-secondary font-label-md text-label-md px-xl py-md rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">analytics</span>
                    View Full Report
                </button>
</div>
</div>
{/* Documentation Card */}
<section className="mt-2xl p-xl bg-surface-container rounded-xl border border-outline-variant">
<div className="flex flex-col md:flex-row items-center gap-lg">
<div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-white">
<div className="bg-cover bg-center w-full h-full" data-alt="A macro shot of a sleek modern glass medical laboratory. The lighting is sterile and blue-toned, with soft focus on a digital screen displaying a medical report with a large green checkmark. Professional healthcare SaaS aesthetic, minimalist, clean, and trustworthy atmosphere." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtUR704OgtzwdT_5RRe58rJVb38klf1oOT2SqgKRod2-FcgGEHRwIiqJgP_51N8R-N7BLzkBU79lxVJCwrhSUgxO_PvFGmFEF-pY1avTajBg9Juf4CxVo4sG_uejlSlTjZ027sUwwoDkd4IGb6DD2bCJ5CCmLbXL4BeLfa-3zZUR2wxyJ1uZV_8FhnCkJDBWZ6PA7xbkLT4MHeQFjwDvJM6LRSFl0AxMEXIwD-7wagSO-BpWXijmX2")' }}></div>
</div>
<div className="flex-grow">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs block">Guidelines</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm">User Communication Standards</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our empty and error states follow a "Support First" philosophy. Every screen must provide a clear diagnosis of the situation and a single, obvious path forward. We use Material Symbols with standard weights to ensure accessibility for all clinical staff members.</p>
</div>
</div>
</section>
</main>
    </>
  );
};

export default NotFound;
