"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      const intro = gsap.timeline();

      intro
        .from(titleRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          statsRef.current?.children || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Scroll animation
      gsap.to(carRef.current, {
        y: 450,
        x: 220,
        rotation: 8,
        scale: 1.25,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Title reacts to scroll
      gsap.to(titleRef.current, {
        y: -180,
        opacity: 0.15,
        scale: 0.9,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative min-h-[220vh] overflow-hidden bg-[#090909] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* Sticky Hero */}
      <section className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        {/* Top label */}
        <div className="absolute left-8 top-8 text-xs uppercase tracking-[0.4em] text-white/40">
          Scroll Experience
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl px-6">
          
          <div className="text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.6em] text-orange-400">
              Creative Digital Experience
            </p>

            <h1
              ref={titleRef}
              className="text-[clamp(2.5rem,7vw,8rem)] font-black uppercase leading-[0.85] tracking-[0.15em]"
            >
              WELCOME
              <br />
              ITZFIZZ
            </h1>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold md:text-5xl">98%</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Performance
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold md:text-5xl">3.2x</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Engagement
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold md:text-5xl">100%</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* Animated visual */}
        <div
          ref={carRef}
          className="absolute bottom-[-80px] left-[5%] z-20 w-[280px] md:w-[450px]"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute left-1/2 top-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

            {/* Car */}
            <svg
              viewBox="0 0 600 250"
              className="relative w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* body */}
              <path
                d="M75 165
                   C95 125 145 105 205 100
                   L270 45
                   C290 28 315 22 345 22
                   L405 22
                   C435 22 455 40 480 72
                   L525 110
                   C555 118 575 135 580 165
                   L580 180
                   L75 180
                   Z"
                fill="#d94d1f"
              />

              {/* window */}
              <path
                d="M275 95 L305 55 L350 42 L400 42 L440 88 Z"
                fill="#101010"
                stroke="#ff7847"
                strokeWidth="4"
              />

              {/* front window */}
              <path
                d="M405 42 L438 88 L480 94 L445 50 C435 42 420 40 405 42Z"
                fill="#151515"
              />

              {/* highlight */}
              <path
                d="M105 145 C180 125 360 115 515 135"
                stroke="#ff9a70"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* wheels */}
              <circle
                cx="175"
                cy="180"
                r="42"
                fill="#050505"
                stroke="#333"
                strokeWidth="8"
              />
              <circle
                cx="175"
                cy="180"
                r="17"
                fill="#777"
              />

              <circle
                cx="470"
                cy="180"
                r="42"
                fill="#050505"
                stroke="#333"
                strokeWidth="8"
              />
              <circle
                cx="470"
                cy="180"
                r="17"
                fill="#777"
              />

              {/* headlights */}
              <path
                d="M535 125 L570 140 L568 153 L530 150Z"
                fill="#fff4df"
              />

              {/* ground */}
              <path
                d="M45 225 C190 210 390 210 575 225"
                stroke="#ffffff"
                strokeOpacity="0.15"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
            Scroll
          </div>

          <div className="mx-auto h-12 w-[1px] overflow-hidden bg-white/20">
            <div className="h-1/2 w-full animate-pulse bg-white" />
          </div>
        </div>
      </section>

      {/* Bottom content */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-400">
            The Experience
          </p>

          <h2 className="text-4xl font-bold md:text-7xl">
            Built to move
            <br />
            with you.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            A smooth scroll-driven experience powered by Next.js,
            Tailwind CSS and GSAP.
          </p>
        </div>
      </section>
    </main>
  );
}