'use client';

import { useState, useEffect } from 'react';
import { PHONE } from '@/lib/config';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img src="/images/logo.jpg" alt="枣强卷帘门维修" className="logo-icon" />
          <span>枣强卷帘门维修</span>
        </Link>
        <a href={`tel:${PHONE}`} className="btn-call" id="header-call-btn">
          一键拨号
        </a>
      </div>
    </header>
  );
}
