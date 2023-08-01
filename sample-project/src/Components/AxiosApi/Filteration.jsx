import React, { Component } from "react";
import axios from "axios";

class Filteration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputVal : "",
      filteredArray : []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const URL = `https://api.unsplash.com/photos/random?count=10&client_id=iVPcahalWwBAXsoFuQ_W85HX_0GHCJ1wBZAmrI7cf28`;
    axios
      .get(URL)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
        inputVal : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
   this.setState({
    filteredArray :  this.state.data.filter((ele) =>{
        // console.log(ele.alt_description);
       return  ele.alt_description.includes(this.state.inputVal)
        
    })
   })
   
  }
  render() {
    console.log(this.state.data);
    
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
            <button type="submit">submit</button>
        </form>
        <div>
            {this.state.filteredArray && this.state.filteredArray.map((ele) => {
                return  <img src={ele.urls.regular} alt="" key={ele.id} />
            })}
        </div>
      </>
    );
  }
}
export default Filteration;
