import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "NexusAI Dashboard",
    description: "AI-powered analytics platform with real-time insights and predictive modeling.",
    tag: "AI · Dashboard",
  },
  {
    name: "CloudFlow SaaS",
    description: "Modern SaaS landing page with automated onboarding and payment integration.",
    tag: "Web · SaaS",
  },
  {
    name: "AutoReach CRM",
    description: "Intelligent CRM with AI-driven lead scoring and automated follow-ups.",
    tag: "AI · Automation",
  },
  {
    name: "MedSync Platform",
    description: "Healthcare platform with AI diagnostics assistant and appointment system.",
    tag: "AI · Health",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-hover rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {project.tag}
          </span>
        </div>
        <div className="absolute top-8 right-8 w-32 h-32 rounded-xl bg-primary/5 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
        <div className="absolute bottom-4 right-12 w-20 h-20 rounded-lg bg-accent/5 -rotate-6 group-hover:rotate-3 transition-transform duration-700" />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
          View Live <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Portfolio</span>
          <h2 className="heading-display text-3xl md:text-4xl mt-3">Our Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
