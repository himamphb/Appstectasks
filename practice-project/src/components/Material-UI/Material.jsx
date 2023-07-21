import React, { Component } from "react";
import "./Material.scss";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Grid from "@material-ui/core/Grid";
import HocStyles from "./FormRow";
import { withStyles } from "@material-ui/styles";
import SearchIcon from '@mui/icons-material/Search';
const MaterialStyle = ((theme) => {

})

class Material extends Component {
  
  render() {
    return (
      <div className="contianer">
        <div className="header-container">
          <div>
            <Container maxWidth="sm">
              <p style={{ color: "#e8e9eb" }}>Hello,</p>
              <h3 style={{ color: "#e8e9eb" }}>Himam Basha</h3>
            </Container>
          </div>
          <div className="imageDiv">
            <img
              src="images.jpg"
              alt=""
              style={{ width: "70px", height: "60px", borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="block-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            ratione nam nostrum quas atque dolor explicabo sit aut quo. Quasi ut
            officia repudiandae. Excepturi tenetur voluptatem iusto debitis
            voluptas illo.
          </p>
        </div>
        <div className="search-container">
          <SearchIcon/>
          <input type="text" placeholder="Type to search...." />
        </div>
        <div className="content-container">
          <p>Last Seen Objects</p>
          <p>see all</p>
        </div>
        <div className="grid-container">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <HocStyles />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <HocStyles />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <HocStyles />
            </Grid>
          </Grid>
        </div>
        <div className="navigate-container">
          <div>
            <HomeIcon style={{ fontSize: "36px"}}/>
          </div>
          <div>
            <LocationOnIcon style={{ fontSize: "36px"}}/>
          </div>
          <div>
            <SignalCellularAltIcon style={{ fontSize: "36px"}}/>
          </div>
          <div>
            <DateRangeIcon style={{ fontSize: "36px"}}/>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(MaterialStyle)(Material);
