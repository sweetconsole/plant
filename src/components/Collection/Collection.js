import "./Collection.css"
import React from 'react';
import Title from "../Title/Title"
import CollectionsItem from "./CollectionsItem";
import IconOne from "../../assets/collection/1.png"
import IconTwo from "../../assets/collection/2.png"
import IconThree from "../../assets/collection/3.png"

const Collection = () => {
  return (
     <div className="colections">
        <div className="collection-info">
           <Title text="We have lots of plants collection for you and your family" fontSize="36" />    
           <a className="colliction-link" href="/">See all collection</a>
        </div>

        <div className="collections">
            <CollectionsItem image={IconOne} backgroundColor="#F6EDE8" />
            <CollectionsItem image={IconTwo} backgroundColor="#F0F1F6" />
            <CollectionsItem image={IconThree} backgroundColor="#F6EDE8" />
        </div>
     </div>
  );
};

export default Collection;
