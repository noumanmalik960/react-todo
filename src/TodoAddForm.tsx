import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const TodoAddForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};



// This was the code that I have to make working. Above code I copied
// import React, { useState } from 'react'

// interface Props {
//     addTodo: AddTodo;
// }


// export const TodoAddForm: React.FC<Props> = ({ addTodo }) => {

//     const [newTodo, setNewTodo] = useState("");
//     const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setNewTodo(e.target.value);
//     }
    
//     const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         addTodo(newTodo);
//         setNewTodo("");
//     }


//     return (
//         <form>
//             <input type="text" onChange={handleInput}/>
//             <button type="submit" onClick={handleSubmit}>Add Todo</button>
//         </form>
//     )
// }
