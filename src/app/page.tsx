"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) {
  const ref = useReveal();
  return (
    <section ref={ref} id={id} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 max-w-[1120px] mx-auto px-6 pt-12 pb-18 animate-fadeUp md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-14 md:pb-20">
        <div className="max-w-[580px]">
          <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-text-secondary mb-[14px]">Tactical Simulation</p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-text-primary">
            Interactive Dementia Care Simulator
          </h1>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[52ch] mb-7">
            Train caregivers through branching, choice-driven scenarios. Test your empathy, communication, and safety reflexes before you need them.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              className="inline-flex items-center justify-center h-[52px] px-7 bg-accent-primary text-surface-elevated font-body text-[16px] font-medium rounded-full no-underline border-none cursor-pointer transition-[opacity,transform] duration-150 whitespace-nowrap active:scale-[0.98] hover:bg-accent-hover"
              href="#cta"
            >Available Soon</a>
            <a
              className="inline-flex items-center justify-center h-[52px] px-1 text-text-secondary font-body text-[16px] font-medium no-underline transition-colors duration-150 hover:text-text-primary"
              href="#app"
            >Explore Capabilities</a>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[800px] w-full animate-[fadeUp_0.6s_cubic-bezier(0.25,0.1,0.25,1)_0.15s_both] flex items-center justify-center">
          <Image 
            src="/app_photos/simulation_screen.png" 
            alt="Active simulation interface" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </section>

      <div className="warm-divider max-w-[1120px] mx-auto"></div>

      {/* ── GALLERY ───────────────────────────────────────────── */}
      <Section className="max-w-[1120px] mx-auto px-6 py-14 md:py-18">
        <div className="text-center mb-16">
            <p className="text-[18px] leading-[1.6] text-text-secondary mt-[14px] mx-auto">
            A preview of the Chronomind simulation environment.
            </p>
        </div>
        
        <div className="mb-20">
          <div className="mb-8 text-center">
            <h3 className="font-editorial text-[1.75rem] font-bold text-text-primary mb-2">The Simulation Interface</h3>
            <p className="text-text-secondary text-[16px]">Interactive dialogue practice and real-time empathy state tracking.</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden group">
              <Image 
                src="/app_photos/simulation_screens.png" 
                alt="Chronomind Simulation Screens" 
                fill 
                className="object-contain group-hover:scale-[1.01] transition-transform duration-700" 
              />
          </div>
        </div>

        <div>
          <div className="mb-10 text-center">
            <h3 className="font-editorial text-[1.75rem] font-bold text-text-primary mb-2">Educational Resources</h3>
            <p className="text-text-secondary text-[16px]">Tactical playbooks and validated clinical research at your fingertips.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="aspect-[1.2/1] overflow-hidden relative group">
                  <Image 
                    src="/app_photos/list_of_articles.png" 
                    alt="Resource library" 
                    fill 
                    className="object-contain group-hover:scale-[1.03] transition-transform duration-500" 
                  />
              </div>
              <div className="aspect-[1.2/1] overflow-hidden relative group">
                  <Image 
                    src="/app_photos/article_screen.png" 
                    alt="Detailed article view" 
                    fill 
                    className="object-contain group-hover:scale-[1.03] transition-transform duration-500" 
                  />
              </div>
          </div>
        </div>
      </Section>

      {/* ── OUR PRIORITY & STATS (DUAL LENS STYLE) ─────────────────────────────────────────── */}
      <div className="w-full bg-background-secondary py-14 md:py-18 mt-10">
        <Section className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-normal leading-[1.18] tracking-[-0.01em] text-text-primary m-0 text-center">
            Our Priority.
            </h2>

            <div className="grid grid-cols-1 gap-[14px] mt-10 md:grid-cols-2">
            <div className="bg-surface-elevated border border-border-subtle border-l-[4px] border-l-accent-primary rounded-[14px] p-8 relative shadow-sm">
                <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent-primary mb-[18px] m-0">The Mission</p>
                <blockquote className="font-editorial text-[1.25rem] font-normal leading-[1.45] text-text-primary mb-4 p-0 border-none m-0">
                "Chronomind is a tactical simulation tool. We build choice-driven dialogue models that allow caregivers to practice their response to dementia-related crises in a zero-risk environment before executing them in reality."
                </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
                <div className="bg-surface-elevated border border-border-subtle rounded-[14px] p-6 flex flex-col justify-center text-center shadow-sm">
                    <span className="font-display text-3xl md:text-4xl text-accent-primary font-bold">56.7M</span>
                    <span className="text-xs text-text-secondary mt-2 font-medium">Care products market projected (2033)</span>
                </div>
                <div className="bg-surface-elevated border border-border-subtle rounded-[14px] p-6 flex flex-col justify-center text-center shadow-sm">
                    <span className="font-display text-3xl md:text-4xl text-status-warning font-bold">1 in 6</span>
                    <span className="text-xs text-text-secondary mt-2 font-medium">People aged over 60 by 2030</span>
                </div>
                <div className="bg-surface-elevated border border-border-subtle rounded-[14px] p-6 flex flex-col justify-center text-center shadow-sm">
                    <span className="font-display text-3xl md:text-4xl text-status-success font-bold">426M</span>
                    <span className="text-xs text-text-secondary mt-2 font-medium">People aged over 80 by 2050</span>
                </div>
                <div className="bg-surface-elevated border border-border-subtle rounded-[14px] p-6 flex flex-col justify-center text-center shadow-sm">
                    <span className="font-display text-3xl md:text-4xl text-status-error font-bold">2x</span>
                    <span className="text-xs text-text-secondary mt-2 font-medium">Expected dementia cases by 2060</span>
                </div>
            </div>
            </div>
        </Section>
      </div>

      {/* ── TECHNICAL CAPABILITIES ──────────────────────────────────────────── */}
      <Section id="app" className="max-w-[1120px] mx-auto px-6 py-14 md:py-18">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-normal leading-[1.18] tracking-[-0.01em] text-text-primary m-0 text-center">
          Technical Capabilities.
        </h2>
        <p className="text-[18px] leading-[1.6] text-text-secondary mt-[14px] mb-10 mx-auto text-center max-w-[50ch]">
          Specific tools to build functional caregiving skills in a zero-risk environment.
        </p>

        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-[1.5fr_1fr]">
          <div className="bg-surface-elevated border border-border-subtle border-t-[3px] border-t-accent-primary rounded-[14px] p-7 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <span className="inline-flex items-center h-6 px-[10px] rounded-[6px] text-[11px] font-medium tracking-[0.06em] uppercase text-surface-elevated bg-accent-primary">CORE</span>
            <h3 className="font-editorial text-[1.25rem] font-bold leading-[1.3] text-text-primary mt-[14px] mb-[10px]">Dynamic Empathy Simulator</h3>
            <p className="text-[15px] leading-[1.6] text-text-secondary m-0">
              Practice difficult conversations using choice-driven scenarios. Your dialogue decisions actively modify local state variables for empathy, communication, and safety.
            </p>
          </div>

          <div className="bg-surface-elevated border border-border-subtle border-t-[3px] border-t-status-warning rounded-[14px] p-7 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <span className="inline-flex items-center h-6 px-[10px] rounded-[6px] text-[11px] font-medium tracking-[0.06em] uppercase text-text-primary bg-status-warning">TRACKER</span>
            <h3 className="font-editorial text-[1.25rem] font-bold leading-[1.3] text-text-primary mt-[14px] mb-[10px]">Caregiver Burnout Tracker</h3>
            <p className="text-[15px] leading-[1.6] text-text-secondary m-0">
              Patient care must balance with self-care. Our scoring algorithm applies a mathematical threshold penalty to your grade if your calculated stress level exceeds safe limits.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-[14px] mt-[14px] md:grid-cols-[1fr_1.5fr]">
          <div className="bg-surface-elevated border border-border-subtle border-t-[3px] border-t-status-success rounded-[14px] p-7 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <span className="inline-flex items-center h-6 px-[10px] rounded-[6px] text-[11px] font-medium tracking-[0.06em] uppercase text-surface-elevated bg-status-success">SECURE</span>
            <h3 className="font-editorial text-[1.25rem] font-bold leading-[1.3] text-text-primary mt-[14px] mb-[10px]">Local Privacy Architecture</h3>
            <p className="text-[15px] leading-[1.6] text-text-secondary m-0">
              Your data never leaves your device. State management and offline persistence are handled locally without telemetry or remote databases.
            </p>
          </div>
          
          <div className="bg-surface-elevated border border-border-subtle border-t-[3px] border-t-accent-professional rounded-[14px] p-7 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <span className="inline-flex items-center h-6 px-[10px] rounded-[6px] text-[11px] font-medium tracking-[0.06em] uppercase text-surface-elevated bg-accent-professional">RESOURCE</span>
            <h3 className="font-editorial text-[1.25rem] font-bold leading-[1.3] text-text-primary mt-[14px] mb-[10px]">Actionable Playbooks</h3>
            <p className="text-[15px] leading-[1.6] text-text-secondary m-0">
              Access concrete redirection techniques, such as validation therapy and sensory cueing. No vague advice, only specific, operational guidance for behavioral crises.
            </p>
          </div>
        </div>
      </Section>

    </div>
  );
}
