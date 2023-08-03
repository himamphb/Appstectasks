import React, { Component } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { Card, CardMedia, Grid } from "@material-ui/core";

export default class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentPage: 0,
      isLoading: false,
    };
  }
  componentDidMount() {
    this.fetchData();
    // window.addEventListener("scroll", this.handleScroll)
  }
  // handleScroll = () =>{
  //     const {currentPage, isLoading} = this.state;
  //     const {innerHeight, innerWidth , scrollY} = window;
  //     const {scrollHeight} = document.body
  //     const val = scrollY + innerHeight > scrollHeight - 300;
  //     if(val && !isLoading){
  //         this.fetchData(currentPage + 1)
  //     }
  // }
  fetchData = (page = 0) => {
    const URL = `https://api.unsplash.com/photos/random?count=10&page=${page}&client_id=PTXzKGc14nPxPw1nwCqKu4T15_ydfmDE-xNDjbUo--E`;
    axios
      .get(URL)
      .then((res) => {
        this.setState({
          data: res.data,
          currentPage: this.state.currentPage + 1,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handlePage = (e, page) => {
    // console.log(e);
    // console.log(page);
    this.fetchData(page);
  };
  render() {
    return (
      <div>
        <Grid container>
          {this.state.data.map((content) => (
         <Grid key={content.id} item xs={4} sm={4} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt={content.alt_description}
                  image={content.urls.regular}
                  style={{ height: "200px", width: "350px" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Pagination
          count={8}
          color="secondary"
          onChange={this.handlePage}
          page={this.state.currentPage}
          style={{ marginTop: "0.5rem",marginLeft:"25rem" }}
        />
      </div>
    );
  }
}
