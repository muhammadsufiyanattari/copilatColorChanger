import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('rgb(33, 33, 33,0.8)'); // Initial background color

  const handleChangeColor = (color) => {
    setBgColor(color); // Toggle between white and lightblue
};
  return (
    <>
 

  
        <div>
            <div className='mydiv' style={{ backgroundColor: bgColor, width: '1000px', height: '400px',margin:'10px',color:"white",borderRadius:"20px" }}>
              <p style={{padding:'170px ' ,fontSize:'30px' ,fontWeight:"bold"}}>  Click the button to change my color!</p>
            </div>
            <button style={{ margin:"5px",background:'red'}} onClick={()=>handleChangeColor("red")}>Change Color</button>
            <button style={{ margin:"5px",background:'pink'}} onClick={()=>handleChangeColor("pink")}>Change Color</button>
            <button style={{ margin:"5px",background:'yellow'}} onClick={()=>handleChangeColor("yellow")}>Change Color</button>
            <button style={{ margin:"5px",background:'green'}} onClick={()=>handleChangeColor("green")}>Change Color</button>
            <button style={{ margin:"5px",background:'brown'}} onClick={()=>handleChangeColor("brown")}>Change Color</button>
            <button style={{ margin:"5px",background:'yellowgreen'}} onClick={()=>handleChangeColor("yellowgreen")}>Change Color</button>
        </div>
   




    </>
  )
}

export default App
