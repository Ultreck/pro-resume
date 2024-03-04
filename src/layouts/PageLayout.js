import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Router from '../routes/Router'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Work/>
      <Contact/>
      <Router/>
      <Outlet/>
      
    </div>
  )
}

export default PageLayout
