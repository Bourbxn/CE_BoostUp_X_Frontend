import React from 'react'

import Mars from '../pictures/homeImage/Mars.png'
import Pluto from '../pictures/homeImage/Pluto.png'
import Jupiter from '../pictures/homeImage/Jupiter_real.png'
import Neptune from '../pictures/homeImage/Naptune.png'
import Saturn from '../pictures/homeImage/Saturn.png'
import Mercury from '../pictures/homeImage/Mercury.png'

const HomeComponent = () => {
     return (
          <div>
               <img src={Mars} alt='Mars' className=' absolute top-[385px] left-0 w-[271px] h-[271px]' />
               <img src={Pluto} alt='Pluto' className=' absolute top-[686px] left-[271px] w-[243px] h-[244px]' />
               <img src={Jupiter} alt='Jupiter' className=' absolute top-[436px] right-[77px] w-[465px] h-[466px]' />
               <img src={Neptune} alt='Neptune' className=' absolute top-[797px] right-[795px] w-[210px] h-[210px]' />
               <img src={Saturn} alt='Saturn' className=' absolute top-[162px] right-[343.72px] w-[520.37px] h-[228.01px] rotate-[-12.68deg]' />
               <img src={Mercury} alt='Mercury' className=' absolute top-[242px] right-[98px] w-[137px] h-[137px]' />
          </div>
     )
}

export default HomeComponent