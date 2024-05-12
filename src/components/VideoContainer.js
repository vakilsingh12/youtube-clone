import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json();
    setVideos(json.items)
  }
  return (
    <div className='flex gap-5 m-5 flex-wrap'>
      {Videos.map(video => <VideoCard key={video?.id} info={video} />)}
    </div>
  )
}

export default VideoContainer