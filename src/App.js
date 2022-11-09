import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  //유저가 O, X인지 구분
  const [user, setUser] = useState(true);
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(null);
    }
    setGameArray(arr);
    // showArray();
  }, []);

  useEffect(() => {
    gameArray.map((item, index) => {
      document.getElementById(index).innerHTML = item;
    })
  }, [gameArray]);

  //칸을 눌렀을때 유저 표시가 나타남
  const drawUser = (position) => {
    console.log(gameArray[`${position}`]);
    if (gameArray[`${position}`] === null) {
      console.log(2);
      setUser(!user);
      console.log(3);
      user === true
        ? gameArray[`${position}`]="O"
        : gameArray[`${position}`] = "X";
    } else {
      console.log(4);
      console.log(gameArray[`${position}`]);
    }
    console.log(gameArray)
  };

  const DrawGame = () => {
    console.log('Ddfdfjdf')
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td id="1" value={"1"} onClick={() => drawUser(0)}></td>
              <td id="2" value={gameArray[1]} onClick={() => drawUser(1)}></td>
              <td id="3" value={gameArray[2]} onClick={() => drawUser(2)}></td>
            </tr>
            <tr>
              <td id="4" value={gameArray[3]} onClick={() => drawUser(3)}></td>
              <td id="5" value={gameArray[4]} onClick={() => drawUser(4)}></td>
              <td id="6" value={gameArray[5]} onClick={() => drawUser(5)}></td>
            </tr>
            <tr>
              <td id="7" value={gameArray[6]} onClick={() => drawUser(6)}></td>
              <td id="8" value={gameArray[7]} onClick={() => drawUser(7)}></td>
              <td id="9" value={gameArray[8]} onClick={() => drawUser(8)}></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App">
      {
        <DrawGame />
      }
    </div>
  );
}

export default App;
