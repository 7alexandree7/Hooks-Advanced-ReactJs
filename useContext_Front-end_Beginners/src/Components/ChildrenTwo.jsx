import { Button } from "@mui/material";
import useAppContext from "../hook/useAppContext";

export default function ChildrenTwo () {

    const {setName} = useAppContext()
    
    return (
        <Button onClick={() => setName('Uk Developer')} variant="contained">Change Name</Button>
    )
}