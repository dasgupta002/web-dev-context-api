import React, { useContext } from 'react'
import { Context } from "../context/global"

export const Payout = ({ data }) => {
    const { deletepay } = useContext(Context) 

    const sign = data.count < 0 ? "-" : "+"

    return (
        <div>
            <li className = { data.count < 0 ? "minus" : "plus" }>{ data.head }<span>{sign}${ Math.abs(data.count) }</span><button className = "delete-btn" onClick = { () => deletepay(data.id) }>x</button></li>
        </div>
    )
}