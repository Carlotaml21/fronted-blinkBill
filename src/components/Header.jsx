import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#F2F2F2] px-5 py-1 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logoBlinkBill.png"
            alt="BlinkBill Logo"
            className="h-20 w-auto"
          />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      
      {menuOpen && (
        <div className="absolute right-5 top-[80px] bg-white shadow-md p-4 rounded-md flex flex-col gap-2 text-[#1D3640] font-medium z-50">
          <a href="#">Inicio</a>
          <a href="#">Contacto</a>
        </div>
      )}
    </>
  );
}

