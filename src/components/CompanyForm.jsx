import { useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function CompanyForm({ onCompaniesReload }) {
  const [formData, setFormData] = useState({
    name: "",
    nif: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre de la empresa es obligatorio.";
    }

    if (!formData.nif.trim() || !/^[A-Za-z]\d{8}$/.test(formData.nif)) {
      newErrors.nif = "El NIF debe empezar con una letra seguida de 8 números.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "La dirección es obligatoria.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "La ciudad es obligatoria.";
    }

    if (!formData.province.trim()) {
      newErrors.province = "La provincia es obligatoria.";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "El código postal es obligatorio.";
    } else if (!/^\d+$/.test(formData.postalCode.trim())) {
      newErrors.postalCode = "El código postal debe ser numérico.";
    } else if (formData.postalCode.trim().length !== 5) {
      newErrors.postalCode = "El código postal debe tener 5 dígitos.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const billingData = {
      name: formData.name.trim(),
      taxId: formData.nif.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      province: formData.province.trim(),
      postalCode: parseInt(formData.postalCode.trim(), 10),
    };

    try {
      const response = await fetch(`${API_URL}/v1/billing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(billingData),
      });

      if (!response.ok) {
        throw new Error("Error al crear la empresa");
      }

      await reloadCompanies();

      setFormData({
        name: "",
        nif: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const reloadCompanies = async () => {
    try {
      const response = await fetch(`${API_URL}/v1/billing`);
      if (!response.ok) {
        throw new Error("Error al obtener todas las empresas");
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
      onCompaniesReload(adaptedCompanies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm max-w-xs w-full space-y-4"
    >
      <h2 className="text-xl font-semibold text-[#1D3440]">Añade una Empresa</h2>

      {[{ label: "Nombre Empresa", name: "name" },
        { label: "NIF", name: "nif" },
        { label: "Dirección", name: "address" },
        { label: "Ciudad", name: "city" },
        { label: "Provincia", name: "province" },
        { label: "Código Postal", name: "postalCode" },
      ].map(({ label, name }) => (
        <div key={name} className="flex flex-col">
          <label className="text-sm text-gray-800">{label}</label>
          <input
            type="text"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className={`border rounded-md p-2 ${
              errors[name] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors[name] && (
            <span className="text-red-500 text-xs mt-1">{errors[name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-[#0C2A34] text-white py-2 px-14 rounded-md hover:bg-[#12333f] transition"
      >
        Añadir nueva empresa
      </button>
    </form>
  );
}
