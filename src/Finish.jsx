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
    marginBottom: "20px"
  },
  block: {
    minWidth: "150px",
    margin: "20px",
  },
  paper: {
    marginBottom: "15px",
  },
}));

const Finish = ({ value }) => {
  const classes = useStyles();

  return value.map((item) => (
    <Box key={item.id} className={classes.wrap}>
      <Paper >
        <CardMedia
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={item.avatar}
          title="Contemplative Reptile"
        />
      </Paper>
      <Grid className={classes.block} item xs={4}>
        <Paper className={classes.paper}>First name: {item.firstName}</Paper>
        <Paper className={classes.paper}>Last name: {item.lastName}</Paper>
        <Paper className={classes.paper}>Password: {item.password}</Paper>
        <Paper className={classes.paper}>Age: {item.age}</Paper>
        <Paper className={classes.paper}>Phone: {item.phone}</Paper>
        <Paper className={classes.paper}>Email: {item.email}</Paper>
        <Paper className={classes.paper}>City: {item.city}</Paper>
        <Paper className={classes.paper}>Sex: {item.sex}</Paper>
      </Grid>
    </Box>
  ));
};

export default Finish;
