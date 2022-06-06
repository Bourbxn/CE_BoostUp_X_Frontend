import React from 'react'

const Top3Card = (props) => {

     const {data} = props

     return (
          <div className=' absolute top-[1269px]'>
               <div className=' absolute w-[300px] h-[450px] right-[316.5px] bg-[#B9B9B9] rounded-[15px] 
               text-white text-center text-[150px] pt-[115px] leading-[226px]'>
                    {data[0]}
               </div>
               <div className=' absolute w-[300px] h-[450px] right-[-150px] bg-[#B9B9B9] rounded-[15px]
               text-white text-center text-[150px] pt-[115px] leading-[226px]'>
                    {data[1]}
               </div>
               <div className=' absolute w-[300px] h-[450px] left-[313.5px] bg-[#B9B9B9] rounded-[15px]
               text-white text-center text-[150px] pt-[115px] leading-[226px]'>
                    {data[2]}
               </div>
          </div>
     )
}

export default Top3Card