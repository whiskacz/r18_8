import { useState } from 'react';
import menu from './data/data';
import  { DataInterface } from './interfaces/interfaces'
import Dish from './components/Dish';
import Title from './components/Title';
import './css/index.css';



const App: React.FC = () => {
    
    const[data,setData] = useState<DataInterface[]>(menu)

    const breakfastHandle = () => {
      const newData = menu.filter((element) => {
      return element.category === "breakfast" })
      setData(newData)
    }

    const lunchHandle = () => {
      const newData = menu.filter((element) => {
      return element.category === "lunch" })
      setData(newData)
    }

    const shakeHandle = () => {
      const newData = menu.filter((element) => {
      return element.category === "shakes" })
      setData(newData)
    }


  return (
    <div className='mainContainer'>
    <Title 
    breakfastHandle={breakfastHandle} 
    lunchHandle={lunchHandle}
    shakeHandle={shakeHandle}
    />
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