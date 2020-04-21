import React from "react";
import classNames from "classnames";
import Box from "@material-ui/core/Box";


const stepsName = [
  {
    id: 0,
    name: "FirstStep",
  },
  {
    id: 1,
    name: "SecondStep",
  },
  {
    id: 2,
    name: "LastStep",
  },
  {
    id: 3,
    name: "Finish",
  },
];
const Steps = ({ step }) => {
  return stepsName.map((steps) => (
    <Box
      className={classNames({
        step: true,
        "step-active": +step === steps.id,
        "step-finish": +step > steps.id,
      })}
      key={steps.id}
    >
      <Box className="step-number">{steps.id + 1}</Box>
      <Box className="step-title">{steps.name}</Box>
    </Box>
  ));
};

export default Steps;
