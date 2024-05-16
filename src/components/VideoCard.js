import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);
    let { snippet, statistics } = info;
    let { thumbnails, title, channelTitle } = snippet;
    return (
        <div className='w-72 rounded-lg cursor-pointer'>
            <img src={thumbnails?.medium?.url} alt={title} className='rounded-lg' />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} Views</li>
            </ul>
        </div>
    )
}
export const VideoCardHOC = ({ info }) => {
    return (
        <div className='border border-red-900relative p-2'>
        <h4 className='absolute bg-black text-white px-5'>Ad</h4>
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard