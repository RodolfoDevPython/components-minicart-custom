import React, { useEffect, useState } from 'react';

import { Header } from './components/header';


interface FreteGratisProps {}

const FreeShipping: StorefrontFunctionComponent<FreteGratisProps> = ({}) => {

  const [ orders, setOrders ]: any = useState("");  
  // const queryOrders = useOrderForm();  

  useEffect( () => {
    
    const queryOrdersJSON : any = localStorage.getItem("orderform")
    const queryOrders = JSON.parse(queryOrdersJSON);

    console.log({
      queryOrders
    })
    
    setOrders(queryOrders);  

    console.log("FreteGratis");

  }, [])

  return (
    <>
      <Header props={orders} />
    </>
  )
}


export default FreeShipping;