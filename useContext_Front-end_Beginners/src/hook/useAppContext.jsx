import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useAppContext () {

    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error('Não esta definido dentro do Contexto')
    }

    return context;
}