import React, { useLayoutEffect } from "react";
import { useState } from "react";

import { useOrderForm } from 'vtex.order-manager/OrderForm';
import { CurrencyFormat } from "../../utils/currencyFormat";

import { Progress } from 'vtex.styleguide';

import style from "./style.css";

export function Header({ props } : any) {

    const {
        id
    } = props;

    const {
        orderForm: { items },
    } = useOrderForm()

    const listPrice = items.map( (e : any) => {

        if (e?.listPrice) {
            return (e.listPrice * e.quantity);
        } else {
            return 0
        }
        
    })

    const tot = (listPrice / 100);
    const [total, setTotal] : any = useState(tot);
    const [price, setPrice]: any = useState("");
    const [percent, setPercent]: any = useState("");


    useLayoutEffect( () => {
       
        let totListPrice = 0; 

        items.map( (e : any) => {
            totListPrice+= (e.listPrice * e.quantity);
        })

        const priceTot = totListPrice / 100;

        console.log("Header", {
            props,
            tot,
            id,
            total,
            listPrice,
            totListPrice,
            setTotal,
            setPrice,
            price,
            items,
            percent
        })

        setTotal(priceTot);
        setPrice(CurrencyFormat(199.9 - priceTot));
        setPercent(Math.floor( totListPrice / 199.9 ))
    

    }, [items])
    

    return (
        <div className={style.containerFreteGratis}>

        {
            total <= 198 ? (
                <h4 className={style.titleMiniCartFreteGratis} >Faltam {price} para ao frete grátis </h4>
            ):
            (
                <h4 className={style.titleMiniCartFreteGratis} >Você ganhou frete gratis ! </h4>
            )
            
        }

            <div className={style.containerFreteGratisRangePrice}>
                <span className={style.priceFreteGratis} >
                    {CurrencyFormat(total)}
                </span>  
                <Progress percent={percent} type="line" /> 
                <span className={style.priceFreteGratis} >
                    R$ 199, 90
                </span>
            </div>

        </div>
    )
}