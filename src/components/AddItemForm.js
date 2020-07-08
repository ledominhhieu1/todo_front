import React, { useRef }from "react";
import { useAppReducer } from "../AppContext";
import styles from "./AddItemForm.module.scss";
import axios from "axios";

  function AddTask() {
  const dispatch = useAppReducer();
  let inputRef = useRef();

  function addItem() {
    axios({
      method: 'post',
      url: 'http://localhost:5321/task',
      headers: {
        'Authorization': localStorage.getItem('isAuth')
      },
      data: {
        value: inputRef.current.value
      }
    })
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
