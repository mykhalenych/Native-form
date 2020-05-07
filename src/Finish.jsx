import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  newpaper: {
    margin: "15px 15px 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "350px",
    maxWidth: "250px",
    margin: "25px",
  },
  wrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  block: {
    minWidth: "150px",
    margin: "20px",
  },
  paper: {
    marginBottom: "15px",
  },
}));

const Finish = ({ value, picture }) => {
  const classes = useStyles();

  return (
    <Box key={value.id} className={classes.wrap}>
      <Paper>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={picture}
          title="Contemplative Reptile"
        />
      </Paper>
      <Grid className={classes.block} item xs={4}>
        <Paper className={classes.paper}>First name: {value.firstName}</Paper>
        <Paper className={classes.paper}>Last name: {value.lastName}</Paper>
        <Paper className={classes.paper}>Password: {value.password}</Paper>
        <Paper className={classes.paper}>Age: {value.age}</Paper>
        <Paper className={classes.paper}>Phone: {value.phone}</Paper>
        <Paper className={classes.paper}>Email: {value.email}</Paper>
        <Paper className={classes.paper}>City: {value.city}</Paper>
        <Paper className={classes.paper}>Sex: {value.sex}</Paper>
      </Grid>
    </Box>
  );
};

export default Finish;
