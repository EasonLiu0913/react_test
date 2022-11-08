import React from 'react';
import PropTypes from 'prop-types';
import Figure from './Figure';

function Card(props) {
    const { usernames, key, email } = props;

    function handalClick(e) {
        // if (myCardCSS.flexDirection) {
        //     setMyCardCSS({ display: 'flex' });
        // } else {
        //     setMyCardCSS({ display: 'flex', flexDirection: 'row-reverse' });
        // }
        alert(e.target.innerText);
    }

    return (
        // fragment
        <>
            <div className="card">
                <div className="figure">
                    <img src="./images/ex1_pic1.jpg" alt="" />
                </div>
                <h3 onClick={(e) => handalClick(e)}>{usernames.sortName}</h3>
                <p>{usernames.sortImg}</p>
            </div>
        </>
    );
}

Card.propTypes = {};

export default Card;
