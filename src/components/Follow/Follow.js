import './Follow.css'
import React from 'react';
import Title from '../Title/Title';
import FollowItem from './FollowItem';

const Follow = () => {
   const name = ["1", "2", "3", "4", "5"]

   const nameList = name.map((img, key) => {
      return <FollowItem key={key} image={require("../../assets/follow/" + img + ".png")} />
   })

   return (
      <div className="follow">
         <Title text="Follow Us on Instagram" fontSize="48" />
         <p className="follow-text Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus</p>

         <div className="follow-items">{nameList}</div>
      </div>
   );
};

export default Follow;
