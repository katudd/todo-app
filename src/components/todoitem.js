import React from "react"

export default class TodoItem extends React.Component {

  removeTodo = () => {
    this.props.removeTodo(this.props.id)
  }

  render() {
    return (
      <div>
        <div className="todo-container">
          <button className="removeTodo" onClick={this.removeTodo}>
            remove
          </button>

          <label>
            <input
              type="checkbox" />
            {this.props.todo.text}
            <span className="checkmark" />
          </label>

        </div>
      </div>
    )
  }
}
