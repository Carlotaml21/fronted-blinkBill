import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-black py-4 px-6 flex justify-between items-center border-t border-gray-300">
      {/* Lado izquierdo: copyright + enlaces */}
      <div className="flex items-center space-x-20">
        <span>©Copyright 2025</span>
        <div className="space-x-10">
          <a href="/sobre" className="underline hover:text-[#26bfbf]">
            Sobre BlinkBill
          </a>
          <a href="/privacidad" className="underline hover:text-[#26bfbf]">
            Políticas de Privacidad
          </a>
        </div>
      </div>

      {/* Lado derecho: autor + GitHub */}
      <div className="flex items-center space-x-2">
        <span>
          Creado por <strong>Carlotaml21</strong>
        </span>
        <a
          href="https://github.com/Carlotaml21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repositorio de GitHub de Carlotaml21"
        >
          <svg
            className="w-6 h-6 text-black hover:text-[#26bfbf] transition-colors duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .297a12 12 0 00-3.8 23.4c.6.113.82-.263.82-.583v-2.04c-3.34.726-4.042-1.416-4.042-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.218.697.825.58A12 12 0 0012 .297z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
