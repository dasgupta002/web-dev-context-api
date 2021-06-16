import React, { useState, useContext } from 'react'
import { Context } from "../context/global"

export const Form = () => {

    const { addpay } = useContext(Context);

    const [head, setHead] = useState("")
    const [count, setCount] = useState(0)

    const handlePay = (event) => {
        event.preventDefault()

        const payout = {
            id: Math.floor(Math.random() * 100000000),
            head: head,
            count: +count
        }

        addpay(payout)
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = { handlePay }>
                <div className = "form-control">
                    <label>Expense Head</label>
                    <input type = "text" placeholder = "Enter expense head . ." value = { head } onChange = { ({ target }) => setHead(target.value) } />
                </div>
                <div className = "form-control">
                    <label>
                        Expense Count<br />
                        (negative - expense and positive - income)
                    </label>
                    <input type = "number" placeholder = "Enter expense count . ." value = { count } onChange = { ({ target }) => setCount(target.value) } />
                </div>
                <button className = "btn">Add Transaction</button>
            </form>            
        </div>
    )
}