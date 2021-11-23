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

  const [showToast, setShowtoast] = useState(false);
  const [message, setMessage] = useState("");

  const [handleMutationCoupon]  = useMutation(addCoupon);
  const [FCclearOrderFormMessages]  = useMutation(clearOrderFormMessagesMutatios);

  useEffect( () => {

    if (message.trim() == "") return;

    onHandleClosed();

  }, [message])


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

    if (couponMessages?.length > 0) {

      switch (couponMessages[0].code) {

        case "couponExpired":
            setMessage("O cupom que voçê utilizou já expirou");
          break;
      
        case "couponNotFound":
            setMessage("O cupom que voçê utilizou não é válido");
          break;
    
        default:
          break;

      }
      
      //clearOrderFormMessage rodar essa mutation quando recebermos um erro do cupon
      await FCclearOrderFormMessages({
        variables: {
          orderFormId: id
        }
      })

      
    } 

    //capturamos o erro pelo message
  }

  function onHandleClosed() {
    setShowtoast(!showToast);
  }

  return (
      <div className={style.couponContainerMinicartBaw} >
          
          <label>Cupom de Desconto</label>
          <form onSubmit={(event) => HandleCoupon(event)} className={style.couponInputMinicartBaw} >
            
              <input 
                  type="text" 
                  placeholder="insira o código"
                  onChange={({ target }) => setCoupon((target.value).toUpperCase())} 
                  required
              />   
              <button type="submit"></button>
          </form>

          {

            // showToast && (
            <ToastNotifications 
              showToast={showToast}
              message={message}
              onHandleClosed={() => onHandleClosed()}
            />
            // )

          }
          


      </div>
    
    
  )
}