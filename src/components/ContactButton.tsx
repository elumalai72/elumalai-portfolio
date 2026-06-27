interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const ContactButton = ({
  label = 'Contact Me',
  href = '#contact',
  onClick,
  className = '',
}: ContactButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #0d0d11 7%, #ff7a00 50%, #b85400 72%, #060608 100%)',
        boxShadow:
          '0px 8px 24px rgba(255, 122, 0, 0.2), 0px 4px 12px rgba(255, 122, 0, 0.15) inset',
        outline: '1px solid rgba(255, 255, 255, 0.4)',
        outlineOffset: '-4px',
      }}
    >
      {label}
    </a>
  );
};

export default ContactButton;