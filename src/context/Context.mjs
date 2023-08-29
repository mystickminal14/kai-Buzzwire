import { createContext , useState,useEffect} from "react";
import axios from 'axios'
export const AppContext = createContext();


export default function Share({children}) {

  return (<AppContext.Provider value={"minal"}>{children}</AppContext.Provider>
)}
