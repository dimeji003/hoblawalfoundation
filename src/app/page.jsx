"use client"
import Main from './components/Main'
import React from 'react'
import Whoweare from './components/Whoweare'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

export default function page() {
  return (
    <div>
      <Main />
      <Whoweare />
      <Contact />
      <Gallery />
    </div>
  )
}
