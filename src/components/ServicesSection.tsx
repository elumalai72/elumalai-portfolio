import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'AI & ML Engineering',
    description:
      'Designing intelligent systems, training deep learning architectures, building natural language processing models, and deploying predictive analytics pipelines to solve real-world problems.',
  },
  {
    number: '02',
    title: 'Embedded & IoT',
    description:
      'Developing smart hardware prototypes and custom IoT architectures using microcontrollers like the ESP32, integrating sensor components, and scripting real-time automation logic.',
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description:
      'Securing interconnected infrastructures, implementing threat mitigation protocols, hardening digital assets, and ensuring robust protection across network nodes.',
  },
  {
    number: '04',
    title: 'Entrepreneurship',
    description:
      'Building scalable digital ventures, refining minimal viable products (MVPs), and engineering business models at the crossroads of hardware innovation and modern web technology.',
  },
  {
    number: '05',
    title: 'Networking',
    description:
      'Designing robust communication topologies, structural industrial networks, wireless data routing configurations, and managing low-latency connectivity environments.',
  },
  {
    number: '06',
    title: 'Digital Marketing',
    description:
      'Deploying strategic full-funnel content distribution, brand position building, conversion analytics, and cross-platform growth strategies to build a solid audience footprint.',
  },
  {
    number: '07',
    title: 'Content Creator',
    description:
      'Educational digital storytelling and video production across YouTube, Instagram, and LinkedIn channels focusing on engineering domains, computing technology, and interactive tools.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none transition-colors duration-300 hover:text-[#ff7a00]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#ff7a00] transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;