import {useState} from "react";


function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />
            <button>Добавить</button>
        </form>
    )
}

export default ToDoForm