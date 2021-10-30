// import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// interface OrderForm {
//     id: string;
//     value: number;
//     items: any[];
// }

// type OrderFormInput = Omit<OrderForm, 'id' | 'createdAt'>;

// interface OrderFormProviderProps {
//     children: ReactNode;
// }

// interface OrderFormContextData {
//     transactions: OrderForm[];
//     createTransaction: (orderForm: OrderForm) => Promise<void>
// }

// const OrderFormContext = createContext<OrderFormContextData>(
//     {} as OrderFormContextData //passamos dessa forma para forçar a tipagem do valor inicial do createContext
// );

// export function TransactionsProvider({ children }: OrderFormProviderProps) {   

//     const [orderForm, setOrderForm] = useState<OrderForm[]>([]);

//     useEffect( () => {
//         // api.get("transactions")
//         // .then( response => setTransactions(response.data.transactions) )
//     }, [])

//     async function createTransaction(orderFormInput: OrderFormInput) {
//         // const response = await api.post("/transactions", {
//         //     ...transactionInput,
//         //     createdAt: new Date()
//         // });
//         // const { transaction } = response.data;

//         setOrderForm([
//             ...orderForm
//         ])
//     }

//     return (
//         <OrderFormContext.Provider value={{ orderForm, createTransaction }} >
//             {children}
//         </OrderFormContext.Provider>
//     )

// }

// export function useTransactions() {
//     const context = useContext(OrderFormContext);

//     return context;
// }