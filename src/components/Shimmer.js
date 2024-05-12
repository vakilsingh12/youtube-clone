import React from 'react'

const Shimmer = () => {
    return (
        <div className='flex gap-5 m-5 flex-wrap'>
            {Array(50).fill().map((res, index) => {
                return <div key={index} className='w-72 rounded-lg h-60 bg-gray-200'></div>
            })}
        </div>
    )
}

export default Shimmer