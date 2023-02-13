import React, { createContext, useContext } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {

    // const [example, setExample] = useState()

    return (
        <Context.Provider
            value={{
                // example,
                // setExample,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)