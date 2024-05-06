import React, { createContext, useContext, useState } from "react";

// Create a context object to store the theme
const ThemeContext = createContext({
  color: "black",
  fontFamily: "sans-serif"
});

// Create a component that will provide the theme to its children
const ThemeProvider = ({ children }) => {
  const [theme] = useState({
    color: "black",
    fontFamily: "sans-serif"
  });

  // Return a Provider component that will provide the theme to its children
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Todo component to manage and display todos
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos(todos => [...todos, input]); // Use functional update to avoid stale state issues
      setInput(''); // Clear input after submission
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

// Main application component using the theme
const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color, fontFamily: theme.fontFamily }}>
      This is the App component.
      <Todo />
    </div>
  );
};

export default App;  // Assuming this is the default export
export { ThemeProvider, ThemeContext };  // Exporting for potential external use
