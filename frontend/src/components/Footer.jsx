import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-lowest border-t border-outline-variant">
<div className="flex flex-col gap-sm items-center md:items-start">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">VerifyRx</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 VerifyRx AI Healthcare. All rights reserved.</p>
</div>
<div className="flex gap-lg flex-wrap justify-center">
<a className="font-label-sm text-label-sm text-on-surface-variant hover:underline decoration-primary transition-all duration-300" href="#">Privacy Policy</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:underline decoration-primary transition-all duration-300" href="#">Terms of Service</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:underline decoration-primary transition-all duration-300" href="#">Contact Support</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:underline decoration-primary transition-all duration-300" href="#">Security</a>
</div>
</footer>
    </>
  );
};

export default Footer;
