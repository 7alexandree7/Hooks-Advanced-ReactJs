import useAppContext from "../hook/useAppContext"

export default function ChildrenOne() {
    const { name, number } = useAppContext()
    return (
        <div>
            {name} e numero: {number}
        </div>
    )
}