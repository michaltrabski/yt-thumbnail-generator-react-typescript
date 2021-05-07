import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Draggable from "react-draggable";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: { marginBottom: "10px" },
  style: {
    display: "inline-block",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "#0f3b5deb",
    textShadow: "1px 1px 3px black",
  },
});

type Variant =
  | "inherit"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline";

export default function Text1() {
  const classes = useStyles();
  const [variants] = useState<Variant[]>([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
  ]);

  return (
    <>
      {variants.map((variant) => (
        <Draggable defaultPosition={{ x: 130, y: 59 }}>
          <div className={classes.root}>
            <Typography
              className={classes.style}
              variant={variant}
              component="h2"
              contentEditable
            >
              h1. Heading
            </Typography>
          </div>
        </Draggable>
      ))}
    </>
  );
}
