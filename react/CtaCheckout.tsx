import { ButtonToCheckout } from './components/ButtonToCheckout';

import { useState } from 'react';
import { FormBaw } from './components/Form';

const CtaCheckout = () => {

    const [showFormbaw, setShowFormbaw] = useState(false);


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