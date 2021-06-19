import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#033454",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  titleContainer: {
    position: "relative",
    padding: theme.spacing(5),
    paddingTop: theme.spacing(35),
  },
  title: {
    color: "white",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="home">
      <CssBaseline />
      <div className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          <Box textAlign="left" fontWeight="fontWeightBold">
            Hi,
          </Box>
          <Box textAlign="left" fontWeight="fontWeightBold">
            I'm Muhammad
          </Box>
        </Typography>
        <Typography variant="h5" className={classes.title}>
          <Box
            textAlign="left"
            fontWeight="fontWeightLight"
            m={2}
            color="#7E7E7E"
          >
            Frontend Developer / Python / Student
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Home;
