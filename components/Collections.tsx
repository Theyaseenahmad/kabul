"use client";

import { motion } from "framer-motion";

const items = [
  {
    name: "Saffron Truffles",
    desc: "Dark ganache threaded with Herat saffron, dusted in gold cocoa.",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pistachio Barfi Bars",
    desc: "Milk chocolate over slow-roasted pistachio, cut thick and honest.",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rosewater Pralines",
    desc: "White and dark swirl, rosewater cream, a single pink pearl.",
    image:
      "https://th.bing.com/th/id/OIP.I3lrcqQJIFtgj5xeVAPkJgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Gift Boxes",
    desc: "Curated boxes for weddings, Eid, and everything worth marking.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.QTY9XkdQrjygbDlVu7IYDwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative bg-maroon-900 px-6 py-24 md:px-14 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-3 md:mb-20 md:max-w-2xl">
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold-400">
            The Collections
          </span>

          <h2 className="font-display text-4xl italic text-cream-50 md:text-5xl">
            Four ways in, one story
          </h2>

          <p className="font-body text-cream-200/75">
            Every box starts with a flavor Kabul already knows well — we just
            brought chocolate to it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-gold-500/15 bg-maroon-800/60 transition-colors hover:border-gold-500/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl text-cream-50">
                  {item.name}
                </h3>

                <p className="mt-2 font-body text-sm leading-relaxed text-cream-200/70">
                  {item.desc}
                </p>

                <a
                  href="#visit"
                  className="mt-4 inline-block font-body text-xs uppercase tracking-widest text-gold-400 transition-colors hover:text-gold-300 focus-ring"
                >
                  Explore →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="lattice-divider absolute bottom-0 left-0" />
    </section>
  );
}