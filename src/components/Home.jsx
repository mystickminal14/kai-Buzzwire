import React ,{useContext} from 'react'
import './home.css'
import Ads from './Ads'

import Navbar from './Navbar'
import Search from './Search'
export default function Home() {
    
  return (
    <>
   <Navbar/>
   <Ads/>
<Search/>
    </>
  )
}
