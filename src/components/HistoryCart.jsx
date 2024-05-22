// import React from "react";
// function HistoryCart({numberblog,cvv2blog,moneyblog}){
//  return(
//     <>
//        <div
//              style={{ marginRight: "480px" }}
//              className="bg-orange-200 flex flex-col w-80 border-2 border-orange-500 rounded-md p-2.5"
//            >
//              <h3>{`شماره کارت ${numberblog}`}</h3>
//              <div className="flex gap-12">
//                <h4>{`cvv2 ${cvv2blog}`}</h4>
//              </div>
//              <h4>{`موجودی${moneyblog}`}</h4>
//            </div>
//     </>
//  )
// }
// export default HistoryCart;



import React from 'react'

export default function HistoryCard({number,
  name,
  match,
    negetivePrice}) {
  return (
    <div>
        <div className="bg-sky-400  mt-5  w-full p-5 my-0 mx-auto rounded-lg text-white hover:shadow-2xl hover:text-black hover:bg-white">
      <div className="flex flex-row justify-between items-center" >
        <h1 className="text-lg font-bold p-3">{`Number Card ${number}`}</h1>
        <h2>{`price  ${negetivePrice}`}</h2>
      </div>
      <div  className="flex flex-row justify-between items-center mt-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2>{`cash ${match}`}</h2>
      </div>
    </div>
    </div>
  )
}