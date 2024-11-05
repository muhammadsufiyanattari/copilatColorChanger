import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let myarr = [
  { name: "Purple", Bgcolor: " #535bf2" },
  { name: "Green", Bgcolor: " rgb(4, 147, 4)" },
  { name: "Pink", Bgcolor: " rgb(244, 80, 107)" },
  { name: "Brown", Bgcolor: " rgb(197, 146, 18)" },
  { name: "Red", Bgcolor: " red" },
  { name: "Yellow", Bgcolor: " rgb(231, 231, 12)" },
  { name: "Black", Bgcolor: " black" },
  { name: "Aqua", Bgcolor: " aqua" },
  { name: "Yellow Green", Bgcolor: " yellowgreen" },
  { name: "Dark Magenta", Bgcolor: " darkmagenta" },
];

function App() {
  const [bgColor, setBgColor] = useState('white'); // Initial background color

  const handleChangeColor = () => {
    setBgColor(bgColor === 'white' ? 'green' : 'white'); // Toggle between white and lightblue
};
  return (
    <>
 

  
        <div>
            <div style={{ backgroundColor: bgColor, width: '200px', height: '200px' }}>
                Click the button to change my color!
            </div>
            <button onClick={handleChangeColor}>Change Color</button>
        </div>
   




    </>
  )
}

export default App
