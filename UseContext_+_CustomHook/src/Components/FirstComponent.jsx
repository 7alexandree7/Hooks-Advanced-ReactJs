import UseChangeNameHook from "../Hooks/UseChangeNameHook"


export default function FirstComponent () {

    const {name} = UseChangeNameHook()

    return (
        <div>
            <h3>Meu Nome é  {name}</h3>
        </div>
    )
}