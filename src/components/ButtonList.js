import React from 'react'
import Button from './Button'

const ButtonList = () => {
  let list = ["All", "Gaming", "Songs", "Live", "Sports", "News", "Cooking"];
  return (
    <div className='flex'>
      {list.map(btn => <Button key={btn} btnName={btn} />)}
    </div>
  )
}

export default ButtonList