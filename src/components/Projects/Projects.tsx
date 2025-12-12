"use client";
import ProjectCards from "../Cards/ProjectsCards";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/profile.jpeg",
    title: "Projeto 1",
    button: true,
    subtitle: "Projeto feito com Next e Tailwind",
    stacks: ["Next", "Tailwind"],
  },
  {
    img: "/profile.jpeg",
    title: "Projeto 2",
    button: true,
    subtitle: "Landing page com animações",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
];

const projectsMobile = [
  {
    img: "/profile.jpeg",
    title: "Projeto 3",
    button: true,
    subtitle: "Mobile First otimizado",
    stacks: ["React", "SASS"],
  },
  {
    img: "/profile.jpeg",
    title: "Projeto 2",
    button: true,
    subtitle: "Landing page com animações",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
];

const projectsSys = [
  {
    img: "/profile.jpeg",
    title: "Projeto 2",
    button: true,
    subtitle: "Landing page com animações",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full h-auto">
      <div className="max-w-7xl mx-auto py-30">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl font-bold text-primary">
            Trabalhos em Destaque
          </h2>
          <p className="text-primary/70 text-lg max-w-lg">
            Soluções digitais criadas para superar obstáculos e entregar valor
            de verdade.
          </p>
        </motion.div>
        <div className="grid gap-15 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-[2fr_1fr] gap-15"
          >
            {projects.map((p, i) => (
              <ProjectCards key={i} {...p} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-[1fr_2fr] gap-15"
          >
            {projectsMobile.map((p, i) => (
              <ProjectCards key={i} {...p} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-15"
          >
            {projectsSys.map((p, i) => (
              <ProjectCards key={i} {...p} />
            ))}
          </motion.div>
        </div>
        <div className="relative w-full">
          <hr className="absolute left-1/2 -translate-x-1/2 w-screen h-[2px] bg-main-light-grey border-none mt-40" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
