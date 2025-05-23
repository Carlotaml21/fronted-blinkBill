import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function CompanyCard({ company, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCompany, setEditedCompany] = useState({ ...company });
  const [errors, setErrors] = useState({});

  const fields = [
    { name: "nif", label: "NIF" },
    { name: "address", label: "Dirección" },
    { name: "city", label: "Ciudad" },
    { name: "province", label: "Provincia" },
    { name: "postalCode", label: "Código Postal" },
  ];

  const mapCompanyToBackend = (company) => {
    const { nif, ...rest } = company;
    return {
      ...rest,
      taxId: nif,
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCompany({ ...editedCompany, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!editedCompany.name.trim()) {
      newErrors.name = "El nombre de la empresa es obligatorio.";
    }
    if (!/^[A-Za-z]\d{8}$/.test(editedCompany.nif)) {
      newErrors.nif = "El NIF debe empezar con una letra seguida de 8 números.";
    }
    return newErrors;
  };

  const handleSaveClick = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const companyToSend = mapCompanyToBackend(editedCompany);

    try {
      const response = await fetch(`${API_URL}/v1/billing/${company.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyToSend),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la empresa');
      }

      const savedCompany = await response.json();
      onSave(savedCompany);
      setEditedCompany({
        id: savedCompany.id,
        name: savedCompany.name,
        nif: savedCompany.taxId,
        address: savedCompany.address,
        city: savedCompany.city,
        province: savedCompany.province,
        postalCode: savedCompany.postalCode,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error al guardar:', error);
      setErrors({ general: 'No se pudo guardar la empresa. Intenta más tarde.' });
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`${API_URL}/v1/billing/${company.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la empresa');
      }

      onDelete(company.id);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setErrors({});
  };

  return (
    <div className="bg-white border border-[#B2C4EC] rounded-2xl p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">
        {isEditing ? (
          <>
            <input
              name="name"
              value={editedCompany.name}
              onChange={handleInputChange}
              className="border p-1 rounded w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </>
        ) : (
          editedCompany.name
        )}
      </h2>

      <div className="flex justify-between items-start">
        <div className="text-clip text-gray-700 space-y-0.5 w-full">
          {fields.map(({ name, label }) =>
            isEditing ? (
              <div key={name}>
                <p>
                  {label}:{" "}
                  <input
                    name={name}
                    value={editedCompany[name]}
                    onChange={handleInputChange}
                    className="border p-1 rounded w-full"
                  />
                </p>
                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
              </div>
            ) : (
              <p key={name}>
                {label}: {editedCompany[name]}
              </p>
            )
          )}
          {errors.general && (
            <p className="text-red-500 text-sm mt-2">{errors.general}</p>
          )}
        </div>

        <div className="flex gap-2 ml-4 mt-20">
          <button
            onClick={handleDeleteClick}
            className="bg-teal-500 hover:bg-teal-600 text-[#1D3440] p-2 rounded-xl transition shadow-lg"
            aria-label="Eliminar empresa"
          >
            <Trash size={20} />
          </button>

          <button
            onClick={isEditing ? handleSaveClick : handleEditClick}
            className={`${
              isEditing ? "bg-green-500 hover:bg-green-600 text-white" : "bg-teal-500 hover:bg-teal-600 text-[#1D3440]"
            } p-2 rounded-xl transition shadow-lg`}
            aria-label={isEditing ? "Guardar cambios" : "Editar empresa"}
          >
            {isEditing ? "Guardar" : <Pencil size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}