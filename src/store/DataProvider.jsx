import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

  const [user, setUser] = useState()
  const [todos, setTodos] = useState([])

  const sharedData = {
    user, setUser,
    todos, setTodos
  }

  return <DataContext.Provider value={ sharedData }>
    { children }
  </DataContext.Provider>
}