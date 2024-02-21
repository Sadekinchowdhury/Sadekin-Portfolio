import React from 'react'
import { About } from '../About/About'
import { Banner } from '../Banner/Banner'
import { Experience } from '../Experience/Experience'
import { Skills } from '../Slills/Skills'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Experience/>
      <Skills/>
    
      </div>
  )
}
