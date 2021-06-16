import React, { useContext } from 'react'
import { Payout } from "./payout"
import { Context } from "../context/global"

export const Transaction = () => {
    const { transactions } = useContext(Context);
    
    return (
        <div>
            <h3>History</h3>
            <ul className = "list">
                {
                    transactions.map((transaction) => {
                        return(<Payout key = { transaction.id } data = { transaction } />)
                    })
                }
            </ul>            
        </div>
    )
}