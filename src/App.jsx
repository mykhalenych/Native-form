import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SecondStep from "./SecondStep";
import { Form, Formik } from "formik";
import getErrorsByValues from "./Validation";
import Navigation from "./Navigation";
import FirstStep from "./FirstStep";
import LastStep from "./LastStep";
import Steps from "./Steps";
import Box from "@material-ui/core/Box";
import Finish from "./Finish";

const App = () => {
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
  const [error, setError] = useState({});

  const initialValues = [
    {
      id: Math.round(Math.random() * 1000000),
      firstName,
      lastName,
      password,
      age,
      avatar,
      phone,
      email,
      sex,
      city,
    },
  ];

  const nextPage = () => {
    const errors = getErrorsByValues(initialValues[0], step);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
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
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
        >
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
                    error={error}
                  />
                </Box>
              )}
              {step === 1 && (
                <SecondStep
                  avatar={avatar}
                  setAvatar={setAvatar}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  error={error}
                />
              )}
              {step === 2 && (
                <LastStep
                  city={city}
                  setCity={setCity}
                  sex={sex}
                  setSex={setSex}
                />
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
        </Typography>
      </Container>
    </React.Fragment>
  );
};


export default App;
