// The benifit of defining typescript types in this seperate file with extension (*.d.ts) is that we don't have to explicitly export any of these types.

interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = ( selectedTodo: Todo ) => void;

type AddTodo = (newTodo: string) => void;
