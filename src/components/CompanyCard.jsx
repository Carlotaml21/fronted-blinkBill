import { Pencil, Trash } from "lucide-react";

export default function CompanyCard({ company, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-[#B2C4EC] rounded-2xl p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{company.name}</h2>

      <div className="flex justify-between items-start">
        
        <div className="text-clip text-gray-700 space-y-0.5">
          <p>NIF: {company.nif}</p>
          <p>Dirección: {company.address}</p>
          <p>Ciudad: {company.city}</p>
          <p>Provincia: {company.province}</p>
          <p>Código Postal: {company.postalCode}</p>
        </div>

        
        <div className="flex gap-2 ml-4 mt-20">
          <button
            onClick={onDelete}
            className="bg-teal-500 hover:bg-teal-600 text-[#1D3440] p-2 rounded-xl transition shadow-lg"
          >
            <Trash size={20} />
          </button>
          <button
            onClick={onEdit}
            className="bg-teal-500 hover:bg-teal-600 text-[#1D3440] p-2 rounded-xl transition shadow-lg"
          >
            <Pencil size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}


