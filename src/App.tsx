import { motion } from 'framer-motion';
import { 
  Github as GithubIcon, 
  Twitter as TwitterIcon, 
  Mail,
  ExternalLink, 
  ShieldCheck, 
  Gamepad2, 
  Layout 
} from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  logo, 
  tags, 
  link, 
  stats 
}: { 
  title: string; 
  description: string; 
  logo: string; 
  tags: string[]; 
  link: string;
  stats?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative flex flex-col p-8 rounded-xl border border-primary/10 bg-surface-container/50 dark:bg-[#1A1C1E]/50 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
       <img src={logo} alt="" className="w-32 grayscale brightness-0 invert dark:invert-0" />
    </div>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 p-3 rounded-xl bg-white dark:bg-[#1A1C1E] shadow-xl border border-primary/5 flex items-center justify-center">
        <img src={logo} alt={title} className="max-w-full max-h-full object-contain" />
      </div>
      <div>
        <h3 className="text-2xl font-black tracking-tighter">{title}</h3>
        {stats && <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase opacity-70">{stats}</p>}
      </div>
    </div>

    <p className="text-on-surface/70 leading-relaxed mb-8 grow font-medium">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs font-bold rounded-full bg-primary/5 border border-primary/10 text-primary/80">
          {tag}
        </span>
      ))}
    </div>

    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full p-4 rounded-full bg-primary text-white font-black hover:bg-primary-dim transition-colors group/btn shadow-lg shadow-primary/20"
    >
      <span>Explore Forge</span>
      <ExternalLink size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
    </a>
  </motion.div>
);

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="relative min-h-screen w-full max-w-7xl mx-auto px-6 py-20 selection:bg-primary selection:text-white">
      {/* Navigation / Header */}
      <header className="flex items-center justify-between mb-32">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 overflow-hidden p-2">
            <img src={`${baseUrl}logo.svg`} alt="mrdarksidetm" className="w-full h-full" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Atelier</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold opacity-60">
          <a href="#softwares" className="hover:text-primary hover:opacity-100 transition-all">Softwares</a>
          <a href="https://github.com/mrdarksidetm/winforge/tree/Beta/docs" target="_blank" className="hover:text-primary hover:opacity-100 transition-all">Docs</a>
          <a href="https://github.com/mrdarksidetm" target="_blank" className="hover:text-primary hover:opacity-100 transition-all">Community</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/mrdarksidetm" target="_blank" className="p-3 rounded-xl hover:bg-primary/5 transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:contact.dsidetm@gmail.com" className="px-6 py-3 rounded-full bg-on-surface dark:bg-[#E2E2E6] text-white dark:text-[#1A1C1E] text-sm font-black hover:opacity-90 transition-all shadow-lg">
            Connect
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mb-48">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8 border border-primary/20">
            Next-Gen Software Forge
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
            Beautifully <span className="text-primary italic">Crafted</span>,<br /> 
            Powerfully Engineered.
          </h1>
          <p className="max-w-2xl text-xl opacity-60 leading-relaxed font-semibold">
            Building privacy-first, offline-ready experiences and system optimization toolkits for the modern power user. Every line is forged for professional precision.
          </p>
        </motion.div>
      </section>

      {/* Software Grid */}
      <section id="softwares" className="mb-48">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2 text-current">Featured Softwares</h2>
            <p className="opacity-50 font-bold uppercase tracking-widest text-xs">Tools that redefine your digital workflow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Wallet (Paisa)"
            description="The ultimate personal finance dashboard. 100% offline, local-first, and designed with Material 3 precision. Manage your assets, budgets, and goals with zero data leaks."
            logo={`${baseUrl}wallet-logo.svg`}
            stats="FLUTTER • MATERIAL 3"
            tags={['Riverpod', 'Isar', 'GoRouter', 'Atelier Design']}
            link="https://github.com/mrdarksidetm/Wallet"
          />
          <ProjectCard 
            title="WinForge v5.0"
            description="Next-gen Windows 11 optimization toolkit. Reclaim your privacy with AI/Recall purge, boost FPS with Game Mode, and automate your workflow with Winget integration."
            logo={`${baseUrl}winforge-logo.png`}
            stats="VERSION 5.0 • POWERSHELL"
            tags={['Windows 11', 'Optimization', 'Security', 'Automation']}
            link="https://github.com/mrdarksidetm/winforge"
          />
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="mb-48 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-8 rounded-xl bg-surface-container/30">
          <ShieldCheck className="text-primary mb-6" size={40} />
          <h4 className="text-xl font-black mb-4 tracking-tighter uppercase">Privacy First</h4>
          <p className="opacity-60 font-semibold leading-relaxed">No clouds, no trackers. Your data belongs to you, stored exclusively on your local machine.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="p-8 rounded-xl bg-surface-container/30">
          <Layout className="text-primary mb-6" size={40} />
          <h4 className="text-xl font-black mb-4 tracking-tighter uppercase">Material 3</h4>
          <p className="opacity-60 font-semibold leading-relaxed">Adhering strictly to M3 standards for geometry, tonal elevation, and dynamic color.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="p-8 rounded-xl bg-surface-container/30">
          <Gamepad2 className="text-primary mb-6" size={40} />
          <h4 className="text-xl font-black mb-4 tracking-tighter uppercase">Atelier Speed</h4>
          <p className="opacity-60 font-semibold leading-relaxed">Targeting consistent 120 FPS through optimized rebuild cycles and native code integration.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-current/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
        <p className="text-sm font-bold italic text-current">
          Built with <span className="text-primary">Stitch</span> & Mrdarksidetm's Chaos. 2026.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/mrdarksidetm" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors font-black uppercase tracking-tighter text-current">
            <GithubIcon size={16} />
            <span>Github</span>
          </a>
          <a href="https://twitter.com/mrdarksidetm" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors font-black uppercase tracking-tighter text-current">
            <TwitterIcon size={16} />
            <span>Twitter</span>
          </a>
          <a href="mailto:contact.dsidetm@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors font-black uppercase tracking-tighter text-current">
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
