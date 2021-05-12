import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  InputLabel
} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const Contacts = () => {
  const classes = useStyles();
  const [name] = useState("Jithesh Kumar");
  const [email] = useState("mulkijeetu2@gmail.com");
  const [phoneNo] = useState("+918105643914");

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar></Navbar>

      <Grid container justify="center">
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <form
            className={classes.form}
          >
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Contact Me
            </Typography>
            <InputLabel
              fullWidth={true}
              variant="outlined"
              margin="dense"
              size="medium"
              style={{ color: "white" }}
            >
              Name: {name}
            </InputLabel>
            <br></br>
            <InputLabel
              fullWidth={true}
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              style={{ color: "white" }}
              value={email}
            >
            Email:  {email}
            </InputLabel>
            <br></br>
            <InputLabel
              fullWidth={true}
              label="Company Name"
              variant="outlined"
              margin="dense"
              size="medium"
              style={{ color: "white" }}>
              Phone No: {phoneNo}
            </InputLabel>
            <br></br>
          </form>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
