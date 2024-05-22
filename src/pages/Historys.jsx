// import React from "react";
// import Navbar from "../components/Navbar";
// import HistoryCart from "../components/HistoryCart";
// const History = (
//  {
//   numberblog,
//   cvv2blog,
//   listblog
//  }
// )=> {
//   console.log(listblog)
//   return (
//     <>
//       <div>
        // <Navbar />
//          <HistoryCart/>
//       </div>
//     </>
//   );
// }
// export default History;




import React from 'react'
import Navbar from "../components/Navbar";

import HistoryCard from '../components/HistoryCart';
export default function History({History}) {
  return (
    
    <div className='container '>
      <Navbar/>
      <div className='container mb-9  w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-2  text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white'>
      <div className="bg-white mt-5 flex flex-col justify-start items-end pb-14 ">
        {
            History.map((item)=>{
           return  item != null ? (<HistoryCard number={item.number} name={item.name} match={item.match} negetivePrice={item.p}/>):null;
            })
        }
        </div>
      </div>
        
      
    </div>
  )
}
