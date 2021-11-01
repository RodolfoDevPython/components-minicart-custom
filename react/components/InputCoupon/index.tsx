import React, { FormEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-apollo';
import addCoupon from '../../graphql/Mutations/insertCupon.graphql';
import clearOrderFormMessagesMutatios from '../../graphql/Mutations/clearOrderFormMessages.graphql';

import { useOrderForm } from 'vtex.order-manager/OrderForm';

interface DiscountCouponProps {}

import style from "./style.css";
import { ToastNotifications } from '../Toast';

export function DiscountCoupon({} : DiscountCouponProps) {

  const [coupon , setCoupon] = useState("");
  const {
    orderForm: { id }    
  } = useOrderForm();


  useEffect( () => {
    
    console.log({ coupon })

  }, [coupon]);

  const [showToast, setShowtoast] = useState(false);


  const [handleMutationCoupon]  = useMutation(addCoupon);
  const [FCclearOrderFormMessages]  = useMutation(clearOrderFormMessagesMutatios);

  async function HandleCoupon(event: FormEvent) {

    event.preventDefault();
    
    if (coupon == "")  return;

    const {
      data: {
        insertCoupon: {
          messages: {
            couponMessages
          }
        }
      }
    } = await handleMutationCoupon({
      variables: {
        ID: id,
        text: coupon
      },
    })

    console.log({
      couponMessages
    })

    if (couponMessages.length > 1) {
  
      if (couponMessages[0] == "couponExpired") {

      }

      if (couponMessages[0] == "couponNotFound") {

      }

      //clearOrderFormMessage rodar essa mutation quando recebermos um erro do cupon
      const { 
        data: {
          clearOrderFormMessages 
        } 
      } = await FCclearOrderFormMessages({
        variables: {
          orderFormId: id
        }
      })

      console.log({
        clearOrderFormMessages,
        couponMessages
      })
    } 

    //capturamos o erro pelo message

    
    

  }

  function onHandleClosed() {
    setShowtoast(!showToast);
  }

  return (
      <div className={style.couponContainerMinicartBaw} >
          
          <label>Cupon de Desconto</label>
          <form onSubmit={(event) => HandleCoupon(event)} className={style.couponInputMinicartBaw} >
            
              <input 
                  type="text" 
                  placeholder="insira o código"
                  onChange={({ target }) => setCoupon((target.value).toUpperCase())} 
              />   
              <button type="submit"></button>
          </form>

          {

            !showToast && (
              <ToastNotifications 
                showToast={showToast}
                message='O cupom que voçê utilizou não é válido'
                onHandleClosed={onHandleClosed} 
              />
            )

          }
          


      </div>
    
    
  )
}