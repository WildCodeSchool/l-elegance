import { useUserContext } from "../context/UserContext"

export default function Page1() {
    const { testPython } = useUserContext();
    return <button onClick={testPython}>test</button>
}