//TodoList is a list showing visible todos.
import React, { Component } from "react";
//import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import todos from "../reducers";
//import {todos} from '../reducers'
//import list from "./todolist.json";

// class Todolist extends Component {
//   render(){
//     const myFilteredTodos = this.props.Todolist.filter((todo, onTodoClick) => {
//       const regex = new RegExp(this.props.searchDescription, "gi");
//       return regex.test(todo.description);
// });

// return(
//   <ul>
//     {myFilteredTodos.map( (todo, index, onTodoClick) => (
//       <Todo key={index} 
//       {...todo} 
//       onClick={() => onTodoClick(index)} />
//     ))}
//   </ul>
// )
//   }
// }
const Todolist = ({ todo, onTodoClick }) => (
  <ul>
    {/*{todos.map((todo, index) => (*/}
      {/*<Todo key={index}*/}
      {/*{...todo} */}
      {/*onClick={() => onTodoClick(index)} />*/}
    {/*))}*/}
  </ul>
)


  




Todolist.propTypes = {
  List: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Todolist