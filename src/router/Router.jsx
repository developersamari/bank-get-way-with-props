import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCart from "../pages/AddCart.jsx";
import Historys from "../pages/Historys.jsx";
import Transaction from "../pages/Transaction.jsx";
import { useState } from "react";
import Cart from "../components/Cart.jsx";

const Router = () => {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [cvv2, setcvv2] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [Available, setAvailable] = useState("");
  const [imagbank, setimagbank] = useState("");
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);

  const [numberblog, setnumberblog] = useState("");
  const [cvv2blog, setcvv2blog] = useState("");
  const [monthblog, setmonthblog] = useState("");
  const [yearblog, setyearblog] = useState("");
  const [destination, setdestination] = useState("");
  const [match, setmatch] = useState(0);
  const [listblog, setlistblog] = useState([]);
  console.log(listblog);

  const [History, setHistory] = useState([]);
  const [cartid, setcartid] = useState("");

  const Restoration = (items) => {
    const findCard = list.filter((card) => {
      return card.id === items.id;
    });
    console.log(findCard);
    if (findCard) {
      setnumberblog(items.Number),
        setcvv2blog(items.Cvv2),
        setmonthblog(items.Month),
        setyearblog(items.Year);
      setcartid(items.id);
    }
  };
  console.log("f", list);




  const pardakht = (negetivePrice, id) => {
    const newCash = list.map((card) => {
      return card.id === id && card.Available >= negetivePrice
        ? { ...card, Available: card.Available - negetivePrice }
        : card;
    });
    


    newCash.map((item) => {
      if (item.id === id) {
        const t = { ...item, p: negetivePrice };
        setHistory([...History, t]);
        console.log(History);
      }
    });

    setlist(newCash);
  };
 

  const add = (
    Number,
    Cvv2,
    Year,
    Month,
    Name,
    Available,
    Password,
    Imagbank
  ) => {
    const newcart = {
      id: list.length + 1,
      Number,
      Cvv2,
      Year,
      Month,
      Name,
      Available,
      Password,
      Imagbank,
    };

    setlist([...list, newcart]);
    setnumber("");
    setpassword("");
    setcvv2("");
    setmonth("");
    setyear("");
    setAvailable("");
    setname("");

    const newimg = Number.slice(0, 3);
    if (newimg === 5892) {
      Imagbank =
        "src\assets\sepahbank.png";
    }
    if (newcart === 6811) {
      Imagbank =
        "src\assets\melatbank.png";
    }
    console.log(newcart);
  };
  console.log("j", list);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AddCart
                number={number}
                setnumber={setnumber}
                password={password}
                setpassword={setpassword}
                Available={Available}
                setAvailable={setAvailable}
                list={list}
                setlist={setlist}
                add={add}
                name={name}
                setname={setname}
                cvv2={cvv2}
                setcvv2={setcvv2}
                month={month}
                setmonth={setmonth}
                year={year}
                setyear={setyear}
                imagbank={imagbank}
              />
            }
          />
          <Route path="/history" element={<Historys History={History} />} />
          <Route
            path="/trans"
            element={
              <Transaction
                numberblog={numberblog}
                setnumberblog={setnumberblog}
                cvv2blog={cvv2blog}
                setcvv2blog={setcvv2blog}
                monthblog={monthblog}
                setmonthblog={setmonthblog}
                yearblog={yearblog}
                setyearblog={setyearblog}
                destination={destination}
                setdestination={setdestination}
                match={match}
                setmatch={setmatch}
                list={list}
                setlist={setlist}
                listblog={listblog}
                setlistblog={setlistblog}
                pardakht={() => pardakht(match, cartid)}
              />
            }
          />
        </Routes>
        {list.map((items, index) => {
          return (
            <Cart
              key={index}
              Restoration={() => Restoration(items)}
              Imagbank={items.Imagbank}
              number={items.Number}
              cvv2={items.Cvv2}
              year={items.Year}
              month={items.Month}
              name={items.Name}
              Available={items.Available}
              id={items.id}
            />
          );
        })}
      </BrowserRouter>
    </>
  );
};

export default Router;
