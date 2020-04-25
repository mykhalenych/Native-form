import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextFields from "./components/TextField";
import Box from "@material-ui/core/Box";

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
    marginBottom: "15px",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SecondStep = ({
  avatar,
  setAvatar,
  setEmail,
  setPhone,
  error,
}) => {
  const userAvatar =
    "https://image.shutterstock.com/image-illustration/female-default-avatar-gray-profile-260nw-582509278.jpg";
  
  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const classes = useStyles();
  return (
    <Box className={classes.newpaper}>
      <Paper className={classes.img}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={avatar ? avatar : userAvatar}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Box>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
            <label htmlFor="contained-button-file">
              <Button
                style={{ margin: "15px" }}
                variant="contained"
                color="primary"
                component="span"
              >
                Upload
              </Button>
              {error && <Box className="invalid-feedback">{error.avatar}</Box>}
            </label>
          </Box>
        </CardActions>
      </Paper>
      <Box>
        <TextFields setValue={setEmail} label={"Email"} error={error.email} />

        <TextFields setValue={setPhone} label={"Phone"} error={error.phone} />
      </Box>
    </Box>
  );
};

export default SecondStep;
