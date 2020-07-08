import React, { Component } from 'react';
import { AppStateProvider } from '../AppContext';
import TodoDate from './TodoDate';
import ItemList from './ItemList';


// function todoList() {

//     axios({
//         method: 'get',
//         url: 'http://localhost:5321/task',
//         headers: {
//             'Authorization': localStorage.getItem('isAuth')
//         },
//     }).then(response => {
//         return response.data;
//     }).catch(error => { alert('Fail'); });
// }

// function loadDataTable()
// {
//     const datatable = window.Datatable;
//     document.getElementById("table").datatable({
//             "ajax":{
//                 "type":"GET",
//                 "dataType":"json",
//                 "url": 'http://localhost:5321/task',
//                 "headers": {
//                     'Authorization': localStorage.getItem('isAuth')
//                 }

//             },
//             "columns": [
//                 {
//                     "data": "_id", "width": "20%"
                    

//                 },
//                 {
//                     "data": "value","width":"80%"
//                 }
//             ]
//         });
    
// }
class Task extends Component {
    render() {
        return (

            <AppStateProvider>
                <TodoDate />
                <ItemList/>
                 {/* <table id="table"></table>
                 {loadDataTable()}
                </ItemList> */}
            </AppStateProvider>

        );
    }
}

export default Task;