import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import NewProject from "../../NewProject.png";
import Automation from "../../automation.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#343337",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
  },

  title: {
    color: "white",
    fontSize: "60px",
    position: "absolute",
    top: "210%",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    display: "flex",
  },
  card: {
    padding: theme.spacing(10),
    textAlign: "center",
    height: "50vh",
    width: "40vh",
    boxShadow: "5px 5px",
    // backgroundColor: "transparent",
    transition: "transform 0.15s ease-in-out",
    backgroundColor: "rgba(0,0,0,1)",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: "rgba(0,0,0,1)",
      content: "Text",
    },
  },
  button: {
    height: "50vh",
    width: "40vh",
    "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
  },
  media: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "50vh",
    width: "40vh",
    backgroundColor: "rgba(0,0,0,1)",
  },
  CardActions: {
    display: "flex",
    minHeight: "60px",
    width: "45vh",
    marginLeft: "-9.3vh",
    marginTop: "-9.3vh",
  },
  image: {
    position: "absolute",
    height: 500,
    top: "225%",
    boxShadow: "10px 5px 5px black",
    [theme.breakpoints.down("xs")]: {
      width: "10% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function FormRow({ image, width, title, left, href }) {
  const classes = useStyles();
  return (
    <div>
      <ButtonBase
        focusRipple
        key={1}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: width,
          left: `${left}vh`,
        }}
        href={href}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="projects">
      <Typography variant="h1" className={classes.title}>
        <Box textAlign="left" fontWeight="fontWeightBold">
          Projects
        </Box>
      </Typography>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <FormRow
          image={NewProject}
          width="40%"
          title="Carshop"
          left={10}
          href="https://github.com/muhammadmanekia/Carshop"
        />
        <FormRow
          image={Automation}
          width="40%"
          title="Factory Automation"
          left={100}
          href="https://github.com/muhammadmanekia/LMOI"
        />
      </ButtonGroup>
    </div>
  );
};

export default Projects;
