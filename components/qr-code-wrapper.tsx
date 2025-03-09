import React from "react";
import { Card, CardContent } from "./ui/card";
import QrCode from "./qr-code";

const QrCodeWrapper = () => {
  return (
    <Card className="grow rounded-sm py-4">
      <CardContent className=" px-4">
        <QrCode />
      </CardContent>
    </Card>
  );
};

export default QrCodeWrapper;
