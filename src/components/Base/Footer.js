import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography align="center">
      © 2017 - {new Date().getFullYear()}, RRStudio
    </Typography>
  );
}
