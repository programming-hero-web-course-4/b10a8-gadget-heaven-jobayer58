import { createContext, useState } from "react";

export const CountContext = createContext(0)
export const CountProvider = ({ children }) => {
    const [countSum, setCountSum] = useState(0)
    const [countHart, setCountHart] = useState(0)


    const sumCart = () => {
        setCountSum((prev) => prev + 1)
    }

    const sumHart = () => {
        setCountHart((prev) => prev + 1)
    }

    const countResetCart = () => {
        setCountSum(0)
    }

    const countResetWish = () => {
        setCountHart(0)
    }

    return (
        <CountContext.Provider value={{ countSum, sumCart ,countHart, sumHart, countResetCart,countResetWish}}>
            {children}
        </CountContext.Provider>
    )
}