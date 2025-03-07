"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { QRCodeSVG } from "qrcode.react";

const QrCodeColor = () => {
  const [qrColor, setQrColor] = useState<string>("#000000");
  const [qrBgColor, setQrBgColor] = useState<string>("#ffffff");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Select colors for QR code</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        <ColorColumn
          name="qr-code-color"
          label="Qr color"
          color={qrColor}
          setColor={setQrColor}
        />
        <ColorColumn
          name="qr-bg-color"
          label="Qr bg color"
          color={qrBgColor}
          setColor={setQrBgColor}
        />
      </div>
      <div className="mt-4 flex items-center justify-center">
        <QRCodeSVG
          value={"https://suhelkhan.com"}
          size={256}
          fgColor={qrColor}
          bgColor={qrBgColor}
        />
      </div>
    </div>
  );
};

export default QrCodeColor;

interface ColorColumnProps {
  name: string;
  label: string;
  color: string;
  setColor: (color: string) => void;
}

function ColorColumn({ name, label, color, setColor }: ColorColumnProps) {
  return (
    <div className="w-full rounded-sm shadow-sm border px-2 py-3 flex flex-col gap-2">
      <label className=" capitalize text-xs font-medium">{label}</label>
      <Input
        name={name}
        type="color"
        className="p-1"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p className="mt-1 text-xs">
        Selected color: <span className="font-medium">{color}</span>
      </p>
    </div>
  );
}
