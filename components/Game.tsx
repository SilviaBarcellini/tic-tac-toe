import styles from "../styles/Game.module.css";
import Board from "./Board";
import { useState } from "react";

export default function Game() {
  //lift up again (same as the board but applied to the game)
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  //function handleClick moved from board.tsx
  function handleClick(i) {
    //the square is already taken, it is not possible to change your mind
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //when click the squares can be filled wit x or with o
    //const newSquares = squares.slice();
    //newSquares[i] = xIsNext ? "X" : "O"; //inline condition
    squares[i] = xIsNext ? "X" : "O";
    //setSquares(newSquares);
    setHistory(history.concat([{ squares: squares }]));
    setXIsNext(!xIsNext); ///!=false so it is 0 turn
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

//moved from board.tsx
//when every square filled is, then this function starts
function calculateWinner(squares) {
  const lines = [
    //every possible solution list
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
