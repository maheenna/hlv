import React from 'react'

import Hero from './Hero/Hero'
import Feature from './userExperience/Experience'
import PopularBurger from './Users/popularUsers'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Newsletter/>
    </div>
  )
  
}

export default Home;