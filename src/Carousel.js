import React, { useState } from 'react';
import './Carouse.css';

export default function Carousel() {
    const [myArray, setMyArray] = useState(['0', '1', '2']);

    function handleClick(e) {
        console.log('e', e.target.innerText);

        if (e.target.innerText === '0') {
            setMyArray(['1', '2', '0']);
        }
        if (e.target.innerText === '1') {
            setMyArray(['0', '1', '2']);
        }
        if (e.target.innerText === '2') {
            setMyArray(['2', '0', '1']);
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <div
                className="bg-1"
                style={{
                    width: '200px',
                    height: '200px',
                    order: myArray[0],
                    fontSize: '1.5rem',
                    background: 'red',
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
                    order: myArray[1],
                    fontSize: '1.5rem',
                    background: 'blue',
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
                    order: myArray[2],
                    fontSize: '1.5rem',
                    background: 'green',
                }}
                onClick={(e) => handleClick(e)}
            >
                2
            </div>
        </div>
    );
}
