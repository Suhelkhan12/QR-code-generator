import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

interface FormInputType {
  name: string;
  placeholder?: string;
  type: string;
  label: string;
  inputType: "textarea" | "input";
}
const FormInput = (props: FormInputType) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.inputType === "input" ? (
        <Input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      ) : (
        <Textarea
          placeholder={props.placeholder}
          name={props.name}
          className=" resize-none h-32"
        />
      )}
    </div>
  );
};

export default FormInput;
