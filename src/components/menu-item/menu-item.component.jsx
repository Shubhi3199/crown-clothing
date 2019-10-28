import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) =>{   // destructuring title from the props for the time being. === props
    return(
        <div className= {`${size} menu-item`}>

            <div className={`background-image`}
                 style={{
                     backgroundImage : `url(${imageUrl})`   // dynamic css using template strings
                 }} />

            <div className={`${size} content`}>
                <h1 className={`title`}>{title.toUpperCase()}</h1>
                <span className={`subtitle`}>Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem
