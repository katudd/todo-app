import React, { Component } from "react"
import uuid from "uuid/v4"
import TodoInput from "./todoinput"
import TodoItem from "./todoitem"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isLoading: true,
      todos: []
    }
  }

  componentWillMount() {
    localStorage.getItem("todos") && this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
      // isLoading: false
    })
  }
  addTodo = todoText => {
    const todos = this.state.todos.slice()
    todos.push({ id: uuid(), text: todoText })
    this.setState({
      todos
    })
  }

  removeTodo = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos))
  }

  render() {
    return (
      <div>

        <div className="todo-wrapper">
          <h1>Get your to do&apos;s done!</h1>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map(todo => (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo} />
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App
