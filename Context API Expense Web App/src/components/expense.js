import React, { useContext } from 'react'
import { Context } from "../context/global"

export const Expense = () => {
    const { transactions } = useContext(Context)
    
    const payments = transactions.map((transaction) => transaction.count)
    const remunration = payments.filter((item) => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2)
    const costs = ((payments.filter((item) => item < 0).reduce((acc, item) => acc += item, 0)) * -1).toFixed(2)

    return (
        <div>
            <div className = "inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className = "money plus">+${ remunration }</p>
                </div>    
                <div>
                    <h4>Expense</h4>
                    <p className = "money minus">-${ costs }</p>
                </div>    
            </div>            
        </div>
    )
}