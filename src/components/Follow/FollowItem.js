import React from 'react';
import Instagram from "../../assets/follow/Instagram.png"

const FollowItem = ({
   image
}) => {
   return (
      <div className="follow-item">
         <img className="follow-image" src={image} alt="Follow" />

         <div className="follow-networks">
            <img className="follow-instagram" src={Instagram} alt="Instagram" />
         </div>
      </div>
   );
};

export default FollowItem;
