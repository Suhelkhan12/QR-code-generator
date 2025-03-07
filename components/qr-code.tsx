import React from "react";
import { Card, CardContent } from "./ui/card";
import QrCodeColor from "./qr-code-color";

const QrCode = () => {
  return (
    <Card className="grow rounded-sm py-4">
      <CardContent className=" px-4">
        <QrCodeColor />
      </CardContent>
    </Card>
  );
};

export default QrCode;
