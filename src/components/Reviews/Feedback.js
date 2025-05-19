import React from 'react';
import Marks from "../../assets/reviews/marks.png"
import AvatarOne from "../../assets/reviews/avatar.png"

const Feedback = () => {
   return (
      <div className="feedback">
         <div className="feedback-inner">
            <div className="feedback-profile">
               <div className="feedback-avater" style={{ backgroundImage: `url(${AvatarOne})` }}/>

               <div>
                  <p className="feedback-name"></p>
                  <p className="feedback-job"></p>
               </div>

               <img className="feedback-marks" src={Marks} alt="marks" />
            </div>

            <p className="feedback-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in 
               erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>

            <div className="feedback-buttons">
               <button className="feedback-button"></button>
               <button className="feedback-button"></button>
            </div>
         </div>
      </div>
   );
};

export default Feedback;
