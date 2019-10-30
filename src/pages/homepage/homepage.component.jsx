import React from 'react';

import Directory from "../../components/directory/directory.component";
import './homepage.styles.scss';

// const HomePage = (props) =>{
//     return(
//         <div className={`homepage`}>
//             <button onClick={() =>props.history.push('/hats') }>CLICK</button>
//
//             <Directory />
//
//         </div>
//     )
// };

const HomePage = (props) =>{
    return(
        <div className={`homepage`}>
            <Directory />
        </div>
    )
};

export default HomePage;
