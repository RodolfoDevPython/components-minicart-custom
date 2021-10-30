import React from "react"
import style from "./style.css";

interface FormBawProps {
    showFormbaw: boolean,
    handleOpen: (_ : boolean) => void
}


import iconLogo from "../../../assets/icons/background-logo-baw-minicart.svg";

export function FormBaw({
    showFormbaw,
    handleOpen
}: FormBawProps) {

    console.log({
        showFormbaw,
        handleOpen
    })

    return(

        <div className={style.formMinicartBaw} >

            <div className={style.formHeaderMinicartBaw}>
                <img src={iconLogo} alt="logo-baw" />
            </div>


            <form>
                <a onClick={ () => handleOpen(!showFormbaw)}>voltar para o carrinho</a>
                <span>
                    Para Finalizar a compra, informe seu email:
                    <br />
                    <strong>Rápida. Fácil. Seguro</strong>
                </span>

                <div className={style.formInputMinicartBaw} >
                    <input type="email" placeholder="Digite seu e-mail" required />   
                    <button type="submit"></button>
                </div>
                

            </form>

            <div className={style.formFooterMinicartBaw} >
                <p>
                    Confirme seu e-mail, nós o utilizamos para: <br />
                    Identificar seu perfil <br />
                    Notificar sobre o andamento do seu pedido <br />
                    Gerenciar seu histórico de compras <br />
                    Acelerar o preenchimento de suas informações <br />
                </p>
            </div>

            
        </div>
               
    )
}