import { useEffect, useRef, useState } from 'react';

// Upgraded imagery pool matching AI systems, connected nodes, circuits, and advanced engineering visuals
const IMAGES = [
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', // AI Tech Node
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80', // Network Infrastructure
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // Cyber Abstract Grid
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', // Pixar Style Cyber Workspace
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', // Microcontroller Circuitry
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', // Robotic Tech Panel
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', // Connected Global Network
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80', // Digital Matrix Flow
  'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&q=80', // Code Execution Window
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', // Cloud Datacenter Servers
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80', // Machine Learning Analytics
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80', // Automation Systems
];

const ROW_ONE = IMAGES.slice(0, 6);
const ROW_TWO = IMAGES.slice(6);

// Triple the arrays for seamless looping appearance
const tripled = (arr: string[]) => [...arr, ...arr, ...arr];

interface RowProps {
  images: string[];
  offset: number;
  direction: 'left' | 'right';
}

const Row = ({ images, offset, direction }: RowProps) => {
  const translate =
    direction === 'right' ? offset - 200 : -(offset - 200);

  return (
    <div className="flex gap-4" style={{ willChange: 'transform', transform: `translateX(${translate}px)` }}>
      {tripled(images).map((src, i) => (
        <div
          key={i}
          className="shrink-0 overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d11] transition-all duration-500 hover:border-[#ff7a00]/30"
          style={{ width: 420, height: 270 }}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll(); // initialize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#060608] pt-24 sm:pt-32 md:pt-40 pb-10"
    >
      <div className="flex flex-col gap-4">
        <Row images={ROW_ONE} offset={offset} direction="right" />
        <Row images={ROW_TWO} offset={offset} direction="left" />
      </div>
    </section>
  );
};

export default MarqueeSection;