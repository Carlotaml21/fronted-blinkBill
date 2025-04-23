import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-bold text-[#26BFBF] mb-8 text-center">Sobre Nosotros</h1>

      <div className="max-w-3xl space-y-6 text-center text-xl text-[#1D3440]">
        <p>
          En <span className="text-[#26BFBF]"> BlinkBill</span>, creemos en la transparencia y accesibilidad de la información empresarial. 
          Nuestra plataforma te permite consultar libremente los datos de facturación de empresas de manera rápida y sencilla.
        </p>

        <p>
          Además, si eres empresario o autónomo, puedes añadir tu propia empresa y actualizar su información en cualquier momento, asegurando que los datos sean siempre precisos y relevantes.
        </p>

        <p>
          Ya seas un profesional en busca de referencias comerciales o una empresa que quiere mejorar su visibilidad, 
          <span className="text-[#26BFBF]"> BlinkBill</span> te ofrece una solución ágil y abierta para gestionar la información de facturación en un solo lugar.
        </p>
      </div>

      <p className="mt-12 text-center text-[#1D3440] font-bold text-xl">
        Únete a nuestra <span className="text-[#26BFBF]">comunidad</span> y descubre cómo la transparencia puede impulsar tu negocio.
      </p>

      <div className="mt-8">
        <img 
          src="/src/assets/logoBlinkBill.png" 
          alt="BlinkBill logo" 
          className="w-20 h-20 mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutPage;
