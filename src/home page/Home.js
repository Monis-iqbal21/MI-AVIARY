import React from 'react'
import NewItem from './new items/NewItem'
import Slider from './slider/Slider'
import Map from '../map/Map'
import background_1 from "../images/background_1.jpg"


const Home = () => {
  return (
    <div style={{backgroundImage:`url(${background_1})`,backgroundSize: "cover"}}>
    <Slider />
    <NewItem />
    <Map />
    </div>
  )
}

export default Home