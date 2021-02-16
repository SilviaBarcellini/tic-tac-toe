//import { useState } from "react";
import { type } from "os";
import styles from "../styles/Board.module.css";
import Square from "./Square";

//9 squares filled with null
type Props = {
  squares: string[];
  onClick(i: number): void;
};
export default function Board(props: Props) {
  //these two constant are now passed to the game.tsx
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //const [xIsNext, setXIsNext] = useState(true); //set x next, when not x is next

  //handle click fx moved to game.tsx

  function renderSquare(i: number) {
    //combo of handleClick and returns the new value
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  //??????WEG!!!const status = "Next player: " + (xIsNext ? "X" : "O");

  /* const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner " + winner; //game over, no more moves are possible
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); //game goes on, next move($=leon'ssoltuion #literals)
  } 
 */
  return (
    <div>
      {/* { <div className={styles.status}>{status}</div> */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={"board-row"}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

//function calculateWinner(squares) moved to game.tsx
