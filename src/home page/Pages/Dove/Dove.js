import React from 'react'
import NewItem from '../../new items/NewItem'
import doveHeaderPic from '../../../images/doveHeaderPic.png'
import "./Dove.css"

const Dove = () => {
  return (
    <div className='dovePagecontainer'>
      <div className='doveHeadingdiv'><h1 className='doveHeading'>DOVE </h1><img src={doveHeaderPic} id="HeadingPic"/></div>
      <NewItem />
      <NewItem />
      <NewItem />
    </div>
  )
}

export default Dove