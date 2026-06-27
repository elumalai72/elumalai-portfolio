import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  "I am an Electronics and Communication Engineering student, AI explorer, content creator, and aspiring entrepreneur focused on building innovative solutions through technology, automation, and business strategy. With a strong foundation in artificial intelligence, embedded systems, and VLSI concepts, I combine technical depth with entrepreneurial drive to develop scalable, future-ready products in healthcare, automation, and smart infrastructure.";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative background elements remain the same */}
      {/* ... (Keep your existing decorative FadeIn images here) ... */}

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Image with Float Animation */}
        <FadeIn delay={0.2} y={0} x={-40} className="w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff7a00] to-[#00ffcc] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="elu.jpeg"
              alt="S. Elumalai"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl animate-float"
              draggable={false}
            />
          </div>
        </FadeIn>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
          <FadeIn delay={0.3} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              Who I Am
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed text-[#D7E2EA] max-w-2xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          />

          {/* Skills Section */}
          <FadeIn delay={0.4} className="w-full">
            <div className="flex flex-col gap-6 text-left">
              {[
                { label: 'AI & ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'] },
                { label: 'IoT & Embedded', items: ['ESP32', 'IoT Architecture', 'Sensors', 'Real-time Systems'] },
                { label: 'Business & Creative', items: ['Digital Marketing', 'Strategy', 'Video Editing', 'Content'] },
              ].map((group) => (
                <div key={group.label} className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#ff7a00] font-bold w-32 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-[#D7E2EA]/10 px-3 py-1 text-xs text-[#D7E2EA]/70 hover:border-[#ff7a00]/50 hover:text-[#ff7a00] transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
      
      {/* Add this to your index.css or tailwind.config.js for the float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default AboutSection;