"use client";

import { motion } from "framer-motion";

export default function Heritage() {
  return (
    <section id="heritage" className="relative bg-maroon-950 px-6 py-24 md:px-14 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold-400">
            Heritage
          </span>
          <h2 className="mt-3 font-display text-4xl italic text-cream-50 md:text-5xl">
            Recipes older than the wrapper
          </h2>
          <p className="mt-6 font-body text-cream-200/80">
            Kabul's kitchens have used saffron, pistachio, dried mulberry and
            rosewater for generations, long before chocolate arrived here.
            We didn't want to cover that up with something imported —
            we wanted to fold chocolate into it instead.
          </p>
          <p className="mt-4 font-body text-cream-200/80">
            Every bar and truffle starts with a spice or nut sourced the
            same way a grandmother would choose it: by hand, by smell, by
            season. The chocolate is just the part that holds it together.
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-display text-3xl text-gold-400">30+</p>
              <p className="font-body text-xs uppercase tracking-widest text-cream-200/60">
                Flavor lines
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-400">100%</p>
              <p className="font-body text-xs uppercase tracking-widest text-cream-200/60">
                Hand-finished
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square w-full overflow-hidden rounded-3xl border border-gold-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-700 via-maroon-800 to-gold-600 opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-8xl italic text-cream-50/10">
              K
            </span>
          </div>
          <div className="lattice-divider absolute bottom-0 left-0 opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}
