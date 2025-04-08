import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white px-12 py-14 flex flex-col gap-12">
      
      <div className="md:w-full">
  <p className="text-xl text-[#1D3440] mb-2">Contacta con nosotros</p>
  <h1 className="text-4xl font-bold text-[#26BFBF] mb-4 max-w-lg">
    Haz que tu empresa cuente
  </h1>
  <p className="text-[#1D3440] leading-relaxed max-w-4xl">
    BlinkBill te da el control de tu información empresarial. Si tienes dudas, ideas o sugerencias, estamos para ti.
  </p>
</div>

   
      <div className="w-full max-w-xl mx-auto space-y-4">
       
        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
          <Mail className="text-[#26BFBF] w-6 h-6" />
          <div>
            <p className="text-sm text-[#1D3440]">Email:</p>
            <p className="font-medium text-[#1D3440]">blinkbillcontact@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
          <Phone className="text-[#26BFBF] w-6 h-6" />
          <div>
            <p className="text-sm text-[#1D3440]">Teléfono:</p>
            <p className="font-medium text-[#1D3440]">(+34) 634 75 80 47</p>
          </div>
        </div>

        
        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
          <MapPin className="text-[#26BFBF] w-6 h-6" />
          <div>
            <p className="text-sm text-[#1D3440]">Dirección:</p>
            <p className="font-medium text-[#1D3440]">
              Dirección Inventada, 123, Asturias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


