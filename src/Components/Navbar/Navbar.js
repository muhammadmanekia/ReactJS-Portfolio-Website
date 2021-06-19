import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontWeight: "fontWeightBold",
  },
  //   search: {
  //     position: 'relative',
  //     borderRadius: theme.shape.borderRadius,
  //     backgroundColor: fade(theme.palette.common.white, 0.15),
  //     '&:hover': {
  //       backgroundColor: fade(theme.palette.common.white, 0.25),
  //     },
  //     marginRight: theme.spacing(2),
  //     marginLeft: 0,
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       marginLeft: theme.spacing(3),
  //       width: 'auto',
  //     },
  //   },
  //   searchIcon: {
  //     padding: theme.spacing(0, 2),
  //     height: '100%',
  //     position: 'absolute',
  //     pointerEvents: 'none',
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   inputRoot: {
  //     color: 'inherit',
  //   },
  //   inputInput: {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="secondary" href="/">
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="secondary" href="/">
          Skills
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="secondary" href="/">
          Projects
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button color="secondary" href="/">
          Contact
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              color="primary"
              style={{ cursor: "pointer" }}
            >
              <Box fontWeight={700} m={1}>
                Muhammad Hasan Manekia
              </Box>
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.root}>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="outlined" color="primary">
                  Home
                </Button>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <Button variant="outlined" color="primary">
                  Skills
                </Button>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <Button variant="outlined" color="primary">
                  Projects
                </Button>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <Button variant="outlined" color="primary">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import Button from '../Button/Button';
// import classes from './Navbar.module.css';

// const Navbar = () => {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMenu = () => setClick(false);
//     const showButton = () => {
//         if (window.innerWidth <=960) {
//             setButton(false);
//         }
//         else {
//             setButton(true);
//         }
//     }

//     window.addEventListener('resize', showButton)
//     return (
//         <>
//         <nav className={classes.navbar}>
//             <div className={classes.navbarContainer}>
//                 <Link to="/" className={classes.navbarLogo}>
//                     Logo
//                 </Link>
//                 <div className={classes.menuIcon} onClick={handleClick}>
//                     {click ? <CloseIcon backgroundColor = "white" /> : <MenuIcon />}
//                 </div>
//                 <ul className={click ? classes.navMenuActive: classes.navMenu}>
//                     <li className={classes.navItem}>
//                         <Link to="/" className={classes.navLinks} onClick={closeMenu}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className={classes.navItem}>
//                         <Link to="/skills" className={classes.navLinks} onClick={closeMenu}>
//                             Skills
//                         </Link>
//                     </li>
//                     <li className={classes.navItem}>
//                         <Link to="/contact" className={classes.navLinks} onClick={closeMenu}>
//                             Contact Me
//                         </Link>
//                     </li>
//                 </ul>
//                 {button && <Button buttonStyle={classes.btnOutline} buttonSize={classes.btnMedim}>Home</Button>}
//             </div>
//         </nav>
//         </>
//     )
// }

// export default Navbar;
