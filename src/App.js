import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//       </div>
//     );
//   }
// }

// export default App;
