import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import CompanyForm from "../components/CompanyForm";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchCompanies = async (filter = "") => {
    try {
      const url = filter
        ? `${API_URL}/v1/billing?filter=${encodeURIComponent(filter)}`
        : `${API_URL}/v1/billing`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al buscar empresas");
      }
      const data = await response.json();
      const adaptedCompanies = data.map((company) => ({
        id: company.id,
        name: company.name,
        nif: company.taxId,
        address: company.address,
        city: company.city,
        province: company.province,
        postalCode: company.postalCode,
      }));
      setCompanies(adaptedCompanies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleAddCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
    setShowForm(false);
  };

  const handleSearch = () => {
    fetchCompanies(search);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <h1 className="text-center font-semibold text-xl text-[#1D3440] mb-6">
        Toda la información, en un abrir y cerrar de ojos
      </h1>

      <div className="flex justify-center items-center gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />

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
          <CompanyForm onCompaniesReload={(newCompanies) => {
                        setCompanies(newCompanies);
                        setShowForm(false);
}} />
        </div>
      )}

      <div className="space-y-4">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onDelete={() =>
              setCompanies((prev) => prev.filter((c) => c.id !== company.id))
            }
            onSave={(updatedCompany) =>
              setCompanies((prev) =>
                prev.map((c) =>
                  c.id === updatedCompany.id
                    ? {
                        id: updatedCompany.id,
                        name: updatedCompany.name,
                        nif: updatedCompany.taxId,
                        address: updatedCompany.address,
                        city: updatedCompany.city,
                        province: updatedCompany.province,
                        postalCode: updatedCompany.postalCode,
                      }
                    : c
                )
              )
            }
          />
        ))}
      </div>
    </div>
  );
}