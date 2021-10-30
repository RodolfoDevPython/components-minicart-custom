import React, { useEffect, useState } from 'react';


interface DiscountCouponProps {}

import style from "./style.css";

export function DiscountCoupon({} : DiscountCouponProps) {

  const [coupon , setCoupon] = useState("");

  useEffect( () => {
    
    console.log({ coupon })

  }, [coupon])

  return (
    <div className={style.couponContainerMinicartBaw} >
        
        <label>Cupon de Desconto</label>
        <div className={style.couponInputMinicartBaw} >
            <input 
                type="text" 
                placeholder="insira o código"
                onChange={({ target }) => setCoupon(target.value)} 
            />   
            <button type="submit"></button>
        </div>

    </div>
  )
}