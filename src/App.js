import React from 'react';
import TodoItem from './TodoItem';
import './App.css';

const todos = ['Убрать дома', 'Изучить React и Redux'];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos: todos,
                  value: ''
                  };
  }
  DeleteItem(index) {
    const items = [...this.state.todos];
    items.splice(index, 1);
    this.setState({todos: items});
  }

  changeInput(event){ 
    this.setState({value: event.target.value});
  }
  addItem(event){
    let items = this.state.todos.concat();
    items.push(this.state.value);
    this.setState({todos:items});
    event.preventDefault();
  }


  render(){
    return(
      <div className = "App">
      <h1>TodoApp</h1>
      <form onSubmit = {this.addItem.bind(this)}> 
      <input  type = "text" 
              value = {this.state.value}
              onChange = {this.changeInput.bind(this)}            
              placeholder = "Введите новое дело"

      />
      <input type = "submit" value = "Добавить дело"/>
      </form>
      {this.state.todos.map((item, index) => {
        return <TodoItem todoCase = {item}
                         OnDelete = {this.DeleteItem.bind(this, index)}
        />
      })}
      </div>
    );
  }
}



export default App;
