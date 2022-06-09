import React from "react"
import { Link } from 'react-router-dom'
import '../css/home.css'

import Mars from '../pictures/homeImage/Mars.png'
import Pluto from '../pictures/homeImage/Pluto.png'
import Jupiter from '../pictures/homeImage/Jupiter_real.png'
import Neptune from '../pictures/homeImage/Naptune.png'
import Saturn from '../pictures/homeImage/Saturn.png'
import Mercury from '../pictures/homeImage/Mercury.png'
import Rocket from '../pictures/homeImage/Rocket_Horizontal.png'
import Clound from '../pictures/homeImage/clound.png'
import Star from '../pictures/homeImage/star.png'

const HomeComponent = () => {
     return (
          <div>
               <img src={Mars} alt='Mars' className=' mars' />
               <img src={Pluto} alt='Pluto' className=' pluto' />
               <img src={Jupiter} alt='Jupiter' className=' jupiter' />
               <img src={Neptune} alt='Neptune' className=' neptune' />
               <img src={Saturn} alt='Saturn' className=' saturn' />
               <img src={Mercury} alt='Mercury' className=' mercury' />
               <img src={Rocket} alt='Rocket' className=' rocket' />
               <img src={Clound} alt='Clound' className=' clound' />
               <img src={Star} alt='Star1' className=' star star01' />
               <img src={Star} alt='Star2' className=' star star02' />
               <img src={Star} alt='Star3' className=' star star03' />
               <img src={Star} alt='Star4' className=' star star04' />
               <img src={Star} alt='Star5' className=' star star05' />
               <img src={Star} alt='Star6' className=' star star06' />
               <img src={Star} alt='Star7' className=' star star07' />
               <img src={Star} alt='Star8' className=' star star08' />
               <img src={Star} alt='Star9' className=' star star09' />
               <img src={Star} alt='Star9' className=' star star10' />
          </div>
     )
}

const Top3Card = (props) => {

     const {data} = props

     return (
          <div className=' top-3-box'>
               <div className=' card-1'>
                    {data[0]}
               </div>
               <div className=' card-2'>
                    {data[1]}
               </div>
               <div className=' card-3'>
                    {data[2]}
               </div>
          </div>
     )
}

const Home = () => {

     const data = ['T','O','P']
     
     return (
          <div className="home-layout">
               <HomeComponent />
               <div className=" text-1">
               Practice C Programing
               <br />
               In 2 Week
               <br />
               <Link to='/Tasks'>
                    <button
                         className=" button-getStart">
                         GET START
                    </button>
               </Link>
               </div>
                    
               <p className=" text-2">
               Top 3 ranking didn't sort by score
               </p>

               <Top3Card data={data} />
          </div>
     );
};

export default Home;
