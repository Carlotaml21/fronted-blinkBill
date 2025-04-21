import { useState } from "react";

export default function CompanyForm({ onSubmit }) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre de la empresa es obligatorio.";
    }

    if (!/^[A-Z]\d{8}$/.test(formData.nif)) {
      newErrors.nif = "El NIF debe empezar con una letra seguida de 8 números.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si todo va bien
    setErrors({});
    onSubmit(formData);
    setFormData({
      name: "",
      nif: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm max-w-xs w-full space-y-4"
    >
      <h2 className="text-xl font-semibold text-[#1D3440]">Añade una Empresa</h2>

      {[
        { label: "Nombre Empresa", name: "name" },
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


