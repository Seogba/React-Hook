import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';

const useInput = (initialValue , validator) => {
  const [value,setValue] = useState(initialValue);
  const onChange = event =>{
   const{
    target:{value}
   } = event;
   let willUpdate = true;
   if(typeof calidator === "function"){
    willUpdate = validator(value);
   }
   if(willUpdate){
    setValue(true);
   }
  }
  return {value , onChange};
}

function App(){
  const maxLen = value => value.length <= 10;
  const name = useInput("Mr." , maxLen)
  return (
    <div className="App">
    <h1>Hello</h1>
    <input placeholder='Name' value={name.value}
     onChange={name.onChange}/> 
    </div>
  )
}



export default App;
