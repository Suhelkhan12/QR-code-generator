import React from "react";
import FormInput from "./ui/form-input";
import { Button } from "./ui/button";

const EmailTab = () => {
  return (
    <div className="flex flex-col space-y-6 mt-10">
      <FormInput
        name="email"
        placeholder="Enter email"
        label="Email for QR code"
        type="email"
        inputType="input"
      />
      <FormInput
        name="subject"
        placeholder="Enter subject"
        label="Subject for email"
        type="text"
        inputType="input"
      />
      <FormInput
        name="message"
        placeholder="Enter message"
        label="Message for the email"
        type="text"
        inputType="textarea"
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

export default EmailTab;
