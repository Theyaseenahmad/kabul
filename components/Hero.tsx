"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-maroon-800/40" />
  ),
});

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-maroon-900">
      {/* ambient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial-vignette" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/60 via-transparent to-maroon-950" />

      {/* nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-14">
        <span className="font-display text-xl tracking-[0.15em] text-gold-gradient">
          KABUL
        </span>
        <div className="hidden gap-10 font-body text-sm uppercase tracking-widest text-cream-200/80 md:flex">
          <a href="#collections" className="hover:text-gold-400 transition-colors focus-ring">
            Collections
          </a>
          <a href="#heritage" className="hover:text-gold-400 transition-colors focus-ring">
            Heritage
          </a>
          <a href="#visit" className="hover:text-gold-400 transition-colors focus-ring">
            Bulk Orders
          </a>
        </div>
        <a
          href="tel:+93000000000"
          className="rounded-full border border-gold-500/60 px-4 py-2 text-xs uppercase tracking-widest text-gold-300 hover:bg-gold-500 hover:text-maroon-950 transition-colors focus-ring"
        >
          Call to Order
        </a>
      </nav>

      {/* 3D scene */}
      <div className="absolute inset-0 z-10">
        <HeroScene />
      </div>

      {/* headline */}
      <div className="relative z-20 flex min-h-[calc(100vh-96px)] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-gold-400/90"
        >
          Since the old city, made new
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-6xl italic text-gold-gradient sm:text-7xl md:text-8xl"
        >
          Kabul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 max-w-xl font-body text-base text-cream-200/85 md:text-lg"
        >
          Saffron, pistachio, rosewater and hazelnut, folded into chocolate
          the old way. A superstore built around one belief: flavor is
          heritage you can taste.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#collections"
            className="rounded-full bg-gold-500 px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-maroon-950 transition-transform hover:scale-105 focus-ring"
          >
            Shop the collections
          </a>
          <a
            href="#heritage"
            className="rounded-full border border-cream-200/40 px-8 py-3 font-body text-sm uppercase tracking-widest text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300 focus-ring"
          >
            Our story
          </a>
        </motion.div>
      </div>

      <div className="lattice-divider absolute bottom-0 left-0 z-20" />
    </header>
  );
}
