import { useState } from 'react'


interface NumberProps {
  value: string
}
function Square({ value, onHandlerClick }) {
  // const [value, setValue] = useState(null)
  // function handlerClick() {
  //   // setValue ('X')
  // }
  return <button className="square" onClick={onHandlerClick}>{value}</button>
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [curMove, setCurMove] = useState(0)
  const currentSquares = history[curMove]
  const xIsNext = curMove % 2 === 0

  function handlerPlay(nextSquares) {
    console.log('handlerPlay')
    const nextHistory = [...history.slice(0, curMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurMove(nextHistory.length - 1)
  }

  function jumpTo(move) {
    setCurMove(move)
  }
  const moves = history.map((squares, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li className='info-li' key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Borad xIsNext={xIsNext} squares={currentSquares} onPlay={handlerPlay} />
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}

function Borad({ xIsNext, squares, onPlay }) {

  function handlerClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return
    let nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }
  const winner = calculateWinner(squares)
  console.log(winner)
  let status = ''
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const btnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
    return (
      <Square key={i} value={squares[i]} onHandlerClick={() => handlerClick(i)} />
    )
  })

  return <>
    <div className="status">{status}</div>
    <div className="row">
      {btnArr}
    </div>
    {/* <div className="row">
      <Square value={squares[1]} onHandlerClick={() => handlerClick(1)} />
      <Square value={squares[2]} onHandlerClick={() => handlerClick(2)} />
      <Square value={squares[3]} onHandlerClick={() => handlerClick(3)} />
    </div>
    <div className="row">
      <Square value={squares[4]} onHandlerClick={() => handlerClick(4)} />
      <Square value={squares[5]} onHandlerClick={() => handlerClick(5)} />
      <Square value={squares[6]} onHandlerClick={() => handlerClick(6)} />
    </div>
    <div className="row">
      <Square value={squares[7]} onHandlerClick={() => handlerClick(7)} />
      <Square value={squares[8]} onHandlerClick={() => handlerClick(8)} />
      <Square value={squares[9]} onHandlerClick={() => handlerClick(9)} />
    </div> */}
  </>
}

function calculateWinner(squares: number[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}