import React, { useState, useEffect } from "react";
const Timer = () => {
    const [time, setTime] = useState(0);
    const [lineWidth, setLineWidth] = useState(0);
    const [pause, setPause] = useState(false);
    const ChangeInputValue = (event) => {
        setLineWidth(event.target.value) //добавим то что прийдет из инпута в inputValue
        setTime(event.target.value) //добавим то что прийдет из инпута в inputValue
    }
    const buttonPress = () => {
        setPause(!pause);
    }
    useEffect(() => {
        const cleanTimer = (event) => {
            setTime(lineWidth);
            setPause(false);
        }
        let interval;
        if (pause) {
            interval = setInterval(() => {
                if(time > 0) {
                    setTime(time - 1)
                } else {
                    cleanTimer()
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [pause, time, lineWidth]);
    return (
        <div>
            <input className="input" placeholder="search" value={lineWidth} onChange={ChangeInputValue}/>
            <h1>{time}</h1>
            <button onClick={buttonPress}>{pause ? "Pause" : "Start"}</button>
            <div style={{width: `calc(${time} * (100% / ${lineWidth}))`, height: "100px", backgroundColor: "green",}}></div>
        </div>
    );
};
export default Timer;