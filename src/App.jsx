import './App.css'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {
 
function handleClick(){
  alert('button clicked')
}

const handleClick2 = () =>{
    alert('button 2 clicked')
}

const addToFive =(num) =>{
  alert(num+5);
}
  return (
    <>
     
      <h2>React core Concepts</h2>
      <Friends></Friends>
      <Users></Users>
       <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>

      <button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
