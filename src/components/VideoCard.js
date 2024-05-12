import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);
    let { contentDetails, snippet, statistics } = info;
    let { thumbnails, title, channelTitle } = snippet;
    return (
        <div className='w-72 rounded-lg'>
            <img src={thumbnails?.medium?.url} alt={title} className='rounded-lg' />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard