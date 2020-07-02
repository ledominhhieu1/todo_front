import React, { Component } from 'react';
import { AppStateProvider } from '../AppContext';
import TodoDate from './TodoDate';
import ItemList from './ItemList';


class Task extends Component {
    render() {
        return (
            
                <AppStateProvider>
            <TodoDate />
            <ItemList />
          </AppStateProvider>
        
        );
    }
}

export default Task;