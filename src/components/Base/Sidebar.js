import React from "react";
import { NavLink } from "react-router-dom";
import {
  Toolbar,
  Divider,
  Button,
  ButtonGroup,
  CardMedia,
  Stack,
} from "@mui/material";
import logo from "../img/logo.svg";

export default function Sidebar() {
  return (
    <nav>
      <Toolbar>
        <CardMedia
          component="img"
          image={logo}
          alt="RRStudio logo"
          sx={{ width: 1 }}
        />
      </Toolbar>
      <Divider />
      <Stack paddingTop={"5px"} spacing={1} direction="column">
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#eeeff8" : "",
              color: isActive ? "#5383ff" : "black",
              borderRadius: "0 22px 22px 0",
              paddingLeft: "25px",
              textDecoration: "none",
              padding: "5px 20px",
            };
          }}
          className="nav_link"
          to={`/`}
        >
          Главная
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#eeeff8" : "",
              color: isActive ? "#5383ff" : "black",
              borderRadius: "0 22px 22px 0",
              paddingLeft: "25px",
              textDecoration: "none",
              padding: "5px 20px",
            };
          }}
          className="nav_link"
          to={`/portfolio`}
        >
          Портфолио
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#eeeff8" : "",
              color: isActive ? "#5383ff" : "black",
              borderRadius: "0 22px 22px 0",
              paddingLeft: "25px",
              textDecoration: "none",
              padding: "5px 20px",
            };
          }}
          className="nav_link"
          to={`/contact`}
        >
          Контакты
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#eeeff8" : "",
              color: isActive ? "#5383ff" : "black",
              borderRadius: "0 22px 22px 0",
              paddingLeft: "25px",
              textDecoration: "none",
              padding: "5px 20px",
            };
          }}
          className="nav_link"
          to={`/404`}
        >
          Not Found
        </NavLink>
      </Stack>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        size="small"
        sx={{
          margin: "24px",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Button>Light</Button>
        <Button>Dark</Button>
        <Button>System</Button>
      </ButtonGroup>
    </nav>
  );
}
