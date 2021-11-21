import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const naiok = ['bapraj', 'josim', 'rubel', 'manna', 'sakib'];
  const naika = ['muyuri', 'sabana', 'popi', 'purnima', 'opu'];
  return (
    <div>
      <Person name={naiok[0]} name2={naika[0]}></Person>
      <Person name={naiok[1]} name2={naika[1]}></Person>
      <ul>
        {naiok.map(naiok => <li>{naiok} </li>)}
      </ul>
      <Counter></Counter>

      <Users> </Users>


    </div>
  );

}


function Person(props) {
  const personStyle = {
    border: '1px solid Gold',
    marginTop: '30px',
    width: '400px',
    textAlign: 'center',
    backgroundColor: 'gray',
    boxShadow: '5px 5px 5px 5px gold',
    marginLeft: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Nayok name : {props.name}</h1>
      <h2> Nayka name : {props.name2}</h2>
    </div>
  )

}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data ));
},[]);
  return (
    <div>
      <h1>Dynamic User:{users.length}</h1>
      <ul>
      {  users.map(user=> <li>{user.name}</li>)}
      </ul>
    </div>
  )

}

function Counter() {
  const [count, setCount] = useState(10);
  const hendleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>
        conut : {count}
      </h1>
      <button onClick={hendleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

    </div>
  )

}

export default App;
