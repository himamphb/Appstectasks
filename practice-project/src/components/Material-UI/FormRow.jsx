
import { Grid, Paper} from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';
import LocationOnIcon from "@material-ui/icons/LocationOn";
  import React, { Component } from 'react'

  const styles = ((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:"2.5rem",
      backgroundColor:"red"
    },
  }));
  
  class FormRow extends Component {
    render() {
        const classes = this.props;
      return (
        <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{height:"2.5rem",background:"transparent",boxShadow :"none",display:"flex",justifyContent:"center",color:"#fff"}}>
            <img
              src="images.jpg"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{height:"2.5rem",background:"transparent",boxShadow :"none",display:"flex",justifyContent:"center",color:"#fff",whiteSpace:"nowrap"}}>Torning Torso</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{height:"2.5rem",background:"transparent",boxShadow :"none",display:"flex",justifyContent:"center",color:"#fff"}}><LocationOnIcon /></Paper>
        </Grid>
      </React.Fragment>
      )
    }
  }
  export default withStyles(styles)(FormRow);