import React, { useState } from "react";

const FormTodo = props => {
    const [description, setDescription] = useState("");
    const {addItem} = props;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);
        setDescription("");

        addItem({
            done: false,
            id: (new Date()).toString(),
            description,
        });

        setDescription("");
    };

    return (
        <form on onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="imput">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button 
                        className="button pink"
                        disabled={description ? "" : "disabled"}
                    >
                        Agregar tarea    
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormTodo;