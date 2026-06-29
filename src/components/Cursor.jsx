import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const animateRing = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12;
      ringY.current += (mouseY.current - ringY.current) * 0.12;
      ring.style.left = ringX.current + 'px';
      ring.style.top = ringY.current + 'px';
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateRing);

    const onEnter = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = 'rgba(0,0,0,0.7)';
    };
    const onLeave = () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'rgba(0,0,0,0.3)';
    };

    const interactables = document.querySelectorAll(
      'a, button, .service-card, .galeria-item, .exp-feature, .proy-item'
    );
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        position: 'fixed',
        width: '12px', height: '12px',
        background: '#000',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.1s ease, width 0.3s ease, height 0.3s ease',
        mixBlendMode: 'multiply',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed',
        width: '40px', height: '40px',
        border: '1px solid rgba(0,0,0,0.3)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.15s ease, width 0.4s ease, height 0.4s ease, border-color 0.3s ease',
      }} />
    </>
  );
}
