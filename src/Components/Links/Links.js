import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const useStyles = makeStyles({
  root: {
    transition: "transform 0.15s ease-in-out",
    color: "white",
    fontSize: "90",
    position: "absolute",
    animation: "float 6s ease-in-out infinite",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: "black",
    },
  },
});

// const RandomMovement = ({top,left,href}) => {
//     const [offset, setoffset] = React.useState({});
//     const classes = useStyles();

//     setInterval(() => {
//         const newStyle = {
//             opacity: 1,
//             top: `${top + 1}%`,
//             left: `${left + 1}%`,
//         }
//         setoffset(newStyle);
//         console.log(offset);
//     }, 1000);

//     return (
//         <div>
//             <IconButton href={href} className={classes.root} style={offset}>
//                 <LinkedInIcon style={{fontSize:"90"}} />
//             </IconButton>
//         </div>
//     )
// }

const Links = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <IconButton
          href="https://www.linkedin.com/in/muhammad-manekia-743364202/"
          className={classes.root}
          style={{ top: "25%", left: "70%" }}
        >
          <LinkedInIcon style={{ fontSize: "90" }} />
        </IconButton>
        <IconButton
          className={classes.root}
          style={{ top: "35%", left: "80%" }}
          href="https://twitter.com/MuhammadManekia"
        >
          <TwitterIcon style={{ fontSize: "90" }} />
        </IconButton>
        <IconButton
          className={classes.root}
          style={{ top: "45%", left: "70%" }}
          href="https://www.facebook.com/muhammad.hasan.549668/"
        >
          <FacebookIcon style={{ fontSize: "90" }} />
        </IconButton>
        <IconButton
          className={classes.root}
          style={{ top: "55%", left: "80%" }}
        >
          <GitHubIcon style={{ fontSize: "90" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Links;
