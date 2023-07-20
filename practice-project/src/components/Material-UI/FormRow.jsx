
import { Grid, Paper, withStyles } from '@material-ui/core';
import LocationOnIcon from "@material-ui/icons/LocationOn";
  import React, { Component } from 'react'

  const HocStyles = ((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
  }));
  
  class FormRow extends Component {
    render() {
        const classes = this.props;
      return (
        <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img
              src="images.jpg"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Torning Torso</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><LocationOnIcon /></Paper>
        </Grid>
      </React.Fragment>
      )
    }
  }
  export default withStyles(HocStyles)(FormRow);