import React from "react"
import Top3Card from '../components/Top3Card'
import { Link } from 'react-router-dom'
// import HomeComponent from "../components/HomeComponent";

const Home = () => {

     const data = ['T','O','P']
     
     return (
          <div className="home-layout">
               {/* <HomeComponent /> */}
               <div className=" absolute w-[1920px] h-[211px] top-[480px] text-white text-[64px] text-center leading-[96px]">
               Practice C Programing
               <br />
               In 2 Week
               <br />
               <Link to='/Tasks'>
                    <button
                         className=" w-[219px] h-[72px] top-[200px] text-[#21B921] text-[30px] leading-[58px]
                         rounded-[20px] border-[1px] border-solid border-[#21B921] box-border duration-100 ease-linear
                         hover:w-[240px] hover:h-[85px] hover:text-[35px] hover:bg-[#21B921] hover:text-white">
                         GET START
                    </button>
               </Link>
               </div>
                    
               <p className=" absolute w-[1920px] top-[1179px] text-white text-[30px] text-center leading-[45px]">
               Top 3 ranking didn't sort by score
               </p>

               <Top3Card data={data} />
          </div>
     );
};

export default Home;
