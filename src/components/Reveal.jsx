import React, { useEffect, useRef, useState } from 'react';

// Revela o conteúdo quando entra na tela (uma vez só)
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', base = 'reveal', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ '--d': `${delay}ms` }} className={`${base} ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// Título com máscara: o texto sobe de dentro de uma "janela"
export function MaskTitle({ as: Tag = 'h2', className = '', delay = 0, children }) {
  return (
    <Reveal as={Tag} base="mask" delay={delay} className={className}>
      <span>{children}</span>
    </Reveal>
  );
}
