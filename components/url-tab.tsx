import React from "react";
import FormInput from "./ui/form-input";
import { Button } from "./ui/button";

const UrlTab = () => {
  return (
    <div className="flex flex-col space-y-6 mt-10">
      <FormInput
        name="url"
        type="url"
        placeholder="Enter url"
        inputType="input"
        label="Enter url for Qr code"
      />
      <FormInput
        label="Logo for the QR code"
        name="logo"
        type="file"
        inputType="input"
      />
      <Button>Generate Qr Code</Button>
    </div>
  );
};

export default UrlTab;
