import { useEffect, useRef, useCallback } from "react";

export default function AquariusConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // Aquarius constellation key points (moved slightly higher)
  const aquariusPoints = [
    { x: 0.45, y: 0.25, size: 2.5, alpha: 0.9 },
    { x: 0.5, y: 0.3, size: 2.2, alpha: 0.85 },
    { x: 0.55, y: 0.28, size: 1.8, alpha: 0.8 },
    { x: 0.48, y: 0.35, size: 1.6, alpha: 0.75 },
    { x: 0.42, y: 0.4, size: 1.5, alpha: 0.7 },
    { x: 0.38, y: 0.45, size: 1.4, alpha: 0.65 },
    { x: 0.35, y: 0.5, size: 1.3, alpha: 0.6 },
    { x: 0.32, y: 0.55, size: 1.2, alpha: 0.55 },
    { x: 0.28, y: 0.6, size: 1.1, alpha: 0.5 },
    { x: 0.6, y: 0.32, size: 1.7, alpha: 0.75 },
    { x: 0.52, y: 0.2, size: 1.5, alpha: 0.7 },
  ];

  const particles = useRef(
    aquariusPoints.map((point) => ({
      baseX: point.x,
      baseY: point.y,
      x: point.x,
      y: point.y,
      size: point.size,
      alpha: point.alpha,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      phase: Math.random() * Math.PI * 2,
      frequency: 0.5 + Math.random() * 0.5,
    }))
  );

  // Background stars - increased size and visibility
  const stars = useRef(
    [...Array(100)].map(() => ({
      x: Math.random(),
      y: Math.random(),
      baseSize: 0.8 + Math.random() * 1.5,
      alpha: 0.4 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    }))
  );

  const connectConstellation = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // Draw the water jar (central part)
      ctx.beginPath();
      ctx.moveTo(
        particles.current[0].x * canvas.width,
        particles.current[0].y * canvas.height
      );
      ctx.lineTo(
        particles.current[1].x * canvas.width,
        particles.current[1].y * canvas.height
      );
      ctx.lineTo(
        particles.current[2].x * canvas.width,
        particles.current[2].y * canvas.height
      );
      ctx.strokeStyle = "rgba(100, 180, 255, 0.4)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Draw the water stream
      ctx.beginPath();
      ctx.moveTo(
        particles.current[1].x * canvas.width,
        particles.current[1].y * canvas.height
      );
      for (let i = 3; i < 9; i++) {
        ctx.lineTo(
          particles.current[i].x * canvas.width,
          particles.current[i].y * canvas.height
        );
      }
      ctx.strokeStyle = "rgba(100, 200, 255, 0.3)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Connect additional stars
      ctx.beginPath();
      ctx.moveTo(
        particles.current[2].x * canvas.width,
        particles.current[2].y * canvas.height
      );
      ctx.lineTo(
        particles.current[9].x * canvas.width,
        particles.current[9].y * canvas.height
      );
      ctx.strokeStyle = "rgba(100, 180, 255, 0.3)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        particles.current[0].x * canvas.width,
        particles.current[0].y * canvas.height
      );
      ctx.lineTo(
        particles.current[10].x * canvas.width,
        particles.current[10].y * canvas.height
      );
      ctx.strokeStyle = "rgba(100, 180, 255, 0.3)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
    },
    []
  );

  const drawParticle = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particle: (typeof particles.current)[0],
      canvas: HTMLCanvasElement,
      time: number
    ) => {
      const twinkle = 0.6 + 0.4 * Math.sin(time * 0.003 + particle.phase * 2);
      const size = Math.max(0.1, particle.size * twinkle);

      // Glow effect
      const gradient = ctx.createRadialGradient(
        particle.x * canvas.width,
        particle.y * canvas.height,
        0,
        particle.x * canvas.width,
        particle.y * canvas.height,
        size * 3
      );
      gradient.addColorStop(0, `rgba(100, 200, 255, ${particle.alpha * 0.7})`);
      gradient.addColorStop(1, "rgba(100, 200, 255, 0)");

      ctx.beginPath();
      ctx.arc(
        particle.x * canvas.width,
        particle.y * canvas.height,
        size * 3,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = gradient;
      ctx.fill();

      // Star
      ctx.beginPath();
      ctx.arc(
        particle.x * canvas.width,
        particle.y * canvas.height,
        size,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(150, 200, 255, ${particle.alpha})`;
      ctx.fill();

      // Sparkle effect
      if (Math.random() < 0.03) {
        ctx.beginPath();
        ctx.arc(
          particle.x * canvas.width,
          particle.y * canvas.height,
          size * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
        ctx.fill();
      }
    },
    []
  );

  const drawBackgroundStar = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      star: (typeof stars.current)[0],
      canvas: HTMLCanvasElement,
      time: number
    ) => {
      const twinkle = 0.5 + 0.5 * Math.sin(time * 0.002 + star.phase * 3);
      const size = Math.max(0.2, star.baseSize * twinkle);

      ctx.beginPath();
      ctx.arc(
        star.x * canvas.width,
        star.y * canvas.height,
        size,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(150, 180, 220, ${star.alpha * twinkle})`;
      ctx.fill();

      if (Math.random() < 0.01) {
        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          size * 1.5,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
        ctx.fill();
      }
    },
    []
  );

  const updateParticles = useCallback((time: number) => {
    particles.current.forEach((particle) => {
      particle.x =
        particle.baseX +
        Math.sin(time * 0.001 * particle.frequency + particle.phase) * 0.01;
      particle.y =
        particle.baseY +
        Math.cos(time * 0.001 * particle.frequency + particle.phase) * 0.01;

      particle.x += particle.vx * 0.1;
      particle.y += particle.vy * 0.1;

      if (particle.x < 0) particle.x = 1;
      if (particle.x > 1) particle.x = 0;
      if (particle.y < 0) particle.y = 1;
      if (particle.y > 1) particle.y = 0;
    });
  }, []);

  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateParticles(time);

      stars.current.forEach((star) =>
        drawBackgroundStar(ctx, star, canvas, time)
      );

      connectConstellation(ctx, canvas);

      particles.current.forEach((particle) =>
        drawParticle(ctx, particle, canvas, time)
      );

      animationRef.current = requestAnimationFrame(animate);
    },
    [connectConstellation, drawBackgroundStar, drawParticle, updateParticles]
  );

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full" />
  );
}
