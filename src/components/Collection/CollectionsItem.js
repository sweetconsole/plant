import React from 'react';

const CollectionsItem = ({
   image,
   backgroundColor,
}) => {

   let style = {
      backgroundColor: backgroundColor,
   }

   return (
      <div style={style} class="collections-item">
         <img class="collections-image" src={image} />
      </div>
   );
};

export default CollectionsItem;
