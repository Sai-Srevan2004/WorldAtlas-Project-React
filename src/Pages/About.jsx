import React from 'react'
import {countries} from '../Data/Data'
import '../Css/About.css'

const About = () => {
  return (
    <div>
         <div className="heading-in-about">
              <h1>
                Here are the intresting facts
                <br />
                 we are proud of
              </h1>
         </div>
         <div className="about-cards-container">
            {
              countries.map((country)=>{
                return <div key={country.id} className="about-card">
                          <p><span className='span'>Country:</span>{country.country}</p>
                          <p><span className='span'>Capital:</span>{country.capital}</p>
                          <p><span className='span'>IntrestingFact:</span>{country.interestingFact}</p>
                          <p><span className='span'>Population:</span>{country.population}</p>
                </div>
              })
            }
         </div>
    </div>
  )
}

export default About
