import React from "react";

const HeroTop = () => {
  return (
    <header className="text-center">
      <h1 className="md:text-6xl text-5xl font-extrabold mb-4">
        QR Code Generator{" "}
      </h1>
      <p className=" text-lg text-gray-600">
        Choose between URL and Email QR codes to suit your needs.
      </p>
    </header>
  );
};

export default HeroTop;
