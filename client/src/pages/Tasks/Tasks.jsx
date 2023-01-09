import React from 'react'
import './Tasks.scss'
import { images } from '../../constants';
import { NavbarWrap } from '../../wrapper';

const Tasks = () => {
  return (
    <div>
      <p>Tasks</p>
      <img src={images.react} alt="react logo" />
    </div>
    

  )
}

export default NavbarWrap(Tasks)