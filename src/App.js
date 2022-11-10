import "./App.css";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  //유저가 O, X인지 구분
  const [user, setUser] = useState(true);
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(null);
    }
    // const arr = new Array(9).map((x) => null);
    setGameArray(arr);
    console.log(gameArray);
  }, []);

  //칸을 눌렀을때 유저 표시가 나타남
  const drawUser = (position) => {
    if (gameArray[`${position}`] === null) {
      setUser(!user);
      user === true
        ? setGameArray(...gameArray, (gameArray[`${position}`] = "O"))
        : setGameArray(...gameArray, (gameArray[`${position}`] = "X"));
    }
    setGameArray(gameArray)
  };

  const DrawGame = () => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td id="1" onClick={() => drawUser(0)}>
                {gameArray[0]}
              </td>
              <td id="2" onClick={() => drawUser(1)}>
                {gameArray[1]}
              </td>
              <td id="3" onClick={() => drawUser(2)}>
                {gameArray[2]}
              </td>
            </tr>
            <tr>
              <td id="4" onClick={() => drawUser(3)}>
                {gameArray[3]}
              </td>
              <td id="5" onClick={() => drawUser(4)}>
                {gameArray[4]}
              </td>
              <td id="6" onClick={() => drawUser(5)}>
                {gameArray[5]}
              </td>
            </tr>
            <tr>
              <td id="7" onClick={() => drawUser(6)}>
                {gameArray[6]}
              </td>
              <td id="8" onClick={() => drawUser(7)}>
                {gameArray[7]}
              </td>
              <td id="9" onClick={() => drawUser(8)}>
                {gameArray[8]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App">
      <DrawGame />
    </div>
  );
}

export default App;
