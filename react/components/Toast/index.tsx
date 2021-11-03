import React, { useEffect } from "react"

interface ToastNotificationsProps {
    showToast: boolean,
    onHandleClosed: (_ : boolean) => void,
    message: string
}

import style from "./style.css";
import iconWarning  from "../../../assets/icons/sinal-de-alerta.png";

export function ToastNotifications({
    showToast,
    onHandleClosed,
    message
}: ToastNotificationsProps) {


    console.log({
        onHandleClosed,
        showToast
    })

    useEffect( () => {

        if(showToast === true) {
            console.log("chamei a função")
            setTimeout( () => onHandleClosed(false) , 2000);
        }

    }, [showToast])


    return (      
        <div 
            className={`${style.ButtonToast}
                ${!showToast && style.ButtonToastHidden}
            `}> 
            <img src={iconWarning} alt="icon-warning" />
            {message}
        </div>
        
    )

}