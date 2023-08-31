import React, { useState } from 'react'
import {
         HeartIcon,
         CrownIcon,
         StarIcon,
         BaskeIcon,        
       } from "../../../assets/icons";
         import product from "../../../../public/images/product.png";

function ProductOne({item}) {
  const [favorite, setFavorite] = useState(false)


  return (
         <div className="card">
         <div className="header-button">
           <button className="crown">
             <CrownIcon />
           </button>
           <button onClick={() => setFavorite(true)}>
             <HeartIcon />
           </button>
         </div>
         <div className="card-img">
           <img src={item.img} alt="" />
         </div>
         <div className="card-menu">
           <h1>
             <span>
               <StarIcon />
             </span>
             (5.0) 0 отзывов
           </h1>
           <h2>{item.price}сум</h2>
           <h3>
             <span>от</span>{item.sold} сум
           </h3>
           <p>
            {item.name} 
           </p>
           <h4>
             Бренд:<span> {item.brend}</span>
           </h4>
         </div>
         <div className="card-button">
           <button>Купить сразу</button>
           <button className="basket">
             <BaskeIcon />
           </button>
         </div>
       </div>
  )
}

export default ProductOne