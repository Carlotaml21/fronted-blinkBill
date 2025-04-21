import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#0C2A34] rounded-full px-4 py-2 w-full max-w-md shadow-sm"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="¿Qué empresa estas buscando?"
        className="bg-transparent flex-1 text-white placeholder-gray-300 outline-none"
      />
      <button type="submit" className="ml-2">
        <Search size={18} className="text-white" />
      </button>
    </form>
  );
}
