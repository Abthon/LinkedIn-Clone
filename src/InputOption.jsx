import React from 'react'
import './InputOption.css'
function InputOption({text, Icon, color}) {
  return (
    <div className='inputOption'>
      <Icon style={{color: color}}/>
      <span>{text}</span>
    </div>
  )
}

export default InputOption