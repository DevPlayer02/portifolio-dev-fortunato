"use client"
import ServicesCards from "../Cards/ServicesCard";
import { motion } from "framer-motion";
import { Variants, Transition } from "framer-motion";

const cardTransition: Transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: cardTransition },
};

const listVariant: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const itemVariant = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const ProvidedServices = () => {
  const items = [
    "Front-end moderno e UI/UX responsivo.",
    "E-commerce, CMS e Sistemas sob medida.",
    "Performance e SEO técnico otimizado.",
    "Back-end escalável e integrações APIs.",
    "Resolução de bugs",
    "Migração de sistema legado",
  ];

  return (
    <section className="w-full min-h-screen mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="max-w-7xl mx-auto py-30"
      >
        <ServicesCards className="p-20 flex flex-col ">
          <motion.div variants={cardVariant} className="mb-4">
            <h2 className="text-3xl font-bold text-primary">
              Soluções para impulsionar o seu negócio
            </h2>
            <p className="text-secondary opacity-90 mt-4">
              Soluções digitais completas, da arquitetura de banco de dados ao
              design de interface.
            </p>
          </motion.div>

          <motion.ul
            variants={listVariant}
            className="text-secondary opacity-90 p-10 grid grid-cols-3 gap-20 list-none mt-6"
          >
            {items.map((text, i) => (
              <motion.li
                key={i}
                variants={itemVariant} 
                className="inline-flex items-center gap-4"
              >
                <img src="mark.svg" alt="mark-services" />
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </ServicesCards>
      </motion.div>
      <div className="relative w-full">
        <hr className="absolute left-1/2 -translate-x-1/2 w-screen h-[2px] bg-main-light-grey border-none mt-20" />
      </div>
    </section>
  );
};

export default ProvidedServices;
