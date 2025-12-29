"use client";

import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------
   EASING
------------------------------------------------------- */
const easeEditorial: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* -------------------------------------------------------
   VARIANTS
------------------------------------------------------- */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const charVariant: Variants = {
  hidden: {
    y: 22,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeEditorial,
    },
  },
};

/* -------------------------------------------------------
   WORD-SAFE TEXT SPLITTER (CRITICAL FIX)
------------------------------------------------------- */
const splitText = (text: string) =>
  text.split(" ").map((word, wordIndex) => (
    <motion.span
      key={wordIndex}
      variants={container}
      className="inline-flex whitespace-nowrap"
    >
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={charVariant}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      {/* Space between words */}
      <span className="inline-block">&nbsp;</span>
    </motion.span>
  ));

export default function Philosophy() {
  return (
    <section className="relative py-36 md:py-44 overflow-hidden bg-[#f3f4f6]">
      {/* Platinum Grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="platinum-grain opacity-[0.45]" />
      </div>

      {/* Architectural Light Fields */}
      <div className="absolute top-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full bg-white blur-[260px]" />
      <div className="absolute bottom-[-260px] right-[-200px] h-[600px] w-[600px] rounded-full bg-slate-300 blur-[300px]" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT AXIS LABEL */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
          >
            <motion.span
              variants={container}
              className="block text-[11px] tracking-[0.45em] uppercase text-black/50"
            >
              {splitText("Philosophy")}
            </motion.span>
          </motion.div>

          {/* EDITORIAL BODY */}
          <motion.div
            className="lg:col-span-7 space-y-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
          >
            {/* STATEMENT */}
            <p className="text-black font-light text-2xl md:text-4xl leading-snug">
              <motion.span variants={container}>
                {splitText("Great spaces are defined by clarity.")}
              </motion.span>
            </p>

            {/* PRINCIPLES */}
            <motion.div
              className="space-y-3 text-black/80 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              <p>Sound that belongs.</p>
              <p>Technology that disappears.</p>
              <p>Control that feels effortless.</p>
            </motion.div>

            {/* SUPPORTING COPY */}
            <motion.div
              className="space-y-4 max-w-2xl text-black/65 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              <p>When AV is considered early, it supports intent.</p>
              <p>When it is not, intent is interrupted.</p>
            </motion.div>

            {/* CLOSING LINE */}
            <motion.p
              className="pt-6 text-black/85 text-sm md:text-base tracking-wide"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: easeEditorial }}
              viewport={{ once: true }}
            >
              DESIGNED exists to document this difference.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .platinum-grain {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            rgba(0, 0, 0, 0.08) 1px,
            transparent 1px
          );
          background-size: 3px 3px;
          animation: moveGrain 50s linear infinite;
        }

        @keyframes moveGrain {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-12%, -12%);
          }
        }
      `}</style>
    </section>
  );
}
