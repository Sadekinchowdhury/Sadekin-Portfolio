import React from 'react'
import { About } from '../About/About'
import { Banner } from '../Banner/Banner'
import { Experience } from '../Experience/Experience'
import { Skills } from '../Slills/Skills'
import { PortFolio } from '../portfolio/PortFolio'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Experience/>
      <Skills/>
      <PortFolio/>
      </div>
  )
}
