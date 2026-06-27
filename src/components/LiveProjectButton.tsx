import React from 'react';

interface ProjectLinksProps {
  demoHref?: string;
  githubHref?: string;
  className?: string;
}

const ProjectLinks = ({
  demoHref = '#', 
  githubHref = 'https://github.com/elumalai72', 
  className = '',
}: ProjectLinksProps) => {
  
  const baseButtonStyles = `inline-flex items-center justify-center rounded-full border-2 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest whitespace-nowrap transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`;

  return (
    <div className={`flex flex-col sm:flex-row gap-4 items-center ${className}`}>
      
      {/* 1. Live Demo Button */}
      <a
        href={demoHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseButtonStyles} border-[#ff7a00]/30 text-[#D7E2EA] hover:border-[#ff7a00] hover:text-[#ff7a00] hover:bg-[#ff7a00]/5 hover:shadow-[#ff7a00]/10`}
      >
        <span className="mr-2 inline-block w-2 h-2 rounded-full bg-[#ff7a00] animate-pulse" />
        Live Demo
      </a>

      {/* 2. GitHub Repository Button */}
      <a
        href={githubHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseButtonStyles} border-[#D7E2EA]/30 text-[#D7E2EA] hover:border-[#00ffcc] hover:text-[#00ffcc] hover:bg-[#00ffcc]/5 hover:shadow-[#00ffcc]/10`}
      >
        <svg 
          className="mr-2 h-5 w-5 fill-current" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
        GitHub
      </a>

    </div>
  );
};

export default ProjectLinks;