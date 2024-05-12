import React from 'react'

const Button = ({btnName}) => {
  return (
    <div>
      <button className='px-5 m-2 py-2 bg-gray-200 text-wghite rounded-lg'>{btnName}</button>
    </div>
  )
}

export default Button
