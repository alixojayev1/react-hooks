import { useState } from "react";
const inputValidation = () => {

    const [value, setValue] = useState("");

    const onChangeVal = (event) => {
      setValue(event.target.value);
    };

    const errorValidation = () =>
      value.search(/\d/) >= 1 ? "text-danger" : null;

    return { value, onChangeVal, errorValidation };
  };
export default inputValidation;
