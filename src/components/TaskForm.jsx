import { useState } from "react";
import '../styles/form.css'

function TaskForm ({ onAddTask }) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = text.trim();
        if (!value) return;       
        onAddTask(value);         
        setText("");
      };

    return(
        <form onSubmit={ handleSubmit } className="form">
            <input
                type="text"
                placeholder="Nouvelle tâche..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    )

}

export default TaskForm;