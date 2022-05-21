import Body from './Component/Body';
import './App.css';
import React, {useState} from 'react'
import pin from './images/pattern-divider-desktop.svg'
import tin from './images/icon-dice.svg'
import rim from './images/pattern-divider-mobile.svg'

function App() {
  const[val,setVal]=useState()
  const[dan,setDan]=useState()
  function Mit(){
  fetch('https://api.adviceslip.com/advice')
  .then(res=>res.json())
  .then(data=>{setVal(data.slip.id);
  setDan(data.slip.advice)})
  console.log(val)
  }
  
  return (
    <div className='val'>
      <h1>Advice #{val}</h1>
      <blockquote>"{dan}"</blockquote>
      <picture>
        <source  srcSet={rim} media='(max-width:375px)'></source>
        <img src={pin} alt='' className='view'></img>
      </picture>
      <button onClick={Mit} className='trill' ><img src={tin} alt='tac' id='lip' ></img></button>
        <Body/>
    </div>
  );
}

export default App;
