import React from "react";
import doctor from "../Images/doctor-image.jpg"
import health from "../Images/health.jpg"
import rupee from "../Images/rupee.jpg"
import './ChooseUs.scss'

const chooseData = [
  {
    imageSrc : doctor,
    category: "Specialized Doctors",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus."
  },
  {
    imageSrc : health,
    category: "Health Diet Plan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus.",
  },
  {
    imageSrc: rupee,
    category: "At Affordable Prices",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus.",
  },
];
const ChooseUs = () => {
  return (
    <div className="choose_container">
      <div className="choose_content">
        <div className="choose_header">
          <h1>Why Choose Us</h1>
        </div>
        <div className="choose_cards">
          {
            chooseData.map((data) => {
                return <div className="choose_cards_lists">
                 
                    <img src={data.imageSrc} alt="" />
          
                  <h2>{data.category}</h2>
                  <p>{data.content}</p>
                </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
