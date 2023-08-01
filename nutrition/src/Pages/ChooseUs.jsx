import React from "react";
import doctor from "../Images/doctor-image.jpg"
import health from "../Images/health.jpg"
import rupee from "../Images/rupee.jpg"


const chooseData = [
  {
    imageSrc : doctor,
    category: "Specialized Doctors",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus. Temporibus recusandae quo, ipsa quod pariatur eaque libero nostrum magni."
  },
  {
    imageSrc : health,
    category: "Health Diet Plan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus. Temporibus recusandae quo, ipsa quod pariatur eaque libero nostrum magni.",
  },
  {
    imageSrc: rupee,
    category: "At Affordable Prices",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus. Temporibus recusandae quo, ipsa quod pariatur eaque libero nostrum magni.",
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
                  <div className="choose_doctor_image">
                    <img src={data.imageSrc} alt="" />
                  </div>
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
