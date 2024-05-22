import React from "react";
import Navbar from "../components/Navbar";

const Transaction =(
{  numberblog,
  setnumberblog,
  cvv2blog,
  setcvv2blog,
  yearblog,
  setyearblog,
  monthblog,
  setmonthblog,
  destination,
  setdestination,
  setmatch,
  match,
  pardakht,
  listblog,
  list
}
)=> {
  console.log(listblog)
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div
          style={{ direction: "rtl" }}
          className=" flex flex-col bg-orange-100 border-orange-500 border-4 my-2.5 mx-36 p-2.5 shadow-lg"
        >
          <div style={{ marginRight: "300px" }}>
            <label>کارت مبدا</label>
            <input
              value={numberblog}
              disabled
              onChange={(e) => setnumberblog(e.target.value)}
              className="border-4 rounded-sm border-orange-300 px-3 mt-2"
            />
          </div>
          <div style={{ marginRight: "280px" }}>
            <label>کارت مقصد </label>
            <input value={destination} onChange={(e)=>setdestination(e.target.value)} className="border-4 rounded-sm border-orange-300 px-3 mt-2" />
          </div>
          <div style={{ marginRight: "330px" }}>
            <label>cvv2</label>
            <input
              value={cvv2blog}
              disabled
              onChange={(e) => setcvv2blog(e.target.value)}
              className="border-4 rounded-sm border-orange-300 px-3 mt-2"
            />
          </div>
          <div style={{ marginRight: "330px" }}>
            <label>اعتبار</label>
            <input
              value={monthblog}
              disabled
              onChange={(e) => setmonthblog(e.target.value)}
              className="border-4 rounded-sm border-orange-300 px-3 mt-2 w-10"
            />
            /
            <input
              value={yearblog}
              disabled
              onChange={(e) => setyearblog(e.target.value)}
              className="border-4 rounded-sm border-orange-300 px-3 mt-2 w-10"
            />
          </div>
          <div style={{ marginRight: "330px" }}>
            <label>مبلغ</label>
            <input value={match} onChange={(e) => setmatch(e.target.value)} className="border-4 rounded-sm border-orange-300 px-3 mt-2" />
          </div>
          <button
             onClick={pardakht}
            style={{ marginRight: "330px" }}
            className="py-2 text-sm bg-orange-400 text-white w-[35%] mt-3 "
          >
            پرداخت
          </button>
        </div>
      </div>
    </>
  );
}
export default Transaction;
