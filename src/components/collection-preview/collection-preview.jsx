import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ id, title, items}) =>{
    return(
        <div className={`collection-preview`}>
            <h1 className={`title`}>{title.toUpperCase()}</h1>
            <div key={id} className={`preview`}>
                {items
                    .filter( (el, index) => index < 4)
                    .map(( item ) =>(
                    <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview
