import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Constant';
import VideoCard, { VideoCardHOC } from './VideoCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

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
      <VideoCardHOC info={Videos[0]}/>
      {Videos && Videos.map(video => <Link key={video?.id} to={`/watch?v=${video.id}`} ><VideoCard info={video} /></Link>)}
    </div>
  )
}

export default VideoContainer