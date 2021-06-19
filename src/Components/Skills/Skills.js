import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#6ca7a8",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    color: "white",
    fontSize: "60px",
    position: "absolute",
    top: "122%",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  Programs: {
    fontSize: "20px",
    color: "white",
  },
  description: {
    fontSize: "20px",
    color: "white",
    position: "relative",
    top: "315px",
    padding: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
  },
  dataContainer: {
    position: "relative",
    top: "60%",
    left: "55%",
    padding: "5px",
    paddingTop: "50px",
    width: "40%",
  },
  pythonprogressBar: {
    backgroundColor: "white",
  },

  progress: {
    backgroundColor: "#2a2a2a",
    borderRadius: "20px",
    position: "relative",
    margin: "15px 0",
    height: "5px",
  },
  progressDone: {
    background: "red",
    boxShadow: "0 3px 3px -5px black, 0 2px 5px black",
    borderRadius: "20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "0",
    opacity: "0",
    transition: "1s ease 0.3s",
    border: "1px solid black",
  },
}));

const ProgressBar = ({ done, color, offsetY }) => {
  const [style, setstyle] = React.useState({});
  const classes = useStyles();

  if (offsetY > 600) {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
        background: `${color}`,
      };
      setstyle(newStyle);
    }, 500);
  }

  return (
    <div className={classes.progress}>
      <div className={classes.progressDone} style={style}></div>
    </div>
  );
};
const Skills = (props) => {
  const classes = useStyles();
  // console.log(props.offsetY);
  return (
    <div className={classes.root} id="skills">
      <div>
        <CssBaseline />
        <Typography className={classes.title}>
          <Box textAlign="left" fontWeight="fontWeightBold">
            My Skills
          </Box>
        </Typography>
        <Typography>
          <Box fontWeight={500} className={classes.description}>
            I'm mainly interested in front-end development. I'm mainly focusing
            towards
          </Box>
          <Box fontWeight={500} className={classes.description}>
            getting better at C++ and Javascript while maintaining and improving
            my ReactJS
          </Box>
          <Box fontWeight={500} className={classes.description}>
            skills. However, I have some experience doing robotics and
            automation as well.
          </Box>
          <Box fontWeight={500} className={classes.description}>
            and have a 3 year experience in Python
          </Box>
        </Typography>

        <div className={classes.dataContainer}>
          <Typography className={classes.Programs}>
            <Box textAlign="left" fontWeight="fontWeightBold">
              ReactJS
            </Box>
          </Typography>
          <ProgressBar done="75" color="#61DBFB" offsetY={props.offsetY} />
          <Typography className={classes.Programs}>
            <Box textAlign="left" fontWeight="fontWeightBold">
              JavaScript
            </Box>
          </Typography>
          <ProgressBar done="50" color="#F0DB4F" offsetY={props.offsetY} />
          <Typography className={classes.Programs}>
            <Box textAlign="left" fontWeight="fontWeightBold">
              HTML
            </Box>
          </Typography>
          <ProgressBar done="65" color="#e34c26" offsetY={props.offsetY} />
          <Typography className={classes.Programs}>
            <Box textAlign="left" fontWeight="fontWeightBold">
              CSS
            </Box>
          </Typography>
          <ProgressBar done="40" color="#264de4" offsetY={props.offsetY} />
          <Typography className={classes.Programs}>
            <Box textAlign="left" fontWeight="fontWeightBold">
              Python
            </Box>
          </Typography>
          <ProgressBar done="70" color="#FFE873" offsetY={props.offsetY} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
