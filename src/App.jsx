// import { useState } from 'react'  

import Backgrounds from './components/Backgrounds'
import Foreground from './components/Foreground';
import './App.css'

function App() {
return(
   <div className=" relative h-screen w-full bg-zinc-800">
     <Backgrounds/>
   <Foreground/>
   

  </div>
)
  
}

export default App;
