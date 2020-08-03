import React, { Component } from 'react';
import TodoDate from './TodoDate';
// import ItemList from './ItemList';
import axios from 'axios';
import ListItem from './ListItem';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: []
        }
    }
    getData() {
        const options = {
          headers: { 
            'Authorization': localStorage.getItem('isAuth') 
          },
        };
        axios.get('http://localhost:5321/task', options)
          .then(res => {
            // pendingArr = res.data.tasks.filter(item => item.isCompleted === false);
            //     completedArr = res.data.tasks.filter(item => item.isCompleted === true);
            //     console.log(pendingArr, completedArr);
            this.setState({ todos: res.data.tasks });
            console.log(res.data)
          })
          .catch(error => {
            console.log(error)
          });
      }


    
      componentDidMount() {
        this.getData()
      }
    render() {
      var {todos} = this.state;
        return (
            <div>
                <TodoDate />
                {/* <ItemList todotodo={todos} /> */}
                <ListItem todotodo={todos} />
               
            </div>
        );
    }
}

export default Task;