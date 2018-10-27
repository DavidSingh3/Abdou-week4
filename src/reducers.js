import list from "./todoList.json";
//import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'


// const  VisibilityFilters  = {SHOW_ALL: 'SHOW_ALL'}
// ​const visibilityFilter = (state = SHOW_ALL, action) =>{
    
//     switch (action.type) {
//         case 'SET_VISIBILITY_FILTER':
//         return action.filter
//         default:
//         return state
//   }
// }


const initialState = {
    list
}

const todos = (state = initialState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        
              
        case 'ADD_TODO':
            newState.list = [...newState.list, action.item]
            return newState
        
        case 'DELETE_TODO':
            newState.list = newState.list.filter((item, index) => index !== action.index)
            return newState
        
        case 'TOGGLE_TODO':
            newState.list = newState.list.map((todoitem, index) => index === action.index)
            return newState

        
        case 'SET_VISIBILITY_FILTER':
            const  VisibilityFilters  = {SHOW_ALL: 'SHOW_ALL'}
            return action.filter
            
        
            default:
            return state
    }
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
//   })

export default todos