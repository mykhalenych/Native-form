import React, { useState } from "react";
import SecondStep from "./SecondStep";
import { Form, Formik } from "formik";
import getErrorsByValues from "./Validation";
import Navigation from "./Navigation";
import FirstStep from "./FirstStep";
import LastStep from "./LastStep";
import Steps from "./Steps";
import Box from "@material-ui/core/Box";
import Finish from "./Finish";

const Forma = () => {
  const [password, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [sex, setSex] = useState("");
  const [step, setPage] = useState(0);
  const [error, setError] = useState("");

  const initialValues = [
    {
      id: Math.round(Math.random() * 1000000),
      firstName: firstName,
      lastName: lastName,
      password: password,
      age: age,
      avatar: avatar,
      phone: phone,
      email: email,
      sex: sex,
      city: city,
    },
  ];
  const errors = {
    firstName: error,
    lastName: error,
    password: error,
    age: error,
    avatar: error,
    phone: error,
    email: error,
    sex: error,
    city: error,
  };

  const nextPage = () => {
    const errors = getErrorsByValues(initialValues[0], step);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setError("");
      setPage(step + 1);
    }
  };
  const prevPage = () => {
    setPage(step - 1);
  };
  const resetForm = () => {
    setPage(step - 3);
  };

  const handleSubmit = (initialValues, event) => {
    event.preventDefault();
    console.log(initialValues);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form">
        <Box className="steps mb-4">
          <Steps step={step} />
        </Box>
        {step === 0 && (
          <Box className="input">
            <FirstStep
              setFirstName={setFirstName}
              setLastName={setLastName}
              setPass={setPass}
              setAge={setAge}
              error={errors}
            />
          </Box>
        )}
        {step === 1 && (
          <SecondStep
            avatar={avatar}
            setAvatar={setAvatar}
            setEmail={setEmail}
            setPhone={setPhone}
            error={errors}
          />
        )}
        {step === 2 && (
          <LastStep city={city} setCity={setCity} sex={sex} setSex={setSex} />
        )}
        {step === 3 && <Finish value={initialValues} />}
        <Navigation
          onResetForm={resetForm}
          nextPage={nextPage}
          prevPage={prevPage}
          step={step}
        />
      </Form>
    </Formik>
  );
};

export default Forma;
