import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  const input = {
      id: Date.now,
      description:'description',
      done: false
  }

  return (
    <div>
        <h1> My New Todo List</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input 
            type = 'text'
            placeholder = {'enter Description'}
            ref={node => {
            input = node
             }}
        />

        <br />

        <input 
            type = 'date'
            ref={node => {
            input = node
            
            }}
        />
        <br />

        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo