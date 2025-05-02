import { useState } from "react";

interface FormInputProps {
  value: string | number;
  onChange: () => void;
  type: "text" | "number";
  placeHolder: string;
  name: string;
  error: string;
}
function FormValidation() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  });
  console.log("getting rendered");
  const handleInputChange = (event): void => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <div>
      <form>
        <FormInput
          type="text"
          name="firstName"
          placeHolder="Enter your name"
          value={userInput.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
        />
      </form>
    </div>
  );
}

export default FormValidation;

const FormInput = ({
  value,
  onChange,
  type,
  name,
  placeHolder,
  error,
}: FormInputProps) => {
  return (
    <div className="input-holder">
      <label>{name}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeHolder}
      ></input>
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};
