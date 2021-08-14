import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { ShoppingCart, Close } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />

          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}

          {location.pathname === "/cart" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/"
                aria-label="Close cart items"
                color="inherit"
              >
                <Close />
              </IconButton>
            </div>
          )}

          {location.pathname === "/checkout" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Return cart items"
                color="inherit"
              >
                <Close />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}