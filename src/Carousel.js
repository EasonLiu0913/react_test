import React, { useState } from 'react';
import './Carouse.css';

export default function Carousel() {
    const [myArray, setMyArray] = useState([0, 0, 0]);
    const [myZindexArr, setMyZindexArr] = useState([0, 0, 0]);

    function handleClick(e) {
        console.log('e', e.target.innerText);

        if (e.target.innerText === '0') {
            setMyArray([1, 1, -2]);
            setMyZindexArr([1, 0, 0]);
        }
        if (e.target.innerText === '1') {
            setMyArray([0, 0, 0]);
            setMyZindexArr([0, 1, 0]);
        }
        if (e.target.innerText === '2') {
            setMyArray([2, -1, -1]);
            setMyZindexArr([0, 0, 2]);
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <div
                className="bg-1"
                style={{
                    width: '200px',
                    height: '200px',
                    fontSize: '1.5rem',
                    background: 'red',
                    transform: `translateX(${myArray[0] * 200}px)`,
                    transition: 'transform 1s',
                    zIndex: `${myZindexArr[0]}`,
                }}
                onClick={(e) => {
                    handleClick(e);
                }}
            >
                0
            </div>
            <div
                className="bg-2"
                style={{
                    width: '200px',
                    height: '200px',
                    fontSize: '1.5rem',
                    background: 'blue',
                    transform: `translateX(${myArray[1] * 200}px)`,
                    transition: 'transform 1s .1s',
                    zIndex: `${myZindexArr[1]}`,
                }}
                onClick={(e) => handleClick(e)}
            >
                1
            </div>
            <div
                className="bg-3"
                style={{
                    width: '200px',
                    height: '200px',
                    fontSize: '1.5rem',
                    background: 'green',
                    transform: `translateX(${myArray[2] * 200}px)`,
                    transition: 'transform 1s .2s',
                    zIndex: `${myZindexArr[2]}`,
                }}
                onClick={(e) => handleClick(e)}
            >
                2
            </div>
        </div>
    );
}
