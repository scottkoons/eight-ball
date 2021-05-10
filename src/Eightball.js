import React, { useState } from 'react';
import './Eightball.css';

const Eightball = (props) => {
    const genRandom = () => Math.floor(Math.random() * 19);
    const restart = () => {
        setAnswer(20);
        setShakeCount(0);
    };
    const shakeBall = () => {
        setAnswer(genRandom());
        setShakeCount(shakeCount + 1);
    };
    const [answer, setAnswer] = useState(20);
    const [shakeCount, setShakeCount] = useState(0);

    const answerBank = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
        { msg: "Think of a Question.", color: "black" }
    ];

    return (
        <div className="Eightball-header">
            <h1>Magic Eight Ball.</h1>
            <p>You have asked {shakeCount} questions. </p>
            {/* <div style={{ background: answerBank[answer].color }} onClick={() => setAnswer(genRandom())} className="res-circle"> */}
            <div style={{ background: answerBank[answer].color }} onClick={shakeBall} className="res-circle">
                <div className="circle-txt">{answerBank[answer].msg}</div>
            </div>
            <button onClick={restart}>Reset</button>
        </div>
    );

};

export default Eightball;