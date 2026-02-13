import React, { useState } from 'react'
import GridBox from './components/GridBox';

const App = () => {

  const [grid,setGrid] = useState(Array(9).fill(0));

  const handleClick = (index) => {

    const row=Math.floor(index/3);
    const col=index % 3;
    if(grid[index]>=15){
      return;
    }
    setGrid(prevGrid=>{
      const newGrid=[...prevGrid];
      newGrid[index]+=1;
      const newValue=newGrid[index];

      if(newValue % 3 === 0 && col<2){
        const rightIndex=index+1;
        if(newGrid[rightIndex]<15){
          newGrid[rightIndex]-=1;
        }
      }

      if(newValue % 5 === 0 && row<2){
        const belowIndex=index+3;
        if(newGrid[belowIndex]<15){
          newGrid[belowIndex]+=2;
        }
      }

      return newGrid;

    })

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4 p-5">
        {
          grid.map((element,index)=>(
            <GridBox
               key={index}
               element={element}
               onClick={()=>handleClick(index)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App