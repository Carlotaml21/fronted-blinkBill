import React from "react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">

        <div>
          <h2 className="text-lg text-[#1D3440] mb-2">
            Política de Privacidad
          </h2>
          <h1 className="text-4xl font-bold text-[#1D3440]">
            <span className="text-[#26BFBF]">Tu privacidad</span> también cuenta
          </h1>
        </div>

       
        <p className="text-[#1D3440] text-base max-w-3xl">
          En BlinkBill, creemos que la transparencia no solo debe aplicarse a los datos empresariales,
          sino también a cómo tratamos tu información personal.
        </p>

    
        <div className="text-[#1D3440] space-y-6 text-justify text-sm leading-relaxed">
          <p>
            En BlinkBill, valoramos la transparencia y el respeto por la privacidad de los usuarios. Por ello,
            no recopilamos información personal como nombres, direcciones de correo electrónico, teléfonos
            ni ningún dato identificativo. Nuestra plataforma está diseñada exclusivamente para ofrecer
            acceso abierto y transparente a información empresarial ya publicada o registrada públicamente,
            sin que los visitantes tengan que introducir datos personales.
          </p>
          <p>
            La información accesible desde BlinkBill proviene de fuentes públicas o de empresas que han
            decidido hacer visible su información fiscal y comercial de forma voluntaria. En ningún caso
            se solicita ni almacena información privada del usuario, ni se utilizan formularios para
            captación de datos personales. Toda la navegación por la plataforma puede realizarse sin
            necesidad de registro o identificación.
          </p>
          <p>
            En BlinkBill no existe cesión, tratamiento ni almacenamiento de datos personales. Tampoco se
            realiza ningún tipo de perfilado de usuarios ni análisis basado en información privada. Nuestro
            compromiso es ofrecer un espacio completamente accesible, sin riesgos para tu privacidad ni
            interferencias en tu experiencia de navegación.
          </p>
          <p>
            Cualquier actualización en esta política será publicada en esta sección. Recomendamos revisar
            ocasionalmente este contenido para estar informado sobre cómo mantenemos un entorno seguro,
            libre de captación de datos. Si tienes preguntas sobre nuestro enfoque de privacidad, puedes
            escribirnos de forma general sin compartir información sensible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
