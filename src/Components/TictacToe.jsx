import React from 'react';
import './TicTacToe.css' ;

import { useState } from 'react';

import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';
const TictacToe = () => {
    let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }

        const newData = [...data];
        if (count % 2 === 0) {
            newData[num] = "x";
            e.target.innerHTML = `<img src='${cross_icon}' alt='X'>`;
        } else {
            newData[num] = "o";
            e.target.innerHTML = `<img src='${circle_icon}' alt='O'>`;
        }

        setData(newData);
        setCount(count + 1);

        // Use setTimeout to ensure rendering completes before checking for a win
        setTimeout(() => {
            checkWin(newData);
        }, 0);
    };

    const checkWin = (currentData) => {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6], // diagonals
        ];

        for (let combo of winCombos) {
            const [a, b, c] = combo;
            if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
                won(currentData[a]);
                return;
            }
        }

        if (!currentData.includes("")) {
            alert("It's a draw!");
            setLock(true);
        }
    };

    const won = (winner) => {
        setLock(true); // Lock the game before showing the alert
        alert(`Player ${winner.toUpperCase()} wins!`);
    };

    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);

        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box) => (box.innerHTML = ""));
    };

    return (
        <div className="container">
            <h1 className="title">
                Tic Tac Toe using <span>React</span>
            </h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button onClick={resetGame}>RESET</button>
        </div>
    );
};

export default TictacToe;




