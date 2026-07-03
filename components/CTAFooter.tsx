"use client";

import { motion } from "framer-motion";

export default function CTAFooter() {
  return (
    <section id="visit" className="relative bg-maroon-900 px-6 pb-10 pt-24 md:px-14 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl border border-gold-500/20 bg-gradient-to-b from-maroon-800/70 to-maroon-900/40 px-8 py-16 text-center"
      >
        <span className="font-body text-xs uppercase tracking-[0.4em] text-gold-400">
          Bulk & Events
        </span>
        <h2 className="mt-3 font-display text-4xl italic text-cream-50 md:text-5xl">
          Weddings, Eid, offices — we pack for all of it
        </h2>
        <p className="mt-4 max-w-lg font-body text-cream-200/75">
          Call our order desk for wholesale pricing, custom gift boxes, and
          same-week delivery across the city.
        </p>
        <a
          href="tel:+93000000000"
          className="mt-8 rounded-full bg-gold-500 px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-maroon-950 transition-transform hover:scale-105 focus-ring"
        >
          Call the order desk
        </a>
      </motion.div>

      <footer className="mx-auto mt-20 flex max-w-6xl flex-col gap-10 border-t border-gold-500/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="font-display text-2xl italic text-gold-gradient">
            KABUL
          </span>
          <p className="mt-3 max-w-xs font-body text-sm text-cream-200/60">
            Fine chocolate rooted in Afghan flavor — saffron, pistachio,
            rosewater, hazelnut.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:flex md:gap-16">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold-400">
              Visit
            </p>
            <p className="mt-3 font-body text-cream-200/70">
              Shahr-e-Naw, Kabul
              <br />
              Open daily, 9am – 9pm
            </p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold-400">
              Contact
            </p>
            <p className="mt-3 font-body text-cream-200/70">
              hello@kabulchocolate.af
              <br />
              +93 00 000 0000
            </p>
          </div>
        </div>

        <div className="flex gap-4 font-body text-xs uppercase tracking-widest text-cream-200/50">
          <a href="#" className="hover:text-gold-400 transition-colors focus-ring">
            Instagram
          </a>
          <a href="#" className="hover:text-gold-400 transition-colors focus-ring">
            WhatsApp
          </a>
        </div>
      </footer>

      <p className="mx-auto mt-10 max-w-6xl border-t border-gold-500/10 pt-6 text-center font-body text-xs text-cream-200/40 md:text-left">
        © {new Date().getFullYear()} Kabul Chocolate Superstore. All rights reserved.
      </p>
    </section>
  );
}
