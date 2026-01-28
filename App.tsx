
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  CheckCircle2, 
  Camera, 
  Palette, 
  ArrowRight, 
  Users, 
  Coffee, 
  Hotel, 
  ShoppingBag, 
  UtensilsCrossed, 
  Sparkles,
  Menu,
  X,
  Layout,
  Video,
  ArrowUpRight,
  Search,
  Zap,
  ChevronRight
} from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center md:items-start ${className}`}>
    <div className="flex items-center gap-1 text-lg md:text-3xl font-bold tracking-tighter text-black">
      Growth <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00D1FF] mt-0.5"></span> Way
    </div>
    <div className="bg-white border border-gray-100 shadow-sm px-1.5 md:px-3 py-0.5 mt-0.5 inline-block">
      <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-black whitespace-nowrap leading-none block">A Creative Agency</span>
    </div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaLink = "https://wa.me/917455067426?text=Hey%2C%20I%20want%20social%20media%20marketing%20services%20for%20my%20business%21";
  const personalInstagramLink = "https://instagram.com/growthwithhardik";
  const agencyInstagramLink = "https://instagram.com/growthwayagency";

  const services = [
    {
      title: "Social Media Management",
      desc: "Strategic management that builds community and drives results. We handle the daily grind so you don't have to.",
      icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: "Professional Content",
      desc: "High-quality visual storytelling and copy that resonates with your specific audience in Uttarakhand.",
      icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: "Professional Shoot",
      desc: "High-end photography and videography featuring professional models and expert equipment on-location.",
      icon: <Camera className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: "Cinematic Video Editing",
      desc: "Turning raw footage into viral-ready stories with professional pacing, color correction, and sound design.",
      icon: <Video className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: "Identity and Web Design",
      desc: "Digital storefronts and brand identities that actually book tables and rooms. Clean, fast, and functional.",
      icon: <Layout className="w-4 h-4 md:w-5 md:h-5" />
    }
  ];

  const niches = [
    { name: "Cafes", icon: <UtensilsCrossed className="w-3 h-3 md:w-4 md:h-4" /> },
    { name: "Bakeries", icon: <Coffee className="w-3 h-3 md:w-4 md:h-4" /> },
    { name: "Hotels", icon: <Hotel className="w-3 h-3 md:w-4 md:h-4" /> },
    { name: "Clothing", icon: <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" /> }
  ];

  const processSteps = [
    { 
      n: "01", 
      t: "Understand", 
      d: "We sit down to learn your story and your customers. No generic plans.",
      icon: <Search className="w-4 h-4 md:w-5 md:h-5" />
    },
    { 
      n: "02", 
      t: "Create", 
      d: "Our team handles the shoots, the editing, and the strategy. You stay in control.",
      icon: <Camera className="w-4 h-4 md:w-5 md:h-5" />
    },
    { 
      n: "03", 
      t: "Grow", 
      d: "We launch the systems and manage your brand's presence daily.",
      icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />
    }
  ];

  const differenceItems = [
    { t: "Local Fluency", d: "We live and work in the same streets as you. We know what makes a Rishikesh cafe or a Dehradun resort successful." },
    { t: "Radical Simplicity", d: "You'll never hear us talk about 'synergy' or 'funnels'. We talk about bookings, customers, and content." },
    { t: "Professional Models", d: "We don't just take pictures. We provide models and creators to make your brand look premium." },
    { t: "Consistent Care", d: "We are your partners, not just a service provider. We grow only when you do. No hidden fees." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-200 antialiased overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 md:py-4 shadow-sm' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Logo className="scale-[0.85] md:scale-100 origin-left" />
          
          <div className="hidden md:flex items-center gap-10 text-[12px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#about" className="hover:text-black transition-colors">The Difference</a>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-[#FFD23F] text-black px-8 py-3.5 rounded-full hover:shadow-xl hover:shadow-yellow-500/20 transition-all flex items-center gap-2">
              Start the conversation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1.5 text-black bg-gray-50 rounded-full" aria-label="Toggle menu">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-[60] p-6 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center">
              <Logo className="scale-90 origin-left" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-50 rounded-full"><X size={20} /></button>
            </div>
            <div className="flex flex-col gap-6 py-8">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-extrabold tracking-tighter">Capabilities</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-extrabold tracking-tighter">The Difference</a>
              <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-6 rounded-3xl text-center font-bold text-lg flex items-center justify-center gap-3 mt-4">
                 Simplify my marketing
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center">Rishikesh & Dehradun</p>
              <div className="flex justify-center gap-6 text-gray-400">
                <a href={agencyInstagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-28 pb-12 px-4 md:pt-72 md:pb-40 max-w-6xl mx-auto relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-yellow-50 text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-yellow-700 mb-6 md:mb-10 border border-yellow-100">
            <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
            Your all-in-one marketing team
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black tracking-tighter mb-6 md:mb-10 leading-[1.05] md:leading-[0.95] text-balance">
            We make growth <br className="hidden md:block"/>
            <span className="text-gray-200">make sense.</span>
          </h1>
          <p className="text-base md:text-2xl text-gray-500 max-w-2xl mb-8 md:mb-14 leading-relaxed font-medium">
            Helping local favorites in Rishikesh and Dehradun build trust through professional content and clear strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-6">
            <a href={personalInstagramLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#FFD23F] text-black px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-[2.5rem] font-extrabold text-base md:text-xl hover:scale-[1.02] transition-all shadow-xl md:shadow-2xl shadow-yellow-500/20 flex items-center justify-center gap-3">
              Let's talk growth
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5 md:-space-x-3">
                {[1, 2, 3].map(i => <div key={i} className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>)}
              </div>
              <p className="text-[10px] md:text-sm font-bold text-gray-400 tracking-tight">Trusted by 20+ local brands</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/10 rounded-full blur-[60px] md:blur-[120px] -z-10"></div>
      </section>

      {/* 3. THE RELIEF (Problem + Solution) */}
      <section className="py-12 md:py-24 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl md:rounded-[4rem] p-6 md:p-24 border border-gray-100 grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
          <div>
            <span className="text-yellow-500 font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 md:mb-8 block">Finally, clarity.</span>
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 tracking-tighter leading-tight">One team. <br/>Everything handled.</h2>
            <p className="text-sm md:text-xl text-gray-500 font-medium mb-6 md:mb-12 leading-relaxed">No freelancers. No confusion. No chasing people. We bridge the gap between high-end quality and local reliability.</p>
            
            <div className="grid gap-2.5 md:gap-4">
              {[
                { t: "One point of contact.", s: "Stop managing multiple people. We handle it all." },
                { t: "Predictable systems.", s: "Know exactly when your content will be live." },
                { t: "Local market fluency.", s: "We understand the people of Uttarakhand." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 md:gap-5 p-3 md:p-6 bg-white rounded-xl md:rounded-3xl border border-gray-100 shadow-sm transition-all">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs md:text-base tracking-tight">{item.t}</h4>
                    <p className="text-[10px] md:text-sm text-gray-400 font-medium leading-tight md:leading-relaxed">{item.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group mt-4 lg:mt-0">
            <div className="aspect-[16/9] md:aspect-[4/5] rounded-2xl md:rounded-[3rem] overflow-hidden bg-white p-2 md:p-4 shadow-lg md:shadow-2xl shadow-black/5 md:rotate-2 group-hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover rounded-xl md:rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                 alt="Professional model shoot"
               />
            </div>
            <div className="absolute -bottom-2 -left-2 md:bottom-4 md:-left-12 bg-white px-4 md:px-8 py-2 md:py-6 rounded-lg md:rounded-[2rem] shadow-xl border border-gray-100 -rotate-2 group-hover:rotate-0 transition-all duration-700 z-20">
              <p className="text-sm md:text-2xl font-black italic tracking-tight text-gray-900 leading-none whitespace-nowrap">"Simple works."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES (Everything your local business needs) */}
      <section id="services" className="py-12 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-8 md:mb-20">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 md:mb-8 block">Capabilities</span>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-balance">Everything your local business <br className="hidden md:block" /> needs to grow online.</h2>
          </div>
          <div className="pb-1 hidden md:block">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:border-yellow-400 transition-all">
              Is this what you need?
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Mobile Horizontal Carousel to avoid long vertical scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 no-scrollbar scroll-smooth">
          {services.map((s, i) => (
            <div key={i} className={`snap-center shrink-0 w-[85%] md:w-auto group p-6 md:p-10 rounded-2xl md:rounded-[3rem] bg-white border border-gray-100 hover:border-yellow-200 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 flex flex-col gap-4 md:gap-6 items-start cursor-default ${i >= 3 ? 'lg:col-span-1' : ''}`}>
              <div className="p-3 md:p-5 bg-gray-50 rounded-xl md:rounded-[2rem] text-gray-400 group-hover:bg-[#FFD23F] group-hover:text-black transition-all duration-500 shrink-0">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 tracking-tight">{s.title}</h3>
                <p className="text-xs md:text-base text-gray-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
          {/* Subtle swipe indicator for mobile */}
          <div className="md:hidden shrink-0 w-4"></div>
        </div>
      </section>

      {/* 5. LOCAL ROOTS (Built for the favorites) */}
      <section className="py-8 md:py-24 px-4">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-3xl md:rounded-[4.5rem] overflow-hidden grid lg:grid-cols-2">
          {/* Left Column: Branding & Niches */}
          <div className="p-6 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <span className="text-yellow-400 font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-6 md:mb-10 block">Local Roots</span>
            <h2 className="text-3xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tighter leading-[0.9] md:leading-[0.85]">Built for the <br className="hidden md:block" /> favorites of <br className="hidden md:block" /><span className="text-yellow-400 underline decoration-2 md:decoration-4 underline-offset-[6px] md:underline-offset-[12px]">Uttarakhand.</span></h2>
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 mt-4">
              {niches.map((n, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 md:px-6 py-2.5 md:py-4 bg-white/5 border border-white/10 rounded-full font-bold text-[9px] md:text-[13px] tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                  {n.icon} {n.name}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Timeline Infographic - Optimized for Mobile */}
          <div className="p-6 md:p-24 relative overflow-hidden bg-white/5 lg:bg-transparent">
            <div className="text-left mb-8 md:mb-16">
              <p className="text-sm md:text-2xl font-bold text-white/50 leading-relaxed italic">"How we grow your business (without confusion)"</p>
            </div>

            {/* Compact timeline for mobile */}
            <div className="space-y-6 md:space-y-20 relative">
              {/* Vertical line only visible on larger mobile/desktop to avoid clutter on small screens */}
              <div className="absolute left-6 md:left-[7.75rem] top-8 md:top-[14rem] bottom-8 md:bottom-[8rem] w-px md:w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-400/20 to-transparent"></div>

              {processSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 md:gap-10 group relative">
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-yellow-400 transition-all duration-500">
                      <span className="text-sm md:text-3xl font-black text-white/20 group-hover:text-yellow-400">
                        {step.n}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1.5 md:pt-2">
                    <div className="flex items-center gap-2 mb-1 md:mb-4">
                      <div className="p-1 md:p-2 bg-white/5 rounded text-yellow-400">
                        {step.icon}
                      </div>
                      <h4 className="text-lg md:text-2xl font-bold tracking-tight">{step.t}</h4>
                    </div>
                    <p className="text-white/40 font-medium leading-relaxed max-w-sm text-xs md:text-lg">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE DIFFERENCE (Why Us + Trust) */}
      <section id="about" className="py-12 md:py-40 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-24">
          <span className="text-yellow-500 font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 md:mb-8 block">Quiet Confidence</span>
          <h2 className="text-2xl md:text-6xl font-bold tracking-tighter text-balance">Why local brands trust <br/> Growth Agency.</h2>
        </div>
        
        {/* Mobile Horizontal Carousel for Why Us items */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 gap-6 md:gap-24 no-scrollbar">
          {differenceItems.map((item, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[80%] md:w-auto space-y-3 md:space-y-6 group cursor-default">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#FFD23F] transition-all duration-500">
                  <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400 group-hover:text-black" />
                </div>
                <h3 className="font-extrabold text-base md:text-2xl tracking-tight text-gray-900">{item.t}</h3>
              </div>
              <p className="text-gray-500 text-xs md:text-lg font-medium leading-relaxed md:pl-1">{item.d}</p>
            </div>
          ))}
          <div className="md:hidden shrink-0 w-4"></div>
        </div>
      </section>

      {/* 7. FINAL CTA (Conversational) - Optimized for Mobile Height */}
      <section className="py-12 md:py-32 px-4">
        <div className="max-w-6xl mx-auto bg-[#FFD23F] rounded-3xl md:rounded-[5rem] p-8 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-[6rem] font-black tracking-tighter mb-6 md:mb-10 leading-[1] md:leading-[0.9] text-balance">Let's discuss <br/> your business.</h2>
            <p className="text-sm md:text-2xl font-bold mb-8 md:mb-16 text-black/60 max-w-2xl mx-auto leading-relaxed">
              No pressure. Just a simple conversation about how we can take the marketing load off your shoulders.
            </p>
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <a href={agencyInstagramLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 md:gap-4 bg-black text-white px-6 md:px-16 py-4 md:py-8 rounded-xl md:rounded-[3rem] font-extrabold text-base md:text-2xl hover:scale-[1.03] transition-all shadow-xl">
                Plan your growth with us
                <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-yellow-400" />
              </a>
              <p className="text-[8px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.4em] text-black/40">Available for 2 new clients this month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-24 px-4 md:px-6 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <Logo className="scale-[0.85] md:scale-100" />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-[12px] font-black uppercase tracking-[0.15em] text-gray-400">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#about" className="hover:text-black transition-colors">The Difference</a>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[9px] md:text-[11px] font-bold text-gray-300 uppercase tracking-[0.15em] md:tracking-[0.3em]">© 2024 Growthway Agency. Simplified Marketing.</p>
            <p className="text-[8px] md:text-[10px] font-medium text-gray-200 uppercase tracking-widest mt-1.5">Rishikesh & Dehradun, Uttarakhand</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA for Mobile - Refined */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-sm md:hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-black/90 backdrop-blur-md text-white p-1.5 pl-5 rounded-full shadow-2xl border border-white/5"
        >
          <span className="font-extrabold text-[10px] tracking-widest uppercase">Let's chat</span>
          <div className="w-9 h-9 bg-[#FFD23F] text-black rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
        </a>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
