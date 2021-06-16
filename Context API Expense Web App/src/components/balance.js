import React, { useContext } from 'react'
import { Context } from "../context/global"

export const Balance = () => {
    const { transactions } = useContext(Context)
    
    const payments = transactions.map((transaction) => transaction.count)
    const total = payments.reduce((acc, item) => acc += item, 0).toFixed(2)

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${ total }</h1>           
        </div>
    )
}