import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Constant';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [Videos, setVideos] = useState([]);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    getVideos();
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json();
    setloading(true);
    setVideos(json.items)
  }
  if (!loading) return <Shimmer />
  return (
    <div className='flex gap-5 m-5 flex-wrap'>
      {Videos && Videos.map(video => <VideoCard key={video?.id} info={video} />)}
    </div>
  )
}

export default VideoContainer