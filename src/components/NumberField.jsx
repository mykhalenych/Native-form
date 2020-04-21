import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      backgroundColor: "#fdfdfd",
    },
  },
  input: {
    backgroundColor: "#fdfdfd",
    marginBotton: "30px",
  },
}));

export default function NumberField({ setValue, error }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        id="outlined-number"
        label="Tel me your age"
        type="number"
        variant="outlined"
        onChange={handleChange}
      />
      {error && (
        <Box className="invalid-feedback">{"Very funny :)"}</Box>
      )}
    </Box>
  );
}
