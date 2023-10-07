import Header from "../components/Header"
import LittleInputs from "../components/LittleInputs"
import NewInput from "../components/NewInput"
import TodoDone from "../components/TodoDone"

export default function App(){
    return (
        <div>
            <Header/>
            <NewInput/>
            <LittleInputs/>
            <TodoDone/>
        </div>
    )
}