import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_dlr0fx7",
      "template_uttj35s",
      e.target,
      "user_x6cq7I7LJ8XFS3l5G4eDM"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#065766",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "70vh",
  },
  input: {
    color: "White",
    padding: theme.spacing(1),
    "&::placeholder": {
      color: "white",
    },
  },
  title: {
    color: "white",
    fontSize: "60px",
    position: "relative",
    top: "2%",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
  description: {
    fontSize: "20px",
    color: "white",
    position: "relative",
    top: "2%",
    padding: theme.spacing(0.5),
    paddingLeft: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "40ch",
    padding: theme.spacing(1),
  },
  paragraph: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50ch",
    padding: theme.spacing(1),
  },
  buttonCont: {
    marginTop: theme.spacing(2),
  },
  form: {
    position: "relative",
    left: "5%",
    top: "5%",
    height: "50vh",
    width: "50%",
  },
  card: {
    padding: theme.spacing(8),
    textAlign: "center",

    boxShadow: "5px 10px 10px 5px  opacity: 5",
    backgroundColor: "transparent",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root} id="contact">
      <div style={{ paddingTop: "6%" }}>
        <Typography className={classes.title}>
          <Box textAlign="left" fontWeight="fontWeightBold">
            Contact Me!
          </Box>
        </Typography>
        <Typography>
          <Box fontWeight={500} className={classes.description}>
            For any inquiries, please send me an email through the form
            provided.
          </Box>
          <Box fontWeight={500} className={classes.description}>
            Or use the links provided on the home page to contact my social
            media.
          </Box>
        </Typography>
      </div>
      <div className={classes.form}>
        <Card className={classes.card}>
          <form onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              id="outlined-margin-none"
              className={classes.textField}
              variant="filled"
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              id="outlined-margin-none"
              className={classes.textField}
              variant="filled"
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
            />
            <TextField
              id="filled-multiline-static"
              name="message"
              multiline
              rows={10}
              variant="filled"
              className={classes.paragraph}
              placeholder="Message"
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
            />
            <div className={classes.buttonCont}>
              <Button
                variant="contained"
                color="#033454"
                type="submit"
                onClick={handleClick}
              >
                Send Email
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Alert onClose={handleClose} severity="success">
            Email has been sent!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Contact;
