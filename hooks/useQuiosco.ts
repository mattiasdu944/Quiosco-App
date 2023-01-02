import { useContext } from "react"
import { QuioscoContext } from '../context/QuioscoContext';


export const useQuiosco = () => {
    return useContext( QuioscoContext )
}