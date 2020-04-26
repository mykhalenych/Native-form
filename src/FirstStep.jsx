import React from "react";
import TextFields from "./components/TextField";
import Password from "./components/Password";
import NumberField from "./components/NumberField";
import PropTypes from "prop-types";


const FirstStep = ({
  setFirstName,
  setLastName,
  setPass,
  setAge,
  error,
}) => {
  return (
    <>
      <TextFields
        label={"First name"}
        setValue={setFirstName}
        error={error.firstName}
      />
      <TextFields
        label={"Last name"}
        setValue={setLastName}
        error={error.lastName}
      />
      <Password setValue={setPass} error={error.password} />
      <NumberField error={error.age} setValue={setAge}/>
    </>
  );
};

FirstStep.propTypes = {
  error: PropTypes.object,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  password: PropTypes.string,
  age: PropTypes.number,
};


export default FirstStep;
