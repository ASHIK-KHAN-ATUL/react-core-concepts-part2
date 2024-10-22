import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './friends'

function App() {

  function hanleClick(){
    alert('BTN clicked')
  }
  const handleClick2 = () => {
    alert('BTN 2 Clciked')
  }
  const addToFive = (num) => {
    alert( num *5  );
  }

  return (
    <>
      <h3>React core concepts part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

    
      <button onClick={hanleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('BTN NUMBER 3 IS CLICKED BY ME')}}>Click 3</button>
      <button onClick={ () => addToFive(3)}>BTN 4</button>
      
    </>
  )
}

export default App
