"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TitleNoUnderline from './TitleNoUnderline';

const Video = () => {
  interface Video {
    id: number,
    src: string,
    nameVideo: string,
    imgVideo: string,
    categoryVideo: string
  }
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoSelected, setVideoSelected] = useState(1)
  useEffect(() => {
    axios.get('/data.json')
      .then(res => setVideos(res.data.videos))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='w-[71.5%] py-8 flex flex-col h-fit gap-x-5'>
      <TitleNoUnderline nameTitle="VIDEO" />
      <div className='flex flex-row gap-x-2 not-lg:flex-col'>
        <div className='w-8/12 h-full not-lg:w-full'>
          {videos.slice(videoSelected - 1, videoSelected).map((video) => (
            <div key={video.id}>
              <video controls autoPlay muted className='w-full min-h-[360px]'>
                <source src={video.src} type='video/mp4' />
              </video>
            </div>
          ))}
        </div>
        <div className='w-4/12 max-h-[360px] overflow-y-auto bg-gray-200 not-lg:w-full'>
          {videos.slice(0, 10).map((listVideo) => (
            <div key={listVideo.id} className={`flex gap-4 m-3 cursor-pointer hover:text-blue-600 ${videoSelected === listVideo.id ? 'bg-gray-500': ''}`}
              onClick={() => setVideoSelected(listVideo.id)}
            >
              <img src={listVideo.imgVideo} alt="" className='h-22 w-2/5 border' height={75} width={100}/>
              <span className='flex flex-col justify-around'>
                <p className='text-sm font-bold'>{listVideo.nameVideo} </p>
                <p className='text-sm'>{listVideo.categoryVideo}</p>
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Video