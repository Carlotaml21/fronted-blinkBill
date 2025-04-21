import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import CompanyForm from "../components/CompanyForm";

export default function HomePage() {
  const [companies, setCompanies] = useState([
    {
      name: "Nombre Empresa 1",
      nif: "12345678A",
      address: "Calle 1",
      city: "Ciudad 1",
      province: "Provincia 1",
      postalCode: "11111",
    },
    {
      name: "Nombre Empresa 2",
      nif: "87654321B",
      address: "Calle 2",
      city: "Ciudad 2",
      province: "Provincia 2",
      postalCode: "22222",
    },
    {
      name: "Nombre Empresa 3",
      nif: "11223344C",
      address: "Calle 3",
      city: "Ciudad 3",
      province: "Provincia 3",
      postalCode: "33333",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
     
      <h1 className="text-center font-semibold text-xl text-[#1D3440] mb-6">
        Toda la información, en un abrir y cerrar de ojos
      </h1>

      
      <div className="flex justify-center items-center gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} onSearch={() => {}} />

        <button
          onClick={() => setShowForm((prev) => !prev)}
          title="Añadir empresa"
          className="w-10 h-10 flex items-center justify-center"
        >
          <img
            src="/src/assets/plusButton.png"
            alt="Botón añadir"
            className="w-9 h-9 object-contain hover:scale-105 transition-transform"
          />
        </button>
      </div>

      
      {showForm && (
        <div className="absolute top-28 left-1/2 z-50">
          <CompanyForm onSubmit={handleAddCompany} />
        </div>
      )}

      
      <div className="space-y-4">
        {filteredCompanies.map((company, idx) => (
          <CompanyCard
            key={idx}
            company={company}
            onEdit={() => alert("Editar empresa")}
            onDelete={() =>
              setCompanies(companies.filter((_, i) => i !== idx))
            }
          />
        ))}
      </div>
    </div>
  );
}

