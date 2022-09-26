import React from 'react'
import Topnav from '../Components/TopNav'
import Mainpage from '../Components/MainPage'
import Statsbar from '../Components/StatsBar'
export default function Home() {
  return (

    <div>
      <Topnav/>
      <Mainpage/>
      <Statsbar/>
    </div>
  )
}
