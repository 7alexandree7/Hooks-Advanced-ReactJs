import { useContext } from "react"
import { ChangeNameContext } from "../Context/ChangeNameContext"

export default function UseChangeNameHook () {

    const context = useContext(ChangeNameContext)

    if (context === undefined) {
        throw new Error('Não esta drentro do escopo do context')
    }

    return context
}