import { useState } from 'react';
import menu from './data/data';
import  { DataInterface } from './interfaces/interfaces'
import Dish from './components/Dish';
import Title from './components/Title';
import './css/index.css'


function App() {

    const[data,setData] = useState<DataInterface[]>(menu)
  return (
    <div className='mainContainer'>
    <Title />
    <ul className='ulContainer'>
    {data.map((element) => {
        return (
            
                <Dish key={element.id} {...element} />
            
        )
    })}
    </ul>
    </div>
  )
}

export default App