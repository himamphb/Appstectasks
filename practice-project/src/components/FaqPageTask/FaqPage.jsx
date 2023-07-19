import Faq from "react-faq-component";
import React, { Component } from "react";
import "./FaqPage.scss";
export default class FaqPage extends Component {
  render() {
    const data = {
      title: "Frequently asked questions",
      rows: [
        {
          title: "what is HTML",
          content:
            "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. ",
        },
        {
          title: "what is CSS",
          content:
            "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
        },
        {
          title: "what is Javascript",
          content:
            "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
        },
        {
          title: "What is ReactJs",
          content:
            "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
        },
      ],
    };
    return (
      <div className="faq-container">
        <Faq
          data={data}
          styles={{
            titleTextColor: "black",
            titleTextSize: "25px",
            rowTitleColor: "mediumseagreen",
            transitionDuration: "0.5s",
            timingFunc: "ease",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            arrowColor: "red",
            rowContentColor: "grey",
          }}
        />
      </div>
    );
  }
}
