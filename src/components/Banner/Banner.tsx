import React from 'react'
import './Banner.scss'

type Props={
  image:string,
  message:string,
  url?:string
}
export default function Banner({image,message,url }:Props) {

  const bannerStyle ={
    backgroundImage:`url(${image})`
  }

  return (
    <div className='Banner' style={bannerStyle}>
      <div className="textWrapper">
        <p>{message}</p>
        <a href={url} target='_blank' className='bannerBtn'>Ver mas...</a>
      </div>

    </div>
  )
}
