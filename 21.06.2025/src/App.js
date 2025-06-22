import React from 'react';
import initialTodos from './todo.json'
import Todolist from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import { nanoid } from 'nanoid'
import Info from './components/Info';
import Filter from './components/Filter';

class App extends React.Component {
  state={
    todos: initialTodos,
    filter: '',
  }

  addedTodo = (text) => {
    const newTodo = {
      id: nanoid(),
      text: text,
      completed: false
    } 
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }))
  }

  handleChangeFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  deleteBtn = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  getFilteredTask = () => {
    return this.state.todos.filter(todo => {
      return todo.text.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    }) 
  }

  handleChangeCheckBox = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }))
  }
  
  render() {
    return (
      <div>
        <Info total={this.state.todos.length} completed={this.state.todos.filter(todo => todo.completed).length} />
        <TodoEditor onSubmit={this.addedTodo} />
        <Filter onChange={this.handleChangeFilter} />
        <Todolist checked={this.handleChangeCheckBox} todos={this.getFilteredTask()} deleteBtn={this.deleteBtn} />
      </div>
    );
  }
}

export default App;
