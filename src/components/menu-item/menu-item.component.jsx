import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) =>{   // destructuring title from the props for the time being. === props
    return(
        <div className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

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

export default withRouter(MenuItem);
// withRouter is a higher order component which takes a component as its argument (here MenuItem) and returns us a powered/juiced up Component which has access
// to props like history, location, match without doing prop tunneling......
