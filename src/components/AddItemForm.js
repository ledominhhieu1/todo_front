import React, { useRef }from "react";
import { useAppReducer } from "../AppContext";
import styles from "./AddItemForm.module.scss";
import axios from "axios";

  function AddTask() {
  const dispatch = useAppReducer();
  let inputRef = useRef();

  function addItem() {
    // const dispatch = useAppReducer();
    const newItem = {
      text: inputRef.current.value,
      key: Date.now(),
      status: "pending"
    };
    if (!!newItem.text.trim()) {
      dispatch({ type: "ADD_ITEM", item: newItem });
    }
    axios({
      method: 'post',
      url: 'http://localhost:5321/task',
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        value: inputRef.current.value
      }
    }).then(response => {
       alert('Success');
      //  let task = this.state.value.map(data, index)
     
    }).catch(error => { alert('Fail'); });
  }
    return (
      <form className={styles.form} onSubmit={addItem}>
        <input type="text" placeholder="Add new item"
          ref={inputRef}
           />
        <button type="submit" />
      </form>
    );
  }
export default AddTask;
