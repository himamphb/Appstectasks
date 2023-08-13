import React, { Component } from "react";
import "./Card.scss";
import doctor1 from "../Images/doctor1.jpg";
import doctor2 from "../Images/doctor2.jpg";
import doctor3 from "../Images/doctor3.jpg";

const data = [
  {
    src: doctor1,
    name: "Williamson",
    specialist: "MBBS, CMS, MD",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ex perferendis eaque non ea neque quos voluptatibus velit rerum et quasi, qui nostrum, deleniti mollitia asperiores laudantium accusantium? Atque, itaque!",
  },
  {
    src: doctor2,
    name: "Lisa Johnson",
    specialist: "Nutrition, HSG, IGM",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ex perferendis eaque non ea neque quos voluptatibus velit rerum et quasi, qui nostrum, deleniti mollitia asperiores laudantium accusantium? Atque, itaque!",
  },
  {
    src: doctor3,
    name: "Jenny Wilson",
    specialist: "Cardio, MCH, MD",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ex perferendis eaque non ea neque quos voluptatibus velit rerum et quasi, qui nostrum, deleniti mollitia asperiores laudantium accusantium? Atque, itaque!",
  },
];
export default class Cards extends Component {
  render() {
    return (
      
      <div className="card_container">
        <div className="card_header">
          <h1>Meet Our Super Powers</h1>
         </div>
         <div className="flip-container">
        {data.map((content, index) => {
          return (
            
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div class="flip-card-front">
                  <img src={content.src} alt="" />
                </div>
                <div className="flip-card-back">
                  <h1>{content.name}</h1>
                  <h3>{content.specialist}</h3>
                  <p>{content.intro}</p>
                </div>
              </div>
            </div>
            
          );
        })}
        </div>
      </div>
    );
  }
}


// <div className="card_container">
      //   <div className="card_header">
      //     <h1>Meet Our Super Powers</h1>
      //   </div>
      //   <div className="card_content">
      //     {data.map((content, index) => (
      //       <div className="card_list" key={index}>
      //         <div className="card_front">
      //           <img src={content.src} alt="" />
      //           <div className="header_tags">
      //             <h1>{content.name}</h1>
      //             <h3>{content.specialist}</h3>
      //           </div>
      //         </div>
      //         <div className="card_back">
      //           <p>{content.intro}</p>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </div>
      