import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const Navigation = ({ step, nextPage, prevPage, onResetForm }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {step < 3 ? (
        <Box>
          <Button
            style={{ marginRight: "15px" }}
            variant="contained"
            color="primary"
            onClick={prevPage}
            disabled={step === 0}
          >
            Prev
          </Button>
          <Button variant="contained" color="primary" onClick={nextPage}>
            Next
          </Button>
        </Box>
      ) : (
        <Button variant="contained" color="primary" onClick={onResetForm}>
          Reset
        </Button>
      )}
    </Box>
  );
};

Navigation.propTypes = {
  step: PropTypes.number,
  error: PropTypes.object,
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  onResetForm: PropTypes.func,
};

export default Navigation;
