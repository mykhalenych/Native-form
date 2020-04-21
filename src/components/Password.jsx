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

export default function Password({ setValue, error }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={handleChange}
      />
      {error && (
        <Box className="invalid-feedback">{"Must be 6 characters or more"}</Box>
      )}
    </Box>
  );
}
