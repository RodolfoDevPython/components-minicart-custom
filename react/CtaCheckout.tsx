import { ButtonToCheckout } from './components/ButtonToCheckout';

// import useOrderForm from './hooks/useOrderForm';
import { useEffect, useState } from 'react';
import { FormBaw } from './components/Form';

const CtaCheckout = () => {

    const [showFormbaw, setShowFormbaw] = useState(false);

    useEffect( () => {
        
        const queryOrdersJSON : any = localStorage.getItem("orderform")
        const queryOrders = JSON.parse(queryOrdersJSON);

        console.log({
            queryOrders
        })
        
        // setOrders(queryOrders);  

        console.log("FreteGratis");
    
    }, [])

    function handleOpen() {
        setShowFormbaw(!showFormbaw)
    }

    return (
        <>
            { 
            showFormbaw ? 
                <FormBaw handleOpen={handleOpen} showFormbaw={showFormbaw}  /> 
            :
                <ButtonToCheckout handleOpen={handleOpen} />
            }
            
        </>
    )    

}

export default CtaCheckout