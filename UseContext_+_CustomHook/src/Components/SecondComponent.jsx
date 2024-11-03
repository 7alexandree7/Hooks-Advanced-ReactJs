import UseChangeNameHook from "../Hooks/UseChangeNameHook"

export default function  SecondComponent() {

    const {setName} = UseChangeNameHook()

    return (
        <div>
            <button onClick={() => setName('Unfast')}>Change Name</button>
        </div>
    )
}