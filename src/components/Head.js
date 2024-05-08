import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch()
    const toggleMenuhandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className='grid grid-flow-col p-5 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuhandler()} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFU7aWIxBgnNrlC7EB7TiUtLw4obRO-NZamWpHUt4RA&s" alt="menu" className='h-8 cursor-pointer' />
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4b2n8GBaCv9N_mACd80jOndpzkO6obci8lyTX9Sd_PQ&s" alt="youtube-logo" className='h-8 mx-2' />
                </a>
            </div>
            <div className='col-span-10 text-center'>
                <input type="text" className='w-1/2 border border-gray-400 rounded-l-full p-2' />
                <button className='border border-gray-400 rounded-r-full py-2 px-4 bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="user" className='h-8' />
            </div>
        </div>
    )
}

export default Head