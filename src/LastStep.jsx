import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioField from "./components/RadioField";
import SelectField from "./components/SelectField";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";


const cities = [
  { name: "Kyiv" },
  { name: "Lviv" },
  { name: "Odessa" },
  { name: "Dnipro" },
  { name: "Kharkiv" },
];

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  wrap: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LastStep = ({ city, setCity, sex, setSex }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <RadioField sex={sex} setSex={setSex} />
      <SelectField value={cities} city={city} setCity={setCity} />
    </Box>
  );
};

LastStep.propTypes = {
  setAvatar: PropTypes.func,
  setSsetCityex: PropTypes.func,
  setPhone: PropTypes.func,
  city: PropTypes.string,
  sex: PropTypes.string,
};

export default LastStep;
