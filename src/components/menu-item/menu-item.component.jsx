import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) =>{   // destructuring title from the props for the time being. === props
    return(
        <div style={{
            backgroundImage : `url(${imageUrl})`   // dynamic css using template strings
        }} className= {`${size} menu-item`}>
            <div className={`content`}>
                <h1 className={`title`}>{title}</h1>
                <span className={`subtitle`}>Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem
