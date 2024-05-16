import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    let videoId = searchParams.get("v")
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='px-5 m-5'>
            <iframe width="1100" height="550" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage