import React from 'react';

const FooterChapter = ({
   nameChapter,
   nameLinks,
}) => {

   const nameList = nameLinks.map((name, key) => {
      return <p className="footer-link" key={key}>{name}</p>
   })

   return (
      <div className="footer-chapter">
         <p className="footer-name">{nameChapter}</p>

         {nameList}
      </div>
   );
};

export default FooterChapter;
