import React from "react";
import style from "./style.css";

export function ButtonToCheckout({ handleOpen } : any) {

    console.log("ButtonToCheckout", {
        handleOpen
    })

    return (

        <button className={style.buttonToCheckout} onClick={handleOpen}>
            Finalizar compra
        </button>            
        
    )

}