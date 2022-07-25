import axios from "axios";
import React, {useState,useRef,useEffect} from 'react'
//import reactlogo from './logo.svg';
import './App.css';

import { v4 as uuidv4 } from 'uuid';


import Push,{maxpos} from './push.js';


function App() {
  
  const [as, setas] = useState("O")

  window.onload = function() {
    setas("good");
};
const [box, setbox] = useState(1)

function ok() { }

return(
  <div>
    <div>{as}</div>
  <button onClick={e=> ok()} >home</button>
    <button>Next</button>
  </div>
)

}

export default App;
