import "./Collection.css"
import React from 'react';
import Title from "../Title/Title"
import CollectionsItem from "./CollectionsItem";
import { Link } from "react-router-dom"
import IconOne from "../../assets/collection/1.png"
import IconTwo from "../../assets/collection/2.png"
import IconThree from "../../assets/collection/3.png"

const Collection = () => {
  return (
     <div className="colections">
        <div class="collection-info">
           <Title text="We have lots of plants collection for you and your family" fontSize="36" />    
           <Link className="colliction-link" to="/">See all collection</Link>
        </div>

        <div class="collections">
            <CollectionsItem image={IconOne} backgroundColor="#F6EDE8" />
            <CollectionsItem image={IconTwo} backgroundColor="#F0F1F6" />
            <CollectionsItem image={IconThree} backgroundColor="#F6EDE8" />
        </div>
     </div>
  );
};

export default Collection;
