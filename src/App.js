import React,{useState} from 'react';
import './App.css';
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import { Button } from '@mui/material';


function App() {

  const [switchbutton,setswitchbutton]=useState(true)

  return (
    <div className="App">
    <div style={{display:'flex',marginBottom:'2%',flexDirection:'column',justifyContent:'flex-end' ,alignContent:'flex-end',alignItems:'flex-end',backgroundColor:'#00aaff69',color:'white'}}>
    <Button variant='filled' color='secondary' onClick={()=>{setswitchbutton(!switchbutton)}} >{switchbutton?`Go to Cart`:`Go to Product`}</Button>
    </div>
    {
      switchbutton?<Home/>:<Cart/>
    }
    </div>
  );
}

export default App;
