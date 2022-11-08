import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Carousel from './Carousel';
import { useState, useEffect } from 'react';

function App() {
    // 變數
    const [userNames, setUserNames] = useState(null);
    const [myCardCSS, setMyCardCSS] = useState({ display: 'flex' });
    const [myCardCSS2, setMyCardCSS2] = useState({ display: 'block' });
    useEffect(() => {
        console.log('app run');

        // 其實這三個都是要做一樣的事情
        // => 非同步的處理資料。
        // ES5
        // callback
        // function a(cb) {
        //     console.log('a');
        //     cb();
        // }
        // setTimeout(() => {
        //     a(b);
        // }, 0);

        // function b() {
        //     console.log('b');
        // }

        // ES6
        // promise
        const a = new Promise((resolve, reject) => {
            const data = [];
            if (data.length) {
                resolve(data);
            } else {
                reject('error');
            }
        });

        a.then((r) => {
            console.log('r', r);
        }).catch((err) => {
            console.log(err);
        });

        // fetch('url')
        // .then(data){
        //   return a(data)
        // }
        // .then(afterA){
        //   return b(afterA)
        // }
        // .then(c){

        // }
        // .catch(err){
        //   console.log(err);
        // };

        // ES8 ES2017
        // async await

        // async function doSomething() {
        //     const resultA = await a(data);
        //     const resultB = await b(resultA);
        //     const resultC = c(resultB);
        // }

        // 模擬 1 秒後
        // setTimeout(() => {
        // setUserNames(['A', 'B', 'C']);
        // }, 1000);

        // 真實取得資料的方式
        fetch('http://localhost:3000/myJson.json')
            .then((r) => r.json())
            .then((r) => {
                setUserNames(r);
                console.log('r', r);
            });
    }, []);

    // Fetch Ajax
    // axios

    // function
    function handalClick(e) {
        // if (myCardCSS.flexDirection) {
        //     setMyCardCSS({ display: 'flex' });
        // } else {
        //     setMyCardCSS({ display: 'flex', flexDirection: 'row-reverse' });
        // }
        alert(e.target.innerText);
    }

    // JSX
    return (
        <>
            <Carousel />
            {/* styled component */}
            {/* <div style={myCardCSS}> */}
            {/* <Card username={userNames[0]} />
                <Card username={userNames[1]} /> */}

            {/* <div className="card">
                    <div className="figure">
                        <img src="./images/ex1_pic1.jpg" alt="" />
                    </div>
                    <h3 onClick={(e) => handalClick(e)}>C123</h3>
                    <p>Hello, nice to meet you.</p>
                </div>

                <div className="card">
                    <div className="figure">
                        <img src="./images/ex1_pic1.jpg" alt="" />
                    </div>
                    <h3>B</h3>
                    <p>Hello, nice to meet you.</p>
                </div>

                <div className="card">
                    <div className="figure">
                        <img src="./images/ex1_pic1.jpg" alt="" />
                    </div>
                    <h3>C</h3>
                    <p>Hello, nice to meet you.</p>
                </div> */}

            {/* {userNames &&
                    userNames.length &&
                    userNames.map((item) => {
                        return <Card usernames={item} />;
                    })} */}
            {/* </div> */}
        </>
    );
}

export default App;
