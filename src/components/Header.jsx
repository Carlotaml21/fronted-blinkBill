export default function Header() {
    return (
      <header className="w-full bg-gray-100 px-5 py-1 shadow-sm flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src="/src/assets/logoBlinkBill.png" alt="BlinkBill Logo" className="h-20 w-auto" />
        </div>
  
        <button className="block">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>  
         
        </button>
      </header>
    );
  }
  