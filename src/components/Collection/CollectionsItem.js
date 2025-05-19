import React from 'react';

const CollectionsItem = ({image, backgroundColor,}) => {
   let style = {
      backgroundColor: backgroundColor,
   }

   return (
      <div style={style} className="collections-item">
         <img className="collections-image" src={image} alt="Цветок" />
      </div>
   );
};

export default CollectionsItem;
