import React, { useState } from "react";

import banner1 from "../../../public/images/big-banner.png";
import banner2 from "../../../public/images/small-banner.png";

import action1 from "../../../public/images/action1.png";
import action2 from "../../../public/images/action2.png";
import xolodilnik from '../../../public/images/xolodilnik-removebg-preview.png'
import Televizor from '../../../public/images/televizor-removebg-preview.png'
import KirMoshin from '../../../public/images/kir-moshin-removebg-preview.png'
import Kondisiator from '../../../public/images/kandisionerPng.png'
import {
  NextIcon,
} from "../../assets/icons";
import ProductOne from "./product/ProductOne";
import ProductTwo from './product/ProductTwo';
import ProductThree from './product/ProductThree';  
import ProductFour from './product/ProductFour';
import ProductFive from "./product/ProductFive";
import productImg from "../../../public/images/product.png";
import Menu from "./Menu";



const Main = () => {


  const [product , setProduct] = useState([
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '5 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '5 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '5 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '5 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '5 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '9 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '9 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '9 195 000' ,
      sold: 266.400 ,
    },
    {
      id:1,
      name: ' Кондиционер Artel ART-09  HMDF Grand Белый',
      img:productImg,
      brend:'Artel',
      price: '9 195 000' ,
      sold: 266.400 ,
    }
  ])

  return (
    <main className="main">
      <Menu/>
      <div className="container">
        <div className="banner-next">
          <div className="banner-images">
            <img className="banner1" src={banner1} alt="" />
            <img className="banner2" src={banner2} alt="" />
          </div>
          <div className="banner-block">
            <h1>Люди часто ищут</h1>
            <div className="banner-block-menu">
              <h2>Кондиционеры AUX</h2>
              <h2>Купить кондиционер HAIER 24</h2>
              <h2>Купить кондиционер HAIER 18</h2>
              <h2>Кондиционеры Avalon</h2>
              <h2>Купить кондиционер Premier 24</h2>
              <h2>Купить кондиционер HAIER 12</h2>
              <h2>Купить кондиционер Premier 18</h2>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block-content">
            <h1>Хиты продаж</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
            {
              product.slice(0,6).map((item) => (
              <ProductOne item={item}/>
              ))
            }
           
          </div>
        </div>

        <div className="block">
          <div className="block-content">
            <h1>Смартфоны</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
          <ProductTwo/>
          <ProductTwo/>
          <ProductTwo/>
          <ProductTwo/>
          <ProductTwo/>
          <ProductTwo/>
          </div>
        </div>
        <div className="block">
          <div className="block-content">
            <h1>Крупная бытовая техника</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
          <ProductThree/>
          <ProductThree/>
          <ProductThree/>
          <ProductThree/>
          <ProductThree/>
          <ProductThree/>
          </div>
        </div>
        <div className="block">
          <div className="block-content">
            <h1>Мелкая техника для дома</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
          <ProductFour/>
          <ProductFour/>
          <ProductFour/>
          <ProductFour/>
          <ProductFour/>
          <ProductFour/>
          </div>
        </div>


      <div className="block">
      <div className="block-content">
            <h1>Акции и видеообзоры</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>

        <div className="block-buttons">
          <button className="action">Акции</button>
          <button>idea Connect</button>
        </div>

        <div className="actionsss">
          <div className="action-blockkk">
                <img src={action1} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
          <div className="action-blockkk">
                <img src={action2} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
          <div className="action-blockkk">
                <img src={action2} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
        </div>
      </div>
      <div className="block">
          <div className="block-content">
            <h1>Мелкая техника для дома</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
              <ProductFive/>
              <ProductFive/>
              <ProductFive/>
              <ProductFive/>
              <ProductFive/>
              <ProductFive/>
          </div>
        </div>
        <div className="block">
          <div className="block-content">
            <h1>Kategoriyalar</h1>
            <h2>
              Смотреть все{" "}
              <span>
                <NextIcon />
              </span>
            </h2>
          </div>
          <div className="cards">
          <div className="botom-katagory">
                <div className="kategory1">
                  <h1>Konditsionerlar</h1>
                  <img src={Kondisiator} alt="" />
                </div>
                <div className="kategory1">
                  <h1>Sovutgichlar</h1>
                  <img src={xolodilnik} alt="" />
                </div>
                <div className="kategory1">
                  <h1>Televizorlar</h1>
                  <img src={Televizor} alt="" />
                </div>
                <div className="kategory1">
                  <h1>Kir yuvish mashinalari</h1>
                  <img src={KirMoshin} alt="" />
                </div>

              
                
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
