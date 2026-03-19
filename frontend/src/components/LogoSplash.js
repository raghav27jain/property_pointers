// src/components/LogoSplash.js
import React, { useEffect } from 'react';

const LogoSplash = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2200); // match CSS timing (~2.2s)
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="pp-splash pro">
      <div className="pp-splash-logo pro">
        {/* split into letters so we can stagger them */}
        {'Property'.split('').map((ch, idx) => (
          <span
            key={`p-${idx}`}
            className="pp-logo-char pp-logo-blue-char"
            style={{ animationDelay: `${0.15 + idx * 0.04}s` }}
          >
            {ch}
          </span>
        ))}
        {'Pointers'.split('').map((ch, idx) => (
          <span
            key={`y-${idx}`}
            className="pp-logo-char pp-logo-gold-char"
            style={{ animationDelay: `${0.45 + idx * 0.04}s` }}
          >
            {ch}
          </span>
        ))}

        {/* shine sweep */}
        <div className="pp-logo-shine" />
      </div>
    </div>
  );
};

export default LogoSplash;
