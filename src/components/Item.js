

import React, { Component } from 'react';
import styles from "./Item.module.scss";
import axios from 'axios';
import { history } from '../services/history';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textItem: this.props.item.value,
      editTextItem: null,

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }
  deleteItem(itemKey) {
    axios({
      method: 'del',
      url: 'http://localhost:5321/task/' + itemKey,
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        isRemoved: true
      }
    }).then(res => {
      history.go('/task')
    })
  }
  editItem(itemKey) {
    axios({
      method: 'patch',
      url: 'http://localhost:5321/task/' + itemKey,
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        value: this.state.textItem
      }
    }).then(res => {
      history.go('/task')
    })
  }
  completeItem(itemKey) {
    axios({
      method: 'patch',
      url: 'http://localhost:5321/task/' + itemKey,
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        isCompleted: true
      }
    }).then(res => {
      history.go('/task')
    })
  }
  render() {
    let completed = this.props.item.isCompleted === true;
    let itemKey = this.props.item._id;
    return (
      <div className={styles.item} tabIndex="0">
        <div className={styles.itemName}><input style={{
          border: 'none',
          backgroundColor: '#4e4d5c',
          color: 'white'
        }} type='text' name='textItem' value={this.state.textItem} onChange={(event) => this.setState({ textItem: event.target.value })} /> </div>
        <div
          className={`${styles.buttons} ${completed ? styles.completedButtons : ""}`}
        >
          {!completed && (

            <a style={{ margin:'3px' }} href onClick={() => this.completeItem(itemKey)}><img style={{ height: '30px', width: '30px' }} src='../images/action/tick.svg' alt='' /></a>

          )}
          <a style={{ margin:'3px' }} href onClick={() => this.editItem(itemKey)}><img style={{ height: '30px', width: '30px' }} src='../images/action/pencil.svg' alt='' /></a>
          <a style={{ margin:'3px' }} href onClick={() => this.deleteItem(itemKey)}><img style={{ height: '30px', width: '30px' }} src='../images/action/criss-cross.svg' alt='' /></a>
         
        </div>
      </div>
    );
  }
}

export default Item;
