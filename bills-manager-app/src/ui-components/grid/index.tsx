import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const GridView = (props) => {
  return (
    <Grid item xs>
      {props.content}
    </Grid>
  );
};

export default GridView;
