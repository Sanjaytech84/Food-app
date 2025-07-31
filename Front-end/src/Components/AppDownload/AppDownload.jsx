import React from 'react'
import './AppDownload.css'
import app_store from '../../assets/app_store.png'
import play_store from '../../assets/play_store.png'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className="app-download-platforms">
        <img src={app_store} alt="" />
        <img src={play_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload

