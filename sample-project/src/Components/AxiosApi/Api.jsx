import React, { Component } from "react";
import axios from "axios";
import {
  DivContainer,
  DivSection,
  DivWrapper,
  StyledButton,
} from "./apiComponent";
export default class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      view: false,
      error : "",

    };
  }
  componentDidMount() {
    this.fetchData();
  }
//   componentDidUpdate(prevProps,preState){
//     if (prevState.page !== this.state.page) {
//         this.fetchData();
//       }
//   }
  fetchData = () => {

    const URL = `https://api.data.gov.in/resource/08b7b568-0290-4d4e-bbf2-4195a6972fe1?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json`;
    axios
      .get(URL)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        this.setState({
            error:true,
          });
        
      });
  };
  handleView = () => {
    this.setState({
      view: !this.state.view,
    });
  };
  
  render() {
    const { data, view , error} = this.state;
    
    return (
      <>
        <DivWrapper>{data.title}</DivWrapper>
        <StyledButton onClick={this.handleView}>
          Click to view the data
        </StyledButton>
        <DivSection>
          {view
            ? data.records.map((content) => {
                return (
                  <DivContainer>
                    <h3>{content.servicename}</h3>
                    <h3>Schemetype : {content.schemetype}</h3>
                    <p>Lastweekcount : {content.lastweekcount}</p>
                    <p>lastmonthcount : {content.lastmonthcount}</p>
                    <p>Yeartilldate : {content.yeartilldate}</p>
                  </DivContainer>
                );
              })
              
            : null}
            
           
        </DivSection>
        { view ? <button onClick={this.handleMore}>load more...</button> : null}
      </>
    );
  }
}
