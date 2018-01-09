import React from "react"

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.todoText }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  addTodo = todo => {
    if (todo.length > 0) {
      this.props.addTodo(todo)
      this.setState({ value: "" })
    }
  }

  render() {
    return (
      <div className="todo-form">
        <input type="text" placeholder="Fill them in here" value={this.state.value} onChange={this.handleChange} />
        <button onClick={() => this.addTodo(this.state.value)}>submit</button>
      </div>
    )
  }
}
