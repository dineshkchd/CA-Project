import React from 'react'
import CommonBannerImage from './CommonBannerImage'

const CommonBanner = ({text, url }) => {
  return (
    <div style={{ maxWidth: '100%', height: '50vh', textAlign: 'center' ,background:"red"}}>
      <CommonBannerImage text={text} url={url}/>
    </div>
  )
}

export default CommonBanner
