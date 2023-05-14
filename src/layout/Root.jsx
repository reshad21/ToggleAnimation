// eslint-disable-next-line no-unused-vars
import React from 'react'
import Display from '../components/Display'
import Sidebar from '../components/Sidebar'

const Root = () => {
  return (
    <div className="w-[80%] h-[85%]  p-4 rounded-md bg-blue-50 bg-[url('https://dynamicwallpaper.club/landing-vids/poster.jpg')] bg-cover bg-no-repeat cs-shadow flex gap-6 items-center relative">
      <Sidebar />
      <Display />
    </div>
  )
}

export default Root