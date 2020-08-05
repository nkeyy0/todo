import React from 'react';
import './TodoItem.css';

// const itemClasses = [];

// if()

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultClass : 'TodoItem',
            finishToggler : true,
            favoriteToggler: true
        };
    }

    FinishItemToggle(){
        this.setState({finishToggler: !this.state.finishToggler})
        if(this.state.finishToggler === false){
            this.setState({defaultClass : 'TodoItem'});
        }
        else {
            this.setState({defaultClass : 'FinishedItem'});
        }
    }

    FavoriteItemToggle (){
        this.setState({favoriteToggler: !this.state.favoriteToggler})
        if(this.state.favoriteToggler === false){
            this.setState({defaultClass : 'TodoItem'});
        }
        else {
            this.setState({defaultClass : 'FavoriteItem'});
        }
    }
    render(){
        return (
            <div className = {this.state.defaultClass}>
            <p>{this.props.todoCase}</p>
            <button onClick = {this.props.OnDelete }>&#10060;</button>
            <button onClick = {this.FinishItemToggle.bind(this)}>&#9989;</button>
            <button onClick = {this.FavoriteItemToggle.bind(this)}>&#10084;</button>
            </div>);
    }
}



export default TodoItem;
