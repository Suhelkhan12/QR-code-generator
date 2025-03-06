import React from "react";

const HeroTop = () => {
  return (
    <header className="text-center">
      <h1 className="md:text-7xl text-4xl font-bold mb-4">
        QR Code Generator{" "}
      </h1>
      <p className="md:text-xl text-lg text-gray-600">
        Choose between URL and Email QR codes to suit your needs
      </p>
    </header>
  );
};

export default HeroTop;
