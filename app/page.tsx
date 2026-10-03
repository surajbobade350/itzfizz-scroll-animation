"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(".hero-letter", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // Statistics animation
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8,
        ease: "power3.out",
      });

      // Scroll-driven visual animation
      gsap.to(visualRef.current, {
        y: 260,
        x: 100,
        rotation: 15,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="min-h-screen overflow-hidden bg-[#070707] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-7 md:px-12">
        <div className="text-xl font-bold tracking-[0.25em]">
          ITZFIZZ
        </div>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm transition duration-300 hover:bg-white hover:text-black">
          Let&apos;s Talk
        </button>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 md:px-12">

        <div className="relative z-10 max-w-4xl">

          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-gray-500 md:text-sm">
            Digital Experience Studio
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">

            <span className="block">
              {"WELCOME".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hero-letter inline-block"
                >
                  {letter}
                </span>
              ))}
            </span>

            <span className="mt-3 block text-gray-500">
              {"ITZFIZZ".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hero-letter inline-block"
                >
                  {letter}
                </span>
              ))}
            </span>

          </h1>

          <p className="hero-description mt-8 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            We create modern digital experiences that combine
            technology, creativity and performance.
          </p>

        </div>

        {/* Main animated object */}
        <div
          ref={visualRef}
          className="absolute right-[7%] top-[28%] hidden md:block"
        >
          <div className="relative h-[290px] w-[290px] rounded-[45px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">

            <div className="absolute inset-5 rounded-[35px] border border-white/10" />

            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-400 blur-sm" />

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

            <div className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.35em] text-gray-500">
              Scroll
            </div>

          </div>
        </div>

        {/* Mobile object */}
        <div className="absolute right-1/2 top-[46%] block translate-x-1/2 md:hidden">

          <div className="relative h-[180px] w-[180px] rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

            <div className="absolute inset-4 rounded-[23px] border border-white/10" />

            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-400" />

            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

          </div>

        </div>

        {/* Statistics */}
        <div className="relative z-10 mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md">
            <div className="text-4xl font-semibold">
              98%
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Client Satisfaction
            </p>
          </div>

          <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md">
            <div className="text-4xl font-semibold">
              120+
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Digital Projects
            </p>
          </div>

          <div className="stat-card rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md">
            <div className="text-4xl font-semibold">
              4.9/5
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Average Experience
            </p>
          </div>

        </div>

      </section>

      {/* Second section gives scroll space */}
      <section className="flex min-h-screen items-center justify-center border-t border-white/10 px-6">

        <div className="max-w-4xl text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Built for the web
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-7xl">
            Ideas into{" "}
            <span className="text-gray-500">
              experiences.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-7 text-gray-400">
            Combining thoughtful design, modern technology and
            smooth interactions to create memorable digital products.
          </p>

        </div>

      </section>
    </main>
  );
}
