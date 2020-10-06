import React from 'react';




interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}


export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li style={{listStyle: 'square'}}>
            <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input  type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/> {todo.text}
            </label>
        </li>
    )
}