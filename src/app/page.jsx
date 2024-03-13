"use client"
import Main from './components/Main'
import React from 'react'
import Whoweare from './components/Whoweare'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Aims from './components/Aims'

export default function page() {
  return (
    <div>
      <Main />
      <Aims />
      <Whoweare />
      <Contact />
      <Gallery />
    </div>
  )
}
