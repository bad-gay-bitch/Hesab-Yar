import { useEffect, useRef } from 'react';

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const spacing = 25; // Distance between dots
    const radius = 1.5; // Radius of dots
    const mouseRadius = 200; // How far the repel effect reaches

    let dots: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

    let mouse = { x: -1000, y: -1000 };

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;

      dots = [];
      // Add some padding to ensure dots cover the edges during resize/movement
      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (let y = -spacing; y < height + spacing; y += spacing) {
          dots.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    init();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Calculate distance to mouse
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel logic
        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          
          // Push away from mouse
          const targetX = dot.originX - Math.cos(angle) * force * 40;
          const targetY = dot.originY - Math.sin(angle) * force * 40;

          dot.vx += (targetX - dot.x) * 0.08;
          dot.vy += (targetY - dot.y) * 0.08;
        } else {
          // Spring back to origin
          const dxOrigin = dot.originX - dot.x;
          const dyOrigin = dot.originY - dot.y;
          
          dot.vx += dxOrigin * 0.08; // Spring constant
          dot.vy += dyOrigin * 0.08;
        }

        // Friction
        dot.vx *= 0.75;
        dot.vy *= 0.75;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Color based on distance to mouse
        let color = 'rgba(209, 213, 219, 0.4)'; // Tailwind gray-300 with opacity
        let size = radius;

        if (dist < mouseRadius) {
          const intensity = Math.pow(1 - dist / mouseRadius, 2); // Non-linear falloff for smoother color transition
          // Primary color: #2563EB (37, 99, 235)
          // Gray color: #D1D5DB (209, 213, 219)
          const r = Math.round(209 - (209 - 37) * intensity);
          const g = Math.round(213 - (213 - 99) * intensity);
          const b = Math.round(219 - (219 - 235) * intensity);
          const a = 0.4 + 0.6 * intensity; // Becomes more opaque
          color = `rgba(${r}, ${g}, ${b}, ${a})`;
          size = radius + intensity * 1.5;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20"
    />
  );
}
