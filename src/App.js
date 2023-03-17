import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import Start from "./Components/Start"
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);
  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      {!name1 && !name2 ? (
        <Start setName1={setName1} setName2={setName2} />
      ) : (
        <>
          
          <div className="game_header">
            <h1>Lets Play Game !!!!</h1>
          </div>
          <div className="logout_section">
          <div>
              <button className="LogoutButton" onClick={() => {
                setName1(null);
                setName2(null);
              }}>
                Exit
              </button>
              </div>
            </div>
          <div className="Detail_section">
            Welcome Player1: {name1}
          </div>
          <div className="Detail_section">
              Welcome Player2: {name2}
            </div>
          <div className="All_Together">

            <div className="board">
              <div className="row">
                <Square
                  val={board[0]}
                  chooseSquare={() => {
                    chooseSquare(0);
                  }}
                />
                <Square
                  val={board[1]}
                  chooseSquare={() => {
                    chooseSquare(1);
                  }}
                />
                <Square
                  val={board[2]}
                  chooseSquare={() => {
                    chooseSquare(2);
                  }}
                />
              </div>
              <div className="row">
                <Square
                  val={board[3]}
                  chooseSquare={() => {
                    chooseSquare(3);
                  }}
                />
                <Square
                  val={board[4]}
                  chooseSquare={() => {
                    chooseSquare(4);
                  }}
                />
                <Square
                  val={board[5]}
                  chooseSquare={() => {
                    chooseSquare(5);
                  }}
                />
              </div>
              <div className="row">
                <Square
                  val={board[6]}
                  chooseSquare={() => {
                    chooseSquare(6);
                  }}
                />
                <Square
                  val={board[7]}
                  chooseSquare={() => {
                    chooseSquare(7);
                  }}
                />
                <Square
                  val={board[8]}
                  chooseSquare={() => {
                    chooseSquare(8);
                  }}
                />
              </div>
            </div>
          
           
          </div>
        
        </>
      )
      }
    </div>
  );
}

export default App;
