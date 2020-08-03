import React from "react";
import styles from "./AddItemForm.module.scss";
import axios from "axios";
import { history } from '../services/history';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem= this.addItem.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }


  addItem = (e) => {
 
    e.preventDefault();
    console.log(this.state.todoText);
    axios({
      method: 'post',
      url: 'http://localhost:5321/task',
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        value: this.state.todoText
      }
    }).then(res => {
  
    history.go('/task');


  });
  }

  render() {
    var {todoText} = this.state;
    console.log(todoText);
    return (
      <form className={styles.form}>
        <input type="text" placeholder="Add new item"
          name='todoText'
          value={todoText || ""}
          onChange={this.handleChange}
           />
        <button type="submit" onClick={this.addItem}/>
      </form>
    );
  }
}
export default AddItemForm;
